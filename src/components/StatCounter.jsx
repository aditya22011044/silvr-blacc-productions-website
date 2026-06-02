import { useEffect, useMemo, useRef, useState } from 'react'

export default function StatCounter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)

  const isNumber = useMemo(() => typeof value === 'number' && isFinite(value), [value])

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !isNumber) return

    const duration = 1200
    const start = performance.now()

    let raf = 0
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setCurrent(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, isNumber, value])

  const display = isNumber ? `${current}${suffix}` : `${value}${suffix}`

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-[72px] leading-none chrome-text">
        {display}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#606060]">
        {label}
      </div>
    </div>
  )
}

