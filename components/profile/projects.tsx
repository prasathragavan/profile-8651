import { TrendingUp } from 'lucide-react'
import { projects } from '@/lib/profile-data'
import { Section } from './section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Selected Projects"
      title="Platforms that moved the business"
      description="A selection of initiatives I led end-to-end — from the first architecture review to sustained operation at scale."
      className="border-y border-border bg-card"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
              <span className="font-medium uppercase tracking-wider">{project.organization}</span>
              <span className="font-mono tabular-nums">{project.year}</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground text-balance">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
              <TrendingUp className="size-4 text-accent" aria-hidden="true" />
              {project.impact}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded bg-muted px-2 py-1 text-xs font-medium text-foreground/80">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
