import { useEffect, useRef } from 'react'

export default function CodeRain({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let cols = []

    const symbols = '01'

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const colCount = Math.max(20, Math.floor(w / 16))
      cols = Array.from({ length: colCount }).map(() => ({
        y: Math.random() * h,
        speed: 0.6 + Math.random() * 1.6,
      }))
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(5,5,5,0.12)'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = 'rgba(0,128,255,0.06)'
      ctx.font = '12px var(--font-mono)'

      const step = w / cols.length
      for (let i = 0; i < cols.length; i++) {
        const col = cols[i]
        col.y += col.speed * 10
        if (col.y > h + 40) col.y = -Math.random() * 200

        const ch = symbols[Math.floor(Math.random() * symbols.length)]
        ctx.fillText(ch, i * step, col.y)
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    ctx.fillStyle = '#050505'
    ctx.fillRect(0, 0, w, h)
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}

