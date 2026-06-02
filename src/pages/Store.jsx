import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { useState } from 'react'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

export default function Store() {
  const [email, setEmail] = useState('')

  return (
    <motion.div {...pageMotion} className="page-shell creepy-bg-store">
      <div className="mist-overlay" />
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 text-center">
          <div className="mx-auto h-[1px] w-[80px] bg-[#c0c0c0]" />
          <div className="mt-6 font-display text-[56px] tracking-[0.3em] chrome-silver">
            SILVER BLACK STORE
          </div>
          <div className="mx-auto mt-6 h-[1px] w-[80px] bg-[#c0c0c0]" />

          <div className="mt-10 font-display text-[clamp(56px,10vw,120px)] leading-[0.95] chrome-silver">
            COMING SOON.
          </div>
          <div className="mx-auto mt-6 max-w-[640px] font-body text-[22px] italic text-[#e0e0e0]">
            The Silver Black Store is coming soon. Digital Products, Masterclasses, and Exclusive Courses.
          </div>

          <div className="mx-auto mt-10 flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-12 flex-1 border border-[rgba(255,255,255,0.45)] bg-[rgba(5,5,5,0.6)] px-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#e0e0e0] outline-none focus:border-white"
            />
            <button
              type="button"
              className="h-12 border border-white px-6 font-display text-[16px] uppercase tracking-[0.2em] text-white transition hover:bg-[rgba(255,255,255,0.12)]"
            >
              Notify Me
            </button>
          </div>

          <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
            Est. 2026 — SILVER BLACK PRODUCTIONS
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="text-center">
          <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#c9a84c] via-[#c0c0c0] to-[#c9a84c] bg-clip-text text-transparent">
            WHAT&apos;S COMING
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {['APPAREL DROP', 'DIGITAL ASSETS', 'EXCLUSIVE PRINT'].map((t) => (
            <div
              key={t}
              className="relative overflow-hidden border border-[rgba(201,168,76,0.55)] bg-[#0d0d0d]"
            >
              <div className="h-[260px] blur-[8px] bg-gradient-to-br from-[#1a1407] via-[#050505] to-[#000]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Lock className="h-8 w-8 text-[#c9a84c]" />
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#c9a84c]">
                  CLASSIFIED
                </div>
                <div className="font-display text-[24px] tracking-[0.2em] text-white">
                  {t}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

