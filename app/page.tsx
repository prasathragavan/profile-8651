import { About } from '@/components/profile/about'
import { Contact } from '@/components/profile/contact'
import { Credentials } from '@/components/profile/credentials'
import { Hero } from '@/components/profile/hero'
import { Projects } from '@/components/profile/projects'
import { Recommendations } from '@/components/profile/recommendations'
import { SiteFooter } from '@/components/profile/site-footer'
import { SiteHeader } from '@/components/profile/site-header'
import { Skills } from '@/components/profile/skills'
import { Story } from '@/components/profile/story'
import { recommendations } from '@/lib/profile-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Story />
        <Skills />
        <Projects />
        <Credentials />
        {recommendations.length > 0 && <Recommendations />}
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
