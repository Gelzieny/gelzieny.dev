import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="container snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 min-h-screen pt-20  sm:pt-24  lg:pt-28">
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vamos falar sobre oportunidades</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Atualmente estou aberta a novas oportunidades e colaborações.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Seja para tirar dúvidas, propor um projeto ou apenas dizer um <span className="font-bold text-purple-800 dark:text-purple-500">"olá"</span>, 
            fique à vontade para entrar em contato — responderei o mais breve possível.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Github size={28} />
            </Link>

            <Link href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Linkedin size={28} />
            </Link>
          </div>
        </div>

        <form className="w-full max-w-xl ml-auto">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm text-gray-700 dark:text-gray-300">Nome</label>
            <input type="text" name="name" placeholder="Seu nome" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" name="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">Telefone</label>
            <input type="tel" name="phone" placeholder="(11) 99999-9999" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">Assunto </label>
            <input type="text" name="subject" placeholder="Subject" className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
            <textarea name="message" rows={6} placeholder="Let's talk about..." className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3 resize-none" />

            <button type="submit" className="mt-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-md">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
