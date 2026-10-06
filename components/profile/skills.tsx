import { expertise, skillGroups } from '@/lib/profile-data'
import { Section } from './section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Skills & Tech Stack"
      title="Depth across strategy, architecture, and execution"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="font-serif text-lg font-semibold">Core expertise</h3>
          <ul className="mt-6 flex flex-col gap-5">
            {expertise.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="tabular-nums text-muted-foreground">{item.level}%</span>
                </div>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-label={item.name}
                  aria-valuenow={item.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
