import type { Locale } from "./config";

type ContactTranslations = {
  heading: string;
  subtitle1: string;
  subtitle2: string;
  subtitle2End: string;
  highlight: string;
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
};

export const contactTranslations: Record<Locale, ContactTranslations> = {
  "pt-BR": {
    heading: "Vamos falar sobre oportunidades",
    subtitle1: "Atualmente estou aberta a novas oportunidades e colaborações.",
    subtitle2: "Seja para tirar dúvidas, propor um projeto ou apenas dizer um",
    subtitle2End: ", fique à vontade para entrar em contato — responderei o mais breve possível.",
    highlight: "olá",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Telefone",
      phonePlaceholder: "(11) 99999-9999",
      subject: "Assunto",
      subjectPlaceholder: "Assunto",
      message: "Mensagem",
      messagePlaceholder: "Vamos conversar sobre...",
      submit: "Enviar Mensagem",
      submitting: "Enviando...",
    },
    messages: {
      success: "Mensagem enviada! Obrigada.",
      error: "Erro ao enviar mensagem.",
      networkError: "Erro de rede. Tente novamente.",
    },
  },
  en: {
    heading: "Let's talk about opportunities",
    subtitle1: "I'm currently open to new opportunities and collaborations.",
    subtitle2: "Whether to ask questions, propose a project, or just say",
    subtitle2End: ", feel free to reach out — I'll respond as soon as possible.",
    highlight: "hello",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Phone",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "Subject",
      subjectPlaceholder: "Subject",
      message: "Message",
      messagePlaceholder: "Let's talk about...",
      submit: "Send Message",
      submitting: "Sending...",
    },
    messages: {
      success: "Message sent! Thank you.",
      error: "Error sending message.",
      networkError: "Network error. Please try again.",
    },
  },
};
