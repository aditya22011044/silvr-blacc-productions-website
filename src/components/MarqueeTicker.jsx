export default function MarqueeTicker({ items }) {
  const content = items.join(' ✦ ')
  return (
    <div className="bg-[#0d0d0d] border-y border-[rgba(192,192,192,0.1)] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="ticker-track px-6 py-4 font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--chrome-solid)]">
          {content} ✦ {content} ✦ {content}
        </div>
      </div>
    </div>
  )
}

