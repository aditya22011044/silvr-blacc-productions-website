import { motion } from 'framer-motion'
import { Crown, Shield } from 'lucide-react'
import ChromeButton from '../components/ChromeButton'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

const services = [
  {
    title: 'COMPLETE CAMPAIGN MANAGEMENT',
    description:
      'End-to-end management of political campaigns, from strategy to execution',
  },
  {
    title: 'BRAND POSITIONING & NARRATIVE',
    description: 'Crafting the candidate\'s story and building a winning political narrative',
  },
  {
    title: 'GROUND-LEVEL OUTREACH',
    description: 'Consultancy for ground-level mobilization and voter outreach programs',
  },
  {
    title: 'RALLIES & ROADSHOWS',
    description: 'Complete program guides for high-impact rallies, roadshows, and public meetings',
  },
  {
    title: 'PERSONALITY DEVELOPMENT',
    description: 'Candidate training for media presentation, speech, and public appearance',
  },
  {
    title: 'AGENDAS & MANIFESTOS',
    description: 'Creating policy agendas and compelling manifestos that resonate with the electorate',
  },
]

export default function Political() {
  return (
    <motion.div {...pageMotion} className="page-shell creepy-bg-political">
      <div className="mist-overlay" />
      <div className="h-[4px] w-full bg-[#8b0000]" />
      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-12 top-10 hidden -rotate-90 font-mono text-[10px] uppercase tracking-[0.3em] text-[#c45200] md:block">
              SILVER BLACK / POLITICAL
            </div>
            <div className="font-display text-[clamp(72px,10vw,130px)] leading-[0.95] chrome-red drop-shadow-[0_0_40px_rgba(139,0,0,0.3)]">
              POLITICAL CONSULTANCY
            </div>
            <div className="mt-5 font-body text-[22px] italic text-[#c45200]">
              We Turn Strategy Into Power.
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative flex h-[220px] w-[220px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[rgba(139,0,0,0.18)] blur-2xl" />
              <div className="relative grid place-items-center">
                <Shield className="h-24 w-24 text-[var(--chrome-solid)]" />
                <Crown className="-mt-4 h-16 w-16 text-[#8b0000]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#c0c0c0] to-[#c45200] bg-clip-text text-transparent">
          OUR SERVICES
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="gothic-card p-8 transition hover:shadow-[0_0_20px_rgba(196,82,0,0.3)]"
              style={{
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: 'var(--orange-accent)',
              }}
            >
              <div className="font-display text-[24px] leading-none text-white">
                {s.title}
              </div>
              <div className="mt-4 font-body italic text-[15px] text-[#707070]">
                {s.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-11 md:gap-12">
          <div className="md:col-span-6">
            <div className="border-l-4 border-[#8b0000] pl-8 font-body text-[36px] italic leading-tight bg-gradient-to-r from-[#c0c0c0] to-[#8b0000] bg-clip-text text-transparent">
              In politics, perception is everything. We control both.
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col gap-4 font-body text-[18px] text-[#c0c0c0]">
              {[
                'Narrative control through precision messaging',
                'Digital operations built for rapid response',
                'Creative built to dominate attention cycles',
              ].map((t) => (
                <div key={t} className="flex gap-3">
                  <div className="mt-2 h-[2px] w-4 bg-[#8b0000]" />
                  <div>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="text-center">
          <div className="font-display text-[80px] leading-none bg-gradient-to-r from-[#8b0000] via-[#c0c0c0] to-[#8b0000] bg-clip-text text-transparent">
            READY TO WIN?
          </div>
          <div className="mt-10 flex justify-center">
            <ChromeButton
              href="mailto:hello@silvrblacc.com"
              variant="outline"
              className="border-[#8b0000] hover:bg-[rgba(139,0,0,0.2)]"
            >
              Begin Consultancy
            </ChromeButton>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

