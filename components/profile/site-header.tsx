import { navItems, profile } from '@/lib/profile-data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary font-serif text-sm font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden font-serif text-lg font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </a>
        <nav aria-label="Primary" className="-mr-2 overflow-x-auto">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href} className={item.href === '#contact' ? '' : 'hidden lg:block'}>
                <a
                  href={item.href}
                  className={
                    item.href === '#contact'
                      ? 'ml-2 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
                      : 'rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
                  }
                >
                  {item.href === '#contact' ? 'Get in touch' : item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
