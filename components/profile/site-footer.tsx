import { profile } from '@/lib/profile-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {'© '}
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  )
}
