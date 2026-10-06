import { ArrowUpRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/profile-data'
import { ContactForm } from './contact-form'
import { Section } from './section'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Globe, label: 'Website', value: profile.website, href: `https://${profile.website}` },
]

const socialLinks = [
  { label: 'LinkedIn', href: `https://${profile.linkedin}` },
  { label: 'GitHub', href: `https://${profile.github}` },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title="Let’s talk about what you’re building"
      description="I welcome conversations about executive and advisory roles, board positions, speaking engagements, and complex technology challenges."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 block break-words font-medium text-foreground hover:text-primary hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-medium text-foreground">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{profile.availability}.</p>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
