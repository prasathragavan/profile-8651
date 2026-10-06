import { about } from '@/lib/profile-data'
import { Section } from './section'

export function About() {
  return (
    <Section id="about" eyebrow="01 — About Me" title="Building technology organizations that endure">
      <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-12">
        <div aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-foreground/85">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
          <ul className="flex flex-col gap-6 border-l border-border pl-6">
            {about.principles.map((principle) => (
              <li key={principle.title}>
                <h3 className="font-serif text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
