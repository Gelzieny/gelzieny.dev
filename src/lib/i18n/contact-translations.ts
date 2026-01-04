import type { Locale } from "./config";

export const contactTranslations: Record<Locale, {
  heading: string;
  subtitle1: string;
  subtitle2: string;
  highlight: string;
  subtitle2End: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
  };
  messages: {
    success: string;
    error: string;
    networkError: string;
  };
}> = {
  pt: {
    heading: "Vamos conversar?",
    subtitle1: "Fique à vontade para entrar em contato.",
    subtitle2: "Estou aberta a oportunidades, projetos e colaborações.",
    highlight: "Vamos criar algo incrível",
    subtitle2End: " juntos.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      phone: "Telefone",
      phonePlaceholder: "(00) 00000-0000",
      subject: "Assunto",
      subjectPlaceholder: "Sobre o que deseja falar?",
      message: "Mensagem",
      messagePlaceholder: "Escreva sua mensagem aqui...",
      submit: "Enviar mensagem",
      submitting: "Enviando...",
    },
    messages: {
      success: "Mensagem enviada com sucesso! 😊",
      error: "Erro ao enviar a mensagem.",
      networkError: "Erro de conexão. Tente novamente.",
    },
  },

  en: {
    heading: "Let's talk?",
    subtitle1: "Feel free to get in touch.",
    subtitle2: "I'm open to opportunities, projects and collaborations.",
    highlight: "Let's build something great",
    subtitle2End: " together.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phonePlaceholder: "(00) 00000-0000",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      submit: "Send message",
      submitting: "Sending...",
    },
    messages: {
      success: "Message sent successfully! 😊",
      error: "Error sending the message.",
      networkError: "Network error. Please try again.",
    },
  },
};
