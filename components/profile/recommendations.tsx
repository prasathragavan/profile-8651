import { Quote } from 'lucide-react'
import { recommendations } from '@/lib/profile-data'
import { Section } from './section'

export function Recommendations() {
  return (
    <Section
      id="recommendations"
      eyebrow="06 — Recommendations"
      title="In the words of colleagues"
      className="bg-primary text-primary-foreground [&_h2]:text-primary-foreground [&_p.text-muted-foreground]:text-primary-foreground/70"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {recommendations.map((rec) => (
          <figure
            key={rec.name}
            className="flex flex-col rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-8"
          >
            <Quote className="size-6 text-accent" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-pretty">
              <p>{`“${rec.quote}”`}</p>
            </blockquote>
            <figcaption className="mt-8 border-t border-primary-foreground/15 pt-5">
              <p className="font-semibold">{rec.name}</p>
              <p className="mt-0.5 text-sm text-primary-foreground/75">{rec.role}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-accent">{rec.relationship}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
