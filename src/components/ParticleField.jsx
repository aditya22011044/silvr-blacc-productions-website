import { useEffect, useRef } from 'react'

export default function ParticleField({
  className = '',
  particleRgb = '232,232,232',
  background = '#050505',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.8,
      vx: (-0.08 + Math.random() * 0.16) * 0.001,
      vy: (0.06 + Math.random() * 0.22) * 0.001,
      a: 0.35 + Math.random() * 0.55,
    }))

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      ctx.fillStyle = background
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        p.x = (p.x + p.vx + 1) % 1
        p.y = (p.y + p.vy + 1) % 1
        const x = p.x * w
        const y = p.y * h

        const g = ctx.createRadialGradient(x, y, 0, x, y, p.r * 10)
        g.addColorStop(0, `rgba(${particleRgb},${p.a})`)
        g.addColorStop(1, `rgba(${particleRgb},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, p.r * 10, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [particleRgb, background])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
