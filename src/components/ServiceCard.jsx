import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
  to,
  borderLeftColor,
}) {
  return (
    <Link
      to={to}
      className="gothic-card group relative block p-10"
      style={
        borderLeftColor
          ? { borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor }
          : undefined
      }
    >
      <div className="font-mono text-[12px] tracking-[0.2em] chrome-text">
        {number}
      </div>
      <div className="mt-6 flex items-start gap-4">
        {Icon ? (
          <Icon className="h-8 w-8 text-[var(--chrome-solid)]" />
        ) : null}
        <div className="min-w-0">
          <div className="font-display text-[32px] leading-none text-white">
            {title}
          </div>
          <div className="mt-3 font-body italic text-[16px] text-[#707070]">
            {description}
          </div>
        </div>
      </div>
      <ArrowUpRight className="absolute bottom-6 right-6 h-6 w-6 text-[var(--chrome-solid)] transition duration-300 group-hover:rotate-45" />
    </Link>
  )
}
