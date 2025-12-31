import { env } from "./env"

type GraphQLResponse<T> = {
  data?: T
  errors?: { message: string }[]
}

export async function hygraphRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
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
    // cache do Next (opcional)
    next: { revalidate: 60 },
  })

  const json: GraphQLResponse<T> = await response.json()

  if (json.errors) {
    console.error("Hygraph error:", json.errors)
    throw new Error("Erro ao consultar o Hygraph")
  }

  return json.data as T
}
