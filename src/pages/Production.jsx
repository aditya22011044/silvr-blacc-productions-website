import { motion } from 'framer-motion'
import { Camera, Music, PenLine, Scissors } from 'lucide-react'
import ChromeButton from '../components/ChromeButton'
import ProfileCard from '../components/ProfileCard'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

const strips = [
  {
    no: '01',
    icon: Music,
    name: 'MUSIC PRODUCTION & DISTRO',
    desc: 'Professional mixing, mastering, and global distribution for artists and labels',
  },
  {
    no: '02',
    icon: Camera,
    name: 'CREATIVE MEDIA AGENCY',
    desc: 'Music videos, ad shoots, product films, and high-end event coverage',
  },
  {
    no: '03',
    icon: Scissors,
    name: 'POST-PRODUCTION & EDITS',
    desc: 'Cinematic editing, color grading, and motion graphics for films and games',
  },
  {
    no: '04',
    icon: PenLine,
    name: 'AUDIO & CUSTOM SCORES',
    desc: 'Background music for films, custom music videos, and original compositions',
  },
]

const team = [
  {
    initials: 'MV',
    name: 'MARCUS VAEL',
    role: 'MUSIC PRODUCER',
    bio: 'Multi-genre producer with 10+ years crafting sonic landscapes',
  },
  {
    initials: 'RC',
    name: 'REYNA CROSS',
    role: 'CINEMATOGRAPHER',
    bio: 'Cinematic visionary behind award-winning films and music videos',
  },
  {
    initials: 'DS',
    name: 'DJ SOLSTICE',
    role: 'SOUND ENGINEER & MIX',
    bio: 'Precision engineering across hip-hop, electronic, Afrobeat, cinematic',
  },
  {
    initials: 'NO',
    name: 'NADIA OSEI',
    role: 'FILM EDITOR',
    bio: 'Fast-cut narrative editing for music videos and social campaigns',
  },
  {
    initials: 'AM',
    name: 'ARJUN MEHTA',
    role: 'SONGWRITER',
    bio: 'Prolific songwriter with cuts in Bollywood, international pop, sync',
  },
  {
    initials: 'LV',
    name: 'LENA VOSS',
    role: 'DIRECTOR OF PHOTOGRAPHY',
    bio: 'Lighting and composition expert trained in Hollywood pipelines',
  },
  {
    initials: 'KT',
    name: 'KAI THERON',
    role: 'DISTRIBUTION STRATEGIST',
    bio: 'Label-independent distribution expert across all major DSPs',
  },
]

export default function Production() {
  return (
    <motion.div {...pageMotion} className="page-shell creepy-bg-production">
      <div className="mist-overlay" />
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1200px] px-6 py-28">
          <div className="font-display text-[clamp(64px,9vw,120px)] leading-[0.92] chrome-silver">
            PRODUCTION &amp; <br /> MEDIA AGENCY
          </div>
          <div className="mt-6 font-body text-[22px] italic text-[#a0a0a0]">
            Where Raw Talent Meets Elite Execution.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="border-t border-[rgba(192,192,192,0.08)]">
          {strips.map((s) => (
            <div
              key={s.no}
              className="grid grid-cols-1 items-center gap-6 border-b border-[rgba(192,192,192,0.08)] py-10 md:grid-cols-12"
            >
              <div className="font-display text-[92px] leading-none text-white opacity-[0.15] md:col-span-2">
                {s.no}
              </div>
              <div className="flex items-center gap-4 md:col-span-4">
                <s.icon className="h-7 w-7 text-[var(--chrome-solid)]" />
                <div className="font-display text-[28px] leading-none text-white">
                  {s.name}
                </div>
              </div>
              <div className="font-body italic text-[15px] text-[#707070] md:col-span-6">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="font-display text-[56px] leading-none chrome-text">
          THE TEAM
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((p) => (
            <ProfileCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="h-[2px] w-full bg-[#c0c0c0]" />
        <div className="mt-10 grid grid-cols-1 gap-6 text-center md:grid-cols-4">
          {['150+ Platforms', 'Sync Licensing', 'Playlist Pitching', 'Physical Distribution'].map(
            (t) => (
              <div
                key={t}
                className="border border-[rgba(192,192,192,0.12)] bg-[#0d0d0d] px-6 py-10 font-display text-[24px] leading-none text-white"
              >
                {t}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="text-center">
          <div className="font-display text-[72px] leading-none chrome-text">
            BRING YOUR VISION TO LIFE
          </div>
          <div className="mt-10 flex justify-center">
            <ChromeButton href="mailto:hello@silvrblacc.com" variant="outline">
              Work With Our Team
            </ChromeButton>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
