import { Link } from 'react-router-dom'

export default function ChromeButton({
  to,
  href,
  onClick,
  children,
  variant = 'outline',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-[15px] uppercase tracking-[0.22em] transition duration-200'

  const outline =
    'border border-[rgba(192,192,192,0.5)] text-white bg-transparent hover:bg-[rgba(192,192,192,0.08)]'

  const fill = 'text-[#050505]'

  const gold =
    'border border-[rgba(201,168,76,0.6)] text-[#fff3c1] bg-[rgba(5,5,5,0.35)] shadow-[0_0_24px_rgba(201,168,76,0.22)] hover:shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:border-[rgba(201,168,76,0.9)]'

  const silver =
    'border border-[rgba(192,192,192,0.6)] text-[#ffffff] bg-[rgba(5,5,5,0.35)] shadow-[0_0_24px_rgba(192,192,192,0.22)] hover:shadow-[0_0_40px_rgba(192,192,192,0.35)] hover:border-[rgba(192,192,192,0.9)]'

  const green =
    'border border-[rgba(0,255,127,0.6)] text-[#e0ffef] bg-[rgba(5,5,5,0.35)] shadow-[0_0_24px_rgba(0,255,127,0.22)] hover:shadow-[0_0_40px_rgba(0,255,127,0.35)] hover:border-[rgba(0,255,127,0.9)]'

  const red =
    'border border-[rgba(255,0,0,0.6)] text-[#ffefef] bg-[rgba(5,5,5,0.35)] shadow-[0_0_24px_rgba(255,0,0,0.22)] hover:shadow-[0_0_40px_rgba(255,0,0,0.35)] hover:border-[rgba(255,0,0,0.9)]'

  const purple =
    'border border-[rgba(160,32,240,0.6)] text-[#f5efff] bg-[rgba(5,5,5,0.35)] shadow-[0_0_24px_rgba(160,32,240,0.22)] hover:shadow-[0_0_40px_rgba(160,32,240,0.35)] hover:border-[rgba(160,32,240,0.9)]'

  const merged = `${base} ${
    variant === 'fill' ? fill : 
    variant === 'gold' ? gold : 
    variant === 'silver' ? silver :
    variant === 'green' ? green :
    variant === 'red' ? red :
    variant === 'purple' ? purple :
    outline
  } ${className}`

  const style =
    variant === 'fill'
      ? { background: 'var(--chrome)' }
      : variant === 'gold'
        ? { background: 'rgba(5,5,5,0.35)' }
        : undefined

  if (to) {
    return (
      <Link to={to} className={merged} style={style} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={merged} style={style} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={merged}
      style={style}
      {...rest}
    >
      {children}
    </button>
  )
}
