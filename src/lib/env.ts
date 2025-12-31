import { z } from "zod";


const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY é obrigatória"),
  RESEND_FROM: z.string().min(1, "RESEND_FROM é obrigatório"),
  RESEND_EMAIL_TO: z.string().email("RESEND_EMAIL_TO deve ser um email válido"),
  HYGRAPH_URL: z.string().url("HYGRAPH_URL deve ser uma URL válida"),
  HYGRAPH_TOKEN: z.string().min(1, "HYGRAPH_TOKEN é obrigatório"),
});


const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Variáveis de ambiente inválidas:", parsedEnv.error.flatten().fieldErrors);
  throw new Error("Erro nas variáveis de ambiente");
}

export const env = parsedEnv.data;
