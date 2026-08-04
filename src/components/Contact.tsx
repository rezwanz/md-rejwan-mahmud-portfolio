import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contact, site, socialLinks } from "../data/content";
import { socialIconMap } from "../lib/social-icons";
import SectionReveal from "./SectionReveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <SectionReveal>
        <p className="font-mono-accent text-sm text-primary">06. Contact</p>
        <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-light/80 dark:text-text/80">
          {contact.subheading}
        </p>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-border-light bg-bg-light px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-border dark:bg-bg"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border border-border-light bg-bg-light px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-border dark:bg-bg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full resize-none rounded-xl border border-border-light bg-bg-light px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-border dark:bg-bg"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={16} />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 size={16} />
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} />
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </div>
        </form>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="rounded-full border border-border-light p-2.5 text-text-light/70 transition-colors hover:border-primary hover:text-primary dark:border-border dark:text-text/70"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
