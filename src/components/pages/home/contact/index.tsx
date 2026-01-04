"use client";

import { useState } from "react";
import type { SocialMedia } from "@/lib/types/page-home";
import type { Locale } from "@/lib/i18n/config";
import { contactTranslations } from "@/lib/i18n/contact-translations";


export type ContactProps = {
  socialMedias: SocialMedia[];
  locale: Locale;
}

export function Contact({ socialMedias, locale }: ContactProps) {
  const t = contactTranslations[locale];
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
        setStatus(t.messages.success);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const json = await res.json();
        setStatus(json?.error || t.messages.error);
      }
    } catch (err) {
      setStatus(t.messages.networkError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="container snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 pt-12 sm:pt-16 lg:pt-20 pb-12">

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t.heading}</h3>
          <p className="text-gray-700 dark:text-gray-300">{t.subtitle1}</p>
          <p className="text-gray-700 dark:text-gray-300">
            {t.subtitle2} <span className="font-bold text-purple-800 dark:text-purple-500">"{t.highlight}"</span>{t.subtitle2End}
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialMedias.map(({ name, url, iconSvg }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group relative p-3 rounded-xl bg-white/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-white/10"
              >
                <span
                  className="
                    w-8 h-8
                    text-gray-700 dark:text-gray-300
                    group-hover:text-purple-500
                    transition-colors
                    [&>svg]:w-full
                    [&>svg]:h-full
                  "
                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl ml-auto">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm text-gray-700 dark:text-gray-300">{t.form.name}</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} type="text" name="name" placeholder={t.form.namePlaceholder} className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">{t.form.email}</label>
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email" name="email" placeholder={t.form.emailPlaceholder} className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">{t.form.phone}</label>
            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} type="tel" name="phone" placeholder={t.form.phonePlaceholder} className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" />

            <label className="text-sm text-gray-700 dark:text-gray-300">{t.form.subject}</label>
            <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} type="text" name="subject" placeholder={t.form.subjectPlaceholder} className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3" required />

            <label className="text-sm text-gray-700 dark:text-gray-300">{t.form.message}</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} name="message" rows={6} placeholder={t.form.messagePlaceholder} className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-3 resize-none" required />

            <button disabled={loading} type="submit" className="mt-2 w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-md">
              {loading ? t.form.submitting : t.form.submit}
            </button>

            {status && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
