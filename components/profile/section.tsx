import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-4 md:grid-cols-[220px_1fr] md:gap-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <div>
            <h2
              id={`${id}-title`}
              className="font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
