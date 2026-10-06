import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { caseStudies, projects } from '@/lib/profile-data'
import { Section } from './section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Selected Projects"
      title="Work that moved the business"
      description="Highlights from leading web, mobile and payments initiatives — plus my product management portfolio."
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

      <div className="mt-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h3 className="font-serif text-2xl font-semibold text-foreground">Product Management Portfolio</h3>
          <p className="text-sm text-muted-foreground">Case studies from the Duke CE / UpGrad program</p>
        </div>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <li key={study.href} className="bg-background">
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between gap-4 p-5 transition-colors hover:bg-muted"
              >
                <span>
                  <span className="block font-semibold text-foreground group-hover:text-primary">{study.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{study.summary}</span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
