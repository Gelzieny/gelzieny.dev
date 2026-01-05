import { env } from "./env"

type GraphQLResponse<T> = {
  data?: T
  errors?: { message: string }[]
}

// Cache de requisições em memória para evitar duplicatas durante o build
const requestCache = new Map<string, Promise<any>>();

export async function hygraphRequest<T>(
  query: string,
  variables?: Record<string, any>,
  tags?: string[]
): Promise<T> {
  // Cria uma chave única para esta requisição
  const cacheKey = JSON.stringify({ query, variables });
  
  // Se já existe uma requisição idêntica em andamento, retorna ela
  if (requestCache.has(cacheKey)) {
    return requestCache.get(cacheKey) as Promise<T>;
  }
  
  // Cria a nova requisição
  const requestPromise = (async () => {
    try {
      // Adiciona um pequeno delay para evitar rate limiting
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const response = await fetch(env.HYGRAPH_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        next: { 
          revalidate: 3600,
          tags: tags || ['hygraph'],
        },
      });

      const json: GraphQLResponse<T> = await response.json();

      if (json.errors) {
        console.error("Hygraph error:", json.errors);
        throw new Error("Erro ao consultar o Hygraph");
      }

      return json.data as T;
    } finally {
      // Remove do cache após a requisição completar
      setTimeout(() => requestCache.delete(cacheKey), 1000);
    }
  })();
  
  // Armazena a promise no cache
  requestCache.set(cacheKey, requestPromise);
  
  return requestPromise;
}
