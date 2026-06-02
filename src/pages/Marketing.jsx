import { motion } from 'framer-motion'
import {
  BarChart2,
  DollarSign,
  Share2,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import ChromeButton from '../components/ChromeButton'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

const services = [
  {
    icon: Share2,
    title: 'SOCIAL MEDIA DOMINATION',
    desc: 'Twitter, Facebook, YouTube, Instagram — we own the algorithm',
  },
  {
    icon: Target,
    title: 'META ADS & PAID PROMOS',
    desc: 'High-performance ad campaigns on Facebook, Instagram, and WhatsApp',
  },
  {
    icon: TrendingUp,
    title: 'AD BOOSTING & ENGAGEMENT',
    desc: 'Strategic boosting to maximize reach and drive organic momentum',
  },
  {
    icon: Users,
    title: 'INFLUENCER NETWORK',
    desc: 'End-to-end management of creator partnerships and viral seeding',
  },
  {
    icon: DollarSign,
    title: 'PAID MEDIA OPTIMIZATION',
    desc: 'Data-driven ad spend across Google, TikTok, and emerging platforms',
  },
  {
    icon: BarChart2,
    title: 'FULL-STACK ANALYTICS',
    desc: 'Real-time performance tracking and market intelligence',
  },
]

const process = [
  {
    no: '1',
    name: 'DISCOVER',
    desc: 'Audit your brand, channels, and competitive landscape',
  },
  { no: '2', name: 'STRATEGIZE', desc: 'Build the campaign blueprint: channels, messaging, KPIs' },
  { no: '3', name: 'EXECUTE', desc: 'Launch, create, distribute across all active channels' },
  { no: '4', name: 'SCALE', desc: 'Optimize based on data. Eliminate waste. Amplify wins.' },
]

export default function Marketing() {
  return (
    <motion.div {...pageMotion} className="page-shell creepy-bg-marketing">
      <div className="mist-overlay" />
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1200px] px-6 py-28">
          <div className="font-display text-[clamp(80px,14vw,180px)] leading-[0.9] chrome-green drop-shadow-[0_0_80px_rgba(0,255,127,0.15)]">
            MARKETING <br /> AGENCY
          </div>
          <div className="mt-5 font-mono text-[16px] uppercase tracking-[0.2em] text-[#00ff7f]">
            Twitter. Facebook. YouTube. Instagram. Meta.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#00ff7f] to-[#c0c0c0] bg-clip-text text-transparent">
          SERVICES
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="gothic-card p-8 transition hover:shadow-[0_0_24px_rgba(0,255,127,0.2)]"
              style={{
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: 'var(--green-accent)',
              }}
            >
              <div className="flex items-center gap-4">
                <s.icon className="h-7 w-7 text-[#00ff7f]" />
                <div className="font-display text-[22px] leading-none text-white">
                  {s.title}
                </div>
              </div>
              <div className="mt-4 font-body italic text-[15px] text-[#707070]">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#00ff7f] to-[#c0c0c0] bg-clip-text text-transparent">
          OUR PROCESS
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          {process.map((p, idx) => (
            <div key={p.no} className="relative">
              {idx !== 0 ? (
                <div className="absolute -left-5 top-9 hidden h-[1px] w-10 bg-[#00ff7f] md:block" />
              ) : null}
              <div className="font-display text-[80px] leading-none text-[#00ff7f] opacity-30">
                {p.no}
              </div>
              <div className="mt-2 font-display text-[28px] leading-none text-white">
                {p.name}
              </div>
              <div className="mt-3 font-body italic text-[15px] text-[#609070]">
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="text-center">
          <div className="font-display text-[clamp(80px,12vw,140px)] leading-none bg-gradient-to-r from-[#00ff7f] via-[#c0c0c0] to-[#00ff7f] bg-clip-text text-transparent">
            LET&apos;S GROW.
          </div>
          <div className="mt-10 flex justify-center">
            <ChromeButton
              href="mailto:hello@silvrblacc.com"
              variant="fill"
              className="border border-[#00ff7f]"
              style={{ background: 'var(--green-accent)', color: '#050505' }}
            >
              Start A Campaign
            </ChromeButton>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

