function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.6L5.9 22H2.8l7.3-8.4L1 2h6.6l4.6 6.1L18.9 2Zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20Z"
      />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6A5.2 5.2 0 0 1 16.8 22H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6A3.2 3.2 0 0 0 20 16.8V7.2A3.2 3.2 0 0 0 16.8 4H7.2Z"
      />
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
      />
      <path fill="currentColor" d="M17.6 6.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM8.1 19.1H5.5V9h2.6v10.1ZM6.8 7.9a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM19.1 19.1h-2.6v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v5h-2.6V9h2.5v1.4h.1a2.7 2.7 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4.1v6Z"
      />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.4-4.8ZM10 15.3V8.7L15.7 12 10 15.3Z"
      />
    </svg>
  )
}

const pageLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#store', label: 'Store' },
  { href: '#contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(192,192,192,0.18)] bg-[#070707]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 py-[60px] md:grid-cols-3">
        <div>
          <div className="font-display text-[28px] tracking-[0.22em] chrome-silver">
            SILVER BLACK
          </div>
          <div className="mt-3 font-body italic text-[#d2c7ad]">
            We Don&apos;t Follow Trends. We Build Them.
          </div>
          <div className="mt-6 flex items-center gap-4 text-[#ffffff]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(255,255,255,0.25)] transition hover:bg-[rgba(255,255,255,0.08)]"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(255,255,255,0.25)] transition hover:bg-[rgba(255,255,255,0.08)]"
              aria-label="X"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(255,255,255,0.25)] transition hover:bg-[rgba(255,255,255,0.08)]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(255,255,255,0.25)] transition hover:bg-[rgba(255,255,255,0.08)]"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]">
            Pages
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {pageLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[16px] text-[#cbbf9a] transition hover:text-[#fff3c1]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]">
            Reach Us
          </div>
          <div className="mt-5 flex flex-col gap-3 font-body text-[16px] text-[#cbbf9a]">
            <a
              href="mailto:hello@silvrblacc.com"
              className="transition hover:text-[#fff3c1]"
            >
              hello@silvrblacc.com
            </a>
            <div>+1 (000) 000-0000</div>
            <div>Global — Remote &amp; On-Site</div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(201,168,76,0.14)] px-6 py-5 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6456]">
        © 2025 SILVRBLACC. All rights reserved. | Built in darkness. Designed for
        power.
      </div>
    </footer>
  )
}
