import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const root = document.documentElement
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        root.style.setProperty('--cursor-x', `${x}px`)
        root.style.setProperty('--cursor-y', `${y}px`)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    root.style.setProperty('--cursor-x', `${x}px`)
    root.style.setProperty('--cursor-y', `${y}px`)

    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}

