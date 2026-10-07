import Image from 'next/image'
import { ArrowDownRight, Mail, MapPin, Phone, Globe } from 'lucide-react'
import { profile } from '@/lib/profile-data'

export function Hero() {
  return (
    <section id="top" aria-labelledby="profile-name" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_320px] md:items-center md:py-24 lg:gap-20">
        <div className="order-2 md:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1
            id="profile-name"
            className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary md:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.bio}
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-foreground sm:grid-cols-2">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary hover:underline">
                <Mail className="size-4 text-accent" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 hover:text-primary hover:underline"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://${profile.website}`}
                className="flex items-center gap-3 hover:text-primary hover:underline"
              >
                <Globe className="size-4 text-accent" aria-hidden="true" />
                {profile.website}
              </a>
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View selected work
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm md:w-full">
            <Image
              src="/images/Profile_Pic.png"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 320px, 224px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-card">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 ${i % 2 === 1 ? 'pl-6 md:pl-8' : ''} ${i > 0 ? 'md:border-l md:border-border md:pl-8' : ''} ${i === 1 || i === 3 ? 'border-l border-border' : ''} ${i > 1 ? 'border-t border-border md:border-t-0' : ''}`}
            >
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-primary md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
