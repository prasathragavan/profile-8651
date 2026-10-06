import { story } from '@/lib/profile-data'
import { Section } from './section'

export function Story() {
  return (
    <Section
      id="story"
      eyebrow="02 — My Story"
      title="Two decades, one constant: shipping what matters"
      description="From an early engineer at a logistics startup to leading a global technology organization — each chapter taught me something about people, systems, and scale."
      className="border-y border-border bg-card"
    >
      <ol className="flex flex-col">
        {story.map((item) => (
          <li
            key={item.period}
            className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <p className="font-mono text-sm text-muted-foreground tabular-nums">{item.period}</p>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
