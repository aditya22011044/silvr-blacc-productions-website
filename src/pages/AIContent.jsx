import { motion } from 'framer-motion'
import ChromeButton from '../components/ChromeButton'

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

const capabilities = [
  {
    no: '01',
    title: 'AI ADS & CAMPAIGNS',
    desc: 'High-conversion AI-generated video and static ads for global brands',
  },
  {
    no: '02',
    title: 'AI UGC ADS',
    desc: 'Authentic-looking user-generated content powered by advanced AI models',
  },
  {
    no: '03',
    title: 'AI PRODUCT PROMOS',
    desc: 'Photorealistic product showcases and cinematic reveals created entirely in AI',
  },
  {
    no: '04',
    title: 'AI FILMS & STORYTELLING',
    desc: 'Short films and narrative content pushing the boundaries of generative video',
  },
  {
    no: '05',
    title: 'VIRTUAL AVATARS',
    desc: 'Custom-trained digital humans for brand representation and influence',
  },
  {
    no: '06',
    title: 'GEN-AI VISUAL PACKAGES',
    desc: 'Complete visual identities and asset libraries generated via AI',
  },
]

export default function AIContent() {
  return (
    <motion.div {...pageMotion} className="page-shell creepy-bg-ai">
      <div className="mist-overlay" />
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1200px] px-6 py-28">
          <div className="absolute right-6 top-10 inline-flex border border-[rgba(160,32,240,0.6)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8e0f0]">
            CREATIVE AI HUB
          </div>

          <div className="font-display text-[clamp(72px,10vw,140px)] leading-[0.95] chrome-purple drop-shadow-[0_0_40px_rgba(160,32,240,0.3)]">
            CREATIVE <br /> AI HUB
          </div>
          <div className="mt-6 max-w-[820px] font-body text-[24px] italic text-[#e8e0f0]">
            Visuals That Don&apos;t Exist — Until We Make Them.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="font-display text-[56px] leading-none text-white">
          CAPABILITIES
        </div>

        <div className="mt-10 border-t border-[rgba(106,13,173,0.2)]">
          {capabilities.map((c) => (
            <div
              key={c.no}
              className="group grid grid-cols-1 gap-4 border-b border-[rgba(106,13,173,0.2)] px-2 py-8 transition hover:bg-[rgba(106,13,173,0.04)] md:grid-cols-12 md:items-center md:gap-6"
            >
              <div className="font-mono text-[12px] tracking-[0.2em] text-[var(--chrome-solid)] md:col-span-2 group-hover:text-[#6a0dad]">
                {c.no}
              </div>
              <div className="font-display text-[32px] leading-none text-white md:col-span-5">
                {c.title}
              </div>
              <div className="font-body italic text-[16px] text-[#9070b0] md:col-span-5">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="font-display text-[56px] leading-none bg-gradient-to-r from-[#6a0dad] via-[#c0c0c0] to-[#6a0dad] bg-clip-text text-transparent">
          THE WORK
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { tag: 'AI INFLUENCER', title: 'Nova // Virtual Persona', h: 300 },
            { tag: 'VIRTUAL AVATAR', title: 'Atlas // Brand Ambassador', h: 420 },
            { tag: 'PRODUCT AD', title: 'Luxe // Fragrance Campaign', h: 360 },
            { tag: 'TALKING HEAD', title: 'AI Presenter // Brand Brief', h: 420 },
            { tag: 'UGC CONTENT', title: 'Unbox Series // Lifestyle', h: 300 },
            { tag: 'AD CREATIVE', title: 'Neon City // Product Reel', h: 360 },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden border border-[rgba(106,13,173,0.25)] bg-[#0d0d0d]"
              style={{ height: c.h }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b0612] via-[#050505] to-[#000]" />
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[rgba(106,13,173,0.6)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex border border-[rgba(232,224,240,0.35)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8e0f0]">
                  {c.tag}
                </div>
                <div className="mt-3 font-display text-[22px] leading-none text-white">
                  {c.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="text-center">
          <div className="font-display text-[80px] leading-none bg-gradient-to-r from-[#6a0dad] via-[#c0c0c0] to-[#6a0dad] bg-clip-text text-transparent">
            CREATE THE IMPOSSIBLE
          </div>
          <div className="mt-10 flex justify-center">
            <ChromeButton
              href="mailto:hello@silvrblacc.com"
              variant="outline"
              className="border-[rgba(106,13,173,0.7)] hover:bg-[rgba(106,13,173,0.12)]"
            >
              Commission AI Content
            </ChromeButton>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
