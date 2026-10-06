import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { awards, certifications, education } from '@/lib/profile-data'
import { Section } from './section'

function ColumnHeading({ icon: Icon, children }: { icon: typeof Award; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 border-b border-border pb-4 font-serif text-xl font-semibold">
      <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      {children}
    </h3>
  )
}

export function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="05 — Credentials"
      title="Education, certifications & recognition"
    >
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        <div>
          <ColumnHeading icon={GraduationCap}>Education</ColumnHeading>
          <ul className="mt-6 flex flex-col gap-7">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="font-mono text-xs text-muted-foreground tabular-nums">{item.period}</p>
                <p className="mt-1 font-semibold text-foreground">{item.degree}</p>
                <p className="text-sm font-medium text-accent">{item.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnHeading icon={BadgeCheck}>Certifications</ColumnHeading>
          <ul className="mt-6 flex flex-col divide-y divide-border">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-4 first:pt-0">
                <p className="font-medium leading-snug text-foreground">{cert.name}</p>
                <p className="mt-1 flex justify-between gap-4 text-sm text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span className="font-mono tabular-nums">{cert.year}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnHeading icon={Award}>Awards & Honors</ColumnHeading>
          <ul className="mt-6 flex flex-col gap-4">
            {awards.map((award) => (
              <li key={award.title} className="rounded-lg border border-border bg-card p-5">
                <p className="font-mono text-xs font-medium text-accent tabular-nums">{award.year}</p>
                <p className="mt-1 font-semibold leading-snug text-foreground">{award.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{award.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
