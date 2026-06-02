import { Link2 } from 'lucide-react'

export default function ProfileCard({
  initials,
  name,
  role,
  bio,
  accentColor = 'rgba(201,168,76,0.55)',
}) {
  return (
    <div
      className="gothic-card spotlight-card p-9 text-center"
      style={{ borderColor: 'rgba(201,168,76,0.18)' }}
    >
      <div
        className="mx-auto grid h-[104px] w-[104px] place-items-center rounded-full border-2 bg-[#0b0b0b] font-display text-[34px] gold-text shadow-[0_0_30px_rgba(201,168,76,0.14)]"
        style={{ borderColor: accentColor }}
      >
        {initials}
      </div>
      <div className="mt-7 font-display text-[26px] leading-none text-white">
        {name}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#cbbf9a]">
        {role}
      </div>
      <div className="mt-5 font-body italic text-[16px] text-[#b9b0a0]">
        {bio}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="gold-pill inline-flex h-11 w-11 items-center justify-center text-[#fff3c1] transition hover:shadow-[0_0_40px_rgba(201,168,76,0.35)]">
          <Link2 className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
