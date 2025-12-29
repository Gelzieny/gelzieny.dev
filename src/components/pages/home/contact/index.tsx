"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { ToolIconsGrid } from "@/components/ui/tool-icons-grid";

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

// const redesSociais = [
//   { name: "GitHub", icon: Github, link: "https://github.com/Gelzieny" },
//   { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/gelzieny" },
//   { name: "Twitter / X", icon: Twitter, link: "https://x.com/GelzienyRM" },
//   { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/gelzieny/" },
// ];

const socialIcons = [
  { name: "GitHub", slug: "/icons/github.svg", href: "https://github.com/gelzieny" },
  { name: "LinkedIn", slug: "/icons/linkedin.svg", href: "https://linkedin.com/in/gelzieny" },
  { name: "Instagram", slug: "/icons/instagram.svg", href: "https://instagram.com/gelzieny" },
  { name: "Twitter / X", slug: "/icons/twitterx.svg", href: "https://x.com/GelzienyRM" },
  { name: "WhatsApp", slug: "/icons/whatsapp.svg", href: "https://wa.me/5562981250240" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Mensagem enviada! Obrigada.');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const json = await res.json();
        setStatus(json?.error || 'Erro ao enviar mensagem.');
      }
    } catch (err) {
      setStatus('Erro de rede. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="container snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 min-h-screen pt-20  sm:pt-24  lg:pt-28">

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vamos falar sobre oportunidades</h3>
          <p className="text-gray-700 dark:text-gray-300">Atualmente estou aberta a novas oportunidades e colaborações.</p>
          <p className="text-gray-700 dark:text-gray-300">Seja para tirar dúvidas, propor um projeto ou apenas dizer um <span className="font-bold text-purple-800 dark:text-purple-500">"olá"</span>, fique à vontade para entrar em contato — responderei o mais breve possível.</p>

          <div className="mt-6 flex items-center gap-3">
            {socialIcons.map(({ name, slug, href }) => (
              <a
                key={slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-white/10"
              >
                <Image src={slug} width={40} height={40} alt={name} />
                
              </a>
            ))}
          </div>

        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl ml-auto">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm text-gray-700 dark:text-gray-300">Nome</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} type="text" name="name" placeholder="Seu nome" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email" name="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">Telefone</label>
            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} type="tel" name="phone" placeholder="(11) 99999-9999" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">Assunto </label>
            <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} type="text" name="subject" placeholder="Assunto" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">Mensagem</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} name="message" rows={6} placeholder="Vamos conversar sobre..." className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3 resize-none" required />

            <button disabled={loading} type="submit" className="mt-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-md">
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {status && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
