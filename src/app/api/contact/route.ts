import { z } from "zod";
import { Resend } from "resend";

import { env } from "@/lib/env";

const ContactSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional().nullable(),
  subject: z.string().optional(),
  message: z.string().min(1, "Mensagem obrigatória"),
});

const RESEND_API_KEY = env.RESEND_API_KEY;
const RESEND_FROM = env.RESEND_FROM;
const RESEND_EMAIL_TO = env.RESEND_EMAIL_TO;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = ContactSchema.parse(body);

    if (!resend || !RESEND_FROM || !RESEND_EMAIL_TO) {
      return new Response(
        JSON.stringify({
          error:
            "Resend não configurado (verifique RESEND_API_KEY, RESEND_FROM, RESEND_EMAIL_TO)",
        }),
        { status: 500 }
      );
    }

    const subject = `[Site] ${data.subject || "Novo contato"}`;

    const htmlToYou = `
      <h3>Novo contato pelo site</h3>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefone:</strong> ${data.phone || "-"}</p>
      <hr />
      <p>${String(data.message).replace(/\n/g, "<br/>")}</p>
    `;

    // 📩 Email para você
    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_EMAIL_TO,
      replyTo: data.email,
      subject,
      html: htmlToYou,
    });

    // 🤍 Auto-resposta
    await resend.emails.send({
      from: RESEND_FROM,
      to: data.email,
      subject: "Recebi sua mensagem 😊",
      html: `
        <p>Olá, ${data.name}!</p>
        <p>Obrigada por entrar em contato.</p>
        <p>Recebi sua mensagem e responderei o mais breve possível.</p>
        <br/>
        <p>Atenciosamente,<br/>
        <strong>Gelzieny R. Martins</strong></p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    if (err?.errors) {
      return new Response(JSON.stringify({ error: err.errors }), {
        status: 400,
      });
    }

    console.error("CONTACT API ERROR:", err);
    return new Response(
      JSON.stringify({ error: err?.message || "Erro inesperado" }),
      { status: 500 }
    );
  }
}
