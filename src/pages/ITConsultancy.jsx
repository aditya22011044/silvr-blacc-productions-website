import { motion } from 'framer-motion'
import { Brain, Cloud, Code2, Plug, ShieldCheck, Smartphone } from 'lucide-react'
import ChromeButton from '../components/ChromeButton'
import CodeRain from '../components/CodeRain'
import MarqueeTicker from '../components/MarqueeTicker'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

const services = [
  {
    icon: Code2,
    title: 'CUSTOM SOFTWARE DEV',
    desc: 'Full-stack applications built to scale — web, desktop, enterprise',
  },
  {
    icon: Brain,
    title: 'AI & MACHINE LEARNING',
    desc: 'Custom AI models, LLM integrations, automation pipelines',
  },
  {
    icon: Smartphone,
    title: 'WEB & MOBILE DEV',
    desc: 'React, Next.js, React Native — performance-first apps',
  },
  {
    icon: Cloud,
    title: 'CLOUD & DEVOPS',
    desc: 'AWS, GCP, Docker, Kubernetes — scalable infrastructure and CI/CD',
  },
  {
    icon: ShieldCheck,
    title: 'CYBERSECURITY CONSULTING',
    desc: 'Penetration testing, security audits, and compliance frameworks',
  },
  {
    icon: Plug,
    title: 'API DEV & INTEGRATION',
    desc: 'REST, GraphQL, and webhook integrations',
  },
]

export default function ITConsultancy() {
  return (
    <motion.div {...pageMotion} className="page-shell">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <CodeRain />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 py-28">
          <div className="inline-flex items-center gap-2 border border-[rgba(0,128,255,0.6)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0080ff]">
            AVAILABLE FOR PROJECTS <span className="blink-cursor">▍</span>
          </div>
          <div className="mt-8 font-display text-[clamp(72px,10vw,140px)] leading-[0.92] chrome-text drop-shadow-[0_0_60px_rgba(0,128,255,0.3)]">
            IT CONSULTANCY
          </div>
          <div className="mt-5 font-mono text-[15px] uppercase tracking-[0.2em] text-[#0080ff]">
            Engineering Tomorrow&apos;s Solutions Today
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#0080ff] to-[#c0c0c0] bg-clip-text text-transparent">
          WHAT WE BUILD
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="gothic-card p-8 transition hover:shadow-[0_0_24px_rgba(0,128,255,0.2)]"
              style={{
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: 'var(--blue-accent)',
              }}
            >
              <div className="flex items-center gap-4">
                <s.icon className="h-7 w-7 text-[#0080ff]" />
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

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] chrome-text">
          TECHNOLOGIES WE WORK WITH
        </div>
      </div>
      <div className="mt-4">
        <MarqueeTicker
          items={[
            'React',
            'Next.js',
            'Node.js',
            'Python',
            'FastAPI',
            'TensorFlow',
            'PyTorch',
            'AWS',
            'GCP',
            'Docker',
            'Kubernetes',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'GraphQL',
            'Supabase',
          ]}
        />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="font-display text-[64px] leading-none bg-gradient-to-r from-[#c0c0c0] to-[#0080ff] bg-clip-text text-transparent">
            OUR ENGINEERS
          </div>
          <div className="font-body text-[18px] text-[#9090a0]">
            SILVRBLACC engineers ship performance-first products — from full-stack
            apps and cloud systems to AI integrations and security hardening. We
            build to scale, and we build to last.
            <div className="mt-6 flex flex-wrap gap-3">
              {['AI / ML', 'FULL-STACK', 'CLOUD-NATIVE', 'API-FIRST'].map((b) => (
                <div
                  key={b}
                  className="inline-flex border border-[rgba(0,128,255,0.6)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0080ff]"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="text-center">
          <div className="font-display text-[80px] leading-none bg-gradient-to-r from-[#0080ff] via-[#c0c0c0] to-[#0080ff] bg-clip-text text-transparent">
            BUILD WITH US
          </div>
          <div className="mt-10 flex justify-center">
            <ChromeButton
              href="mailto:hello@silvrblacc.com"
              variant="outline"
              className="border-[rgba(0,128,255,0.7)] hover:bg-[rgba(0,128,255,0.12)]"
            >
              Request A Tech Brief
            </ChromeButton>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

