import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCloudCard({
  title,
  description,
  icon: Icon,
  href,
  accentColor,
}) {
  const isAnchor = href.startsWith('#') || href.startsWith('/#')
  const Component = isAnchor ? 'a' : Link
  const props = isAnchor ? { href } : { to: href }

  return (
    <Component
      {...props}
      className="group relative block overflow-hidden border border-white/10 bg-black/40 p-9 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
    >
      <div
        className="absolute -left-12 -top-12 h-[180px] w-[180px] rounded-full blur-3xl opacity-20"
        style={{ background: accentColor }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-14 -right-14 h-[220px] w-[220px] rounded-full blur-3xl opacity-20"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            {Icon ? (
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5"
                style={{ color: accentColor }}
              >
                <Icon className="h-6 w-6" />
              </div>
            ) : null}

            <div className="min-w-0">
              <div className="font-display text-[28px] leading-none text-white">
                {title}
              </div>
              <div className="mt-3 font-body text-[17px] text-white/60">
                {description}
              </div>
            </div>
          </div>

          <ArrowUpRight className="mt-1 h-6 w-6 flex-none text-white/40 transition duration-300 group-hover:rotate-45 group-hover:text-white" />
        </div>
      </div>
    </Component>
  )
}
