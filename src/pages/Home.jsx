import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Share2,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  BarChart2,
  Music,
  Camera,
  Scissors,
  PenLine,
  Code2,
  Brain,
  Smartphone,
  Cloud,
  ShieldCheck,
  Plug,
  Zap,
  Play,
  Sparkles,
  Film,
  User,
  Layers,
  Shield,
  Flag,
  Megaphone,
  Map,
  UserCheck,
  FileText
} from 'lucide-react'
import { useState } from 'react'
import ChromeButton from '../components/ChromeButton'
import MarqueeTicker from '../components/MarqueeTicker'
import Reveal from '../components/Reveal'
import ServiceCloudCard from '../components/ServiceCloudCard'
import StatCounter from '../components/StatCounter'

import kshaImg from '../images/chars/ksha.jpeg'
import devaImg from '../images/chars/deva.jpg'
import dhanandriImg from '../images/chars/dhanandri.jpeg'
import drishtiImg from '../images/chars/drishti.jpeg'
import vaaniImg from '../images/chars/vaani.jpeg'

// Title Images
import silvrTitle from '../images/png/silvr.png'
import aiTitle from '../images/png/AI.png'
import marketingTitle from '../images/png/marketing.png'
import itTitle from '../images/png/IT.png'
import politTitle from '../images/png/polit.png'
import storeTitle from '../images/png/store.png'
import prodTitle from '../images/png/prod.png'
import crowImg from '../images/add img/crow.png'
import domImg from '../images/add img/dom.png'
import sixImg from '../images/add img/six.png'

const pageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
}

const lineContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const lineItem = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

export default function Home() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Creative Content',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState('idle') // idle, sending, success, error

  const onContactChange = (key) => (e) => {
    setContactStatus('idle')
    setContact((prev) => ({ ...prev, [key]: e.target.value }))
  }

  const onContactSubmit = async (e) => {
    e.preventDefault()
    setContactStatus('sending')

    // Web3Forms configuration
    // To make this work: Get your Access Key from https://web3forms.com/ (It's free)
    const accessKey = '5e14aaad-ac5b-4642-9614-20f14012d9f5' 

    const formData = {
      access_key: accessKey,
      name: contact.name,
      email: contact.email,
      subject: `service (${contact.service}) enquiry - ${contact.name}`,
      from_name: 'SILVR BLACC PRODUCTIONS',
      message: `
MISSION BRIEF DETAILS
---------------------
Name: ${contact.name}
Email: ${contact.email}
Phone: ${contact.phone || 'N/A'}
Company: ${contact.company || 'N/A'}
Service Interested: ${contact.service}

MISSION STATEMENT:
${contact.message}

---------------------
Sent from SILVR BLACC PRODUCTIONS Terminal
      `.trim(),
    }

    // Explicitly add a notification email if the Web3Forms key is tied to another address
    // Note: Web3Forms usually sends to the email used to create the Access Key.
    // If you want to change the destination, you usually update it in the Web3Forms Dashboard.
    // However, we can try adding the 'to' parameter if your plan supports it.
    formData.to = 'business@silvrblacc.com';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setContactStatus('success')
        setContact({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'AI Creative Content',
          message: '',
        })
      } else {
        setContactStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setContactStatus('error')
    }
  }

  return (
    <motion.div {...pageMotion} className="page-shell">
      <div className="mist-overlay" />
      
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="creepy-bg-home relative flex min-h-[100vh] items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center">
          <motion.div variants={lineContainer} initial="hidden" animate="show" className="flex flex-col items-center">
            <motion.img 
              variants={lineItem} 
              src={silvrTitle} 
              alt="SILVR BLACC PRODUCTIONS" 
              className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[900px] h-auto mix-blend-screen drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-[820px] font-body text-[26px] italic text-[#e0e0e0] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            Architecting the Future of Influence. Cinematic AI. Music. Power.
          </motion.div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ChromeButton href="#services" variant="silver" className="px-8 font-gothic">
              ENTER THE VOID
            </ChromeButton>
            <ChromeButton
              href="#contact"
              variant="outline"
              className="px-8 font-gothic bg-[rgba(255,255,255,0.05)] border-white/20"
            >
              CONTACT US
            </ChromeButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="h-10 w-[1px] bg-white/40" />
            <div className="h-2 w-2 rotate-45 border-b border-r border-white/60" />
          </motion.div>
        </div>
      </section>

      <MarqueeTicker
        items={['AI Ads', 'AI UGC', 'Political Campaigns', 'Music Production', 'Cinematography', 'Digital Store', 'Brand Strategy']}
      />

      {/* 2. ABOUT SECTION */}
      <section id="about" className="creepy-bg-art relative overflow-hidden bg-black">
        <div className="grid-animate absolute inset-0 opacity-[0.1]" />
        <div className="relative mx-auto max-w-[1320px] px-6 py-[120px]">
          <Reveal>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="flex flex-col items-center lg:items-start gap-8">
                  <img src={domImg} alt="WE ARCHITECT DOMINANCE" className="w-full max-w-[700px] h-auto mix-blend-screen drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="font-body text-[22px] italic text-white/70 leading-relaxed text-center lg:text-left">
                  SILVR BLACC PRODUCTIONS is a next-generation creative powerhouse 
                  operating at the intersection of artificial intelligence, 
                  high-end music production, and political warfare. We don&apos;t 
                  just create content — we engineer systems that dominate reality.
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    { k: 'VISION', v: 'Build the future of influence.' },
                    { k: 'MISSION', v: 'Ship cinematic AI content at scale.' },
                    { k: 'GOAL', v: 'Turn strategy into power and results.' },
                  ].map((c) => (
                    <div key={c.k} className="spotlight-card border border-white/5 bg-black/60 p-8 group">
                      <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors">
                        {c.k}
                      </div>
                      <div className="mt-4 font-sub text-[20px] leading-tight text-white/90">
                        {c.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-24 grid grid-cols-2 gap-12 md:grid-cols-4 md:divide-x md:divide-white/5 md:gap-0">
            <StatCounter value={200} suffix="+" label="AI Campaigns" />
            <StatCounter value={50} suffix="+" label="Virtual Influencers" />
            <StatCounter value={12} label="Countries" />
            <StatCounter value="∞" label="Ideas" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES PILLARS OVERVIEW */}
      <section id="services" className="creepy-bg-pillars relative border-t border-white/5">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <div className="text-center">
            <img src={sixImg} alt="THE SIX PILLARS" className="mx-auto max-w-[750px] h-auto mb-2 mix-blend-screen" />
            <div className="mx-auto mt-2 h-[1px] w-[160px] bg-white/10" />
            <div className="mx-auto mt-6 max-w-[820px] font-body text-[22px] text-white/60 italic tracking-wide">
              Six core disciplines. <span className="text-green-400">One unified vision</span> of <span className="text-red-600">dominance.</span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCloudCard title="Creative AI Hub" description="AI Ads, UGC, and Cinematic Films." href="#ai-hub" accentColor="var(--purple-accent)" />
            <ServiceCloudCard title="Marketing Agency" description="Full-funnel domination across all platforms." href="#marketing" accentColor="var(--green-accent)" />
            <ServiceCloudCard title="Political Consultancy" description="Campaign management and narrative building." href="#political" accentColor="var(--red-accent)" />
            <ServiceCloudCard title="Production & Distribution" description="Music production and cinematic distribution." href="#production" accentColor="var(--white-muted)" />
            <ServiceCloudCard title="IT Consultancy" description="Engineering tomorrow's software solutions." href="#it-consultancy" accentColor="var(--blue-accent)" />
            <ServiceCloudCard title="The Store" description="Digital products and exclusive courses." href="#store" accentColor="var(--white-muted)" />
          </div>
        </div>
      </section>

      {/* 4. CREATIVE AI HUB */}
      <section id="ai-hub" className="creepy-bg-ai relative border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <img src={aiTitle} alt="CREATIVE AI HUB" className="max-w-full sm:max-w-[400px] md:max-w-[660px] h-auto mb-6 mix-blend-screen" />
              <div className="max-w-[820px] font-sub text-[18px] sm:text-[24px] italic text-purple-200/60 tracking-wider">
                Visuals that don&apos;t exist — until we make them.
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: User, t: 'VIRTUAL AI INFLUENCERS' },
              { icon: Zap, t: 'AI ADS & CAMPAIGNS' },
              { icon: Play, t: 'AI UGC ADS' },
              { icon: Sparkles, t: 'AI PRODUCT PROMOS' },
              { icon: Film, t: 'AI FILMS & STORYTELLING' },
              { icon: Layers, t: 'GEN-AI VISUAL PACKAGES' }
            ].map((x) => (
              <div key={x.t} className="spotlight-card border border-white/5 bg-black/40 p-10 group">
                <div className="flex items-center gap-5">
                  <x.icon className="h-7 w-7 text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                  <div className="text-[32px] leading-none text-white/90 group-hover:chrome-purple transition-all duration-500">{x.t}</div>
                </div>
                <div className="mt-6 font-body italic text-white/30 text-[18px]">Engineered with precision AI models.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARKETING AGENCY */}
      <section id="marketing" className="creepy-bg-marketing relative border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <img src={marketingTitle} alt="MARKETING AGENCY" className="max-w-full sm:max-w-[600px] md:max-w-[900px] h-auto mb-2 mix-blend-screen" />
          <div className="mt-2 font-mono text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-green-400/60">
            Twitter. Meta. YouTube. Instagram. Domination.
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Share2, t: 'Social Media Domination' },
              { icon: Target, t: 'Meta Ads & Paid Promos' },
              { icon: TrendingUp, t: 'Ad Boosting & Engagement' },
              { icon: Users, t: 'Influencer Network' },
              { icon: DollarSign, t: 'Paid Media Optimization' },
              { icon: BarChart2, t: 'Full-Stack Analytics' },
            ].map((x) => (
              <div key={x.t} className="spotlight-card border border-white/5 bg-black/40 p-10 group">
                <div className="flex items-center gap-5">
                  <x.icon className="h-7 w-7 text-green-500/50 group-hover:text-green-400 transition-colors" />
                  <div className="text-[32px] leading-none text-white/90 group-hover:chrome-green transition-all duration-500">{x.t}</div>
                </div>
                <div className="mt-6 font-body italic text-white/30 text-[18px]">Owning the algorithm. Driving results.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. POLITICAL CONSULTANCY */}
      <section id="political" className="creepy-bg-political relative border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <img src={politTitle} alt="POLITICAL CONSULTANCY" className="max-w-full sm:max-w-[600px] md:max-w-[900px] h-auto mb-6 mix-blend-screen" />
          <div className="mt-6 max-w-[780px] font-sub text-[18px] sm:text-[24px] italic text-red-400/60 tracking-wider">
            We turn strategy into power.
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Shield, t: 'COMPLETE CAMPAIGN MANAGEMENT' },
              { icon: Flag, t: 'BRAND POSITIONING & NARRATIVE' },
              { icon: Megaphone, t: 'GROUND-LEVEL OUTREACH' },
              { icon: Map, t: 'RALLIES & ROADSHOWS' },
              { icon: UserCheck, t: 'PERSONALITY DEVELOPMENT' },
              { icon: FileText, t: 'AGENDAS & MANIFESTOS' }
            ].map((x) => (
              <div key={x.t} className="spotlight-card border border-white/5 bg-black/40 p-10 group">
                <div className="flex items-center gap-5">
                  <x.icon className="h-7 w-7 text-red-500/50 group-hover:text-red-400 transition-colors" />
                  <div className="text-[32px] leading-none text-white/90 group-hover:chrome-red transition-all duration-500">{x.t}</div>
                </div>
                <div className="mt-6 font-body italic text-white/30 text-[18px]">Winning the narrative. Controlling the cycle.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION & DISTRIBUTION */}
      <section id="production" className="creepy-bg-production relative border-t border-white/5">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <img src={prodTitle} alt="Music/Video Production and Distribution" className="max-w-full sm:max-w-[600px] md:max-w-[900px] h-auto mb-6 mix-blend-screen" />
          <div className="mt-8 font-sub text-[18px] sm:text-[24px] italic text-white/40 tracking-widest uppercase">
            Where Raw Talent Meets Elite Execution.
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { icon: Music, n: 'MUSIC PRODUCTION & DISTRO', d: 'Mixing, mastering, and global platforms.' },
              { icon: Camera, n: 'CREATIVE MEDIA AGENCY', d: 'Music videos, ad shoots, and films.' },
              { icon: Scissors, n: 'POST-PRODUCTION & EDITS', d: 'Cinematic grading and motion graphics.' },
              { icon: PenLine, n: 'AUDIO & CUSTOM SCORES', d: 'Original compositions and scores.' },
            ].map((s) => (
              <div key={s.n} className="flex items-start gap-8 border border-white/5 bg-black/40 p-12 backdrop-blur-md group hover:border-white/20 transition-all">
                <s.icon className="h-12 w-12 text-white/20 group-hover:text-white/60 transition-colors" />
                <div>
                  <div className="text-[36px] leading-none text-white group-hover:chrome-silver transition-all duration-500">{s.n}</div>
                  <div className="mt-4 font-body text-[19px] text-white/40 leading-relaxed">{s.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* TEAM SECTION */}
          <div className="mt-32">
            <Reveal>
              <div className="text-[52px] chrome-silver">THE COLLECTIVE</div>
              <div className="mt-4 h-[1px] w-32 bg-white/10" />
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: 'Kshapit', role: 'Video Editor', img: kshaImg, link: 'https://www.instagram.com/kshapit' },
                { name: 'Deva J', role: 'Lyricist & Rapper', img: devaImg, link: 'https://www.instagram.com/devajmusic' },
                { name: 'DHANANDRI', role: 'Music Producer', img: dhanandriImg, link: 'https://www.instagram.com/dhanandri' },
                { name: 'Drishtikon', role: 'Lyricist & Rapper', img: drishtiImg, link: 'https://www.instagram.com/drishtikon.music' },
                { name: 'VAANI', role: 'Lyricist & Rapper', img: vaaniImg, link: 'https://www.instagram.com/vaanimuxic' },
              ].map((m, idx) => (
                <Reveal key={m.name} delay={idx * 0.1}>
                  <a 
                    href={m.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden border border-white/5 bg-black/40 p-4 transition-all hover:border-white/20"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                      <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="mt-6">
                      <div className="text-[24px] leading-none text-white/80 group-hover:chrome-silver transition-all">{m.name}</div>
                      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">{m.role}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. IT CONSULTANCY */}
      <section id="it-consultancy" className="creepy-bg-it relative border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 py-32 relative z-10">
          <img src={itTitle} alt="IT CONSULTANCY" className="max-w-full sm:max-w-[400px] md:max-w-[660px] h-auto mb-6 mix-blend-screen" />
          <div className="mt-6 font-mono text-[12px] sm:text-[15px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-blue-400/60">
            Engineering Tomorrow&apos;s Solutions Today.
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Code2, t: 'CUSTOM SOFTWARE DEV' },
              { icon: Brain, t: 'AI & MACHINE LEARNING' },
              { icon: Smartphone, t: 'WEB & MOBILE DEV' },
              { icon: Sparkles, t: 'CHATBOT DEVELOPMENT' },
              { icon: Zap, t: 'AGENTIC AI SOLUTIONS' },
              { icon: Plug, t: 'API INTEGRATION' },
            ].map((s) => (
              <div key={s.t} className="spotlight-card border border-white/5 bg-black/40 p-10 group">
                <div className="flex items-center gap-5">
                  <s.icon className="h-7 w-7 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                  <div className="text-[32px] leading-none text-white/90 group-hover:chrome-blue transition-all duration-500">{s.t}</div>
                </div>
                <div className="mt-6 font-body italic text-white/30 text-[18px]">Scalable. Secure. Modern.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THE STORE */}
      <section id="store" className="creepy-bg-store relative border-t border-white/5 min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-[1320px] px-6 py-32 text-center w-full relative z-10">
          <img src={storeTitle} alt="SILVR BLACC STORE" className="mx-auto max-w-full sm:max-w-[500px] md:max-w-[780px] h-auto mb-6" />
          <div className="mt-12 text-[32px] sm:text-[52px] text-white/20 tracking-[0.2em] font-sub">
            COMING SOON.
          </div>
          <div className="mx-auto mt-10 max-w-[720px] font-body text-[18px] sm:text-[26px] italic text-white/50 leading-relaxed tracking-wide">
            The SILVR BLACC Store is coming soon. Beyond the world, we are going to sell creative handmade artworks and clothing, exclusive digital products, masterclasses, and courses.
          </div>
          <div className="mt-16 flex justify-center">
             <div className="border border-white/5 bg-black/40 px-10 py-5 font-mono text-white/30 uppercase tracking-[0.5em] text-[11px] backdrop-blur-md">
               CLASSIFIED ASSETS
             </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="relative border-t border-white/5 bg-black">
        <div className="mx-auto max-w-[1320px] px-6 py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.4fr_0.6fr] items-stretch">
            <div className="flex flex-col">
              <div className="mb-0">
                <div className="text-[42px] sm:text-[72px] leading-[0.85] chrome-silver">
                  LET&apos;S BUILD TOGETHER.
                </div>
                <div className="mt-8 font-body text-[18px] sm:text-[24px] italic text-white/50 leading-relaxed">
                  Ready to architect your dominance? Get in touch with our team today.
                </div>
                <div className="mt-4">
                  <img src={crowImg} alt="SILVR BLACC Crow" className="w-full max-w-[640px] h-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 mix-blend-screen" />
                </div>
              </div>
              
              <div className="mt-4 space-y-12">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">EMAIL US</div>
                  <div className="mt-4 text-[32px] leading-none text-white/80 hover:chrome-silver transition-all cursor-pointer">business@silvrblacc.com</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">FOLLOW US</div>
                  <div className="mt-6 flex gap-6">
                    {['IG', 'X', 'LI', 'YT'].map(s => (
                      <div key={s} className="h-14 w-14 border border-white/5 flex items-center justify-center text-white/40 hover:border-white/40 hover:text-white transition-all cursor-pointer bg-white/5 backdrop-blur-md">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="operator-panel p-12 border border-white/5 flex flex-col justify-center rounded-lg h-full">
              <form onSubmit={onContactSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="operator-label">Full Name</label>
                    <input
                      placeholder="Enter your name"
                      value={contact.name}
                      onChange={onContactChange('name')}
                      className="operator-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="operator-label">Email Address</label>
                    <input
                      placeholder="your.name@company.com"
                      type="email"
                      value={contact.email}
                      onChange={onContactChange('email')}
                      className="operator-input"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="operator-label">Company or Organization</label>
                    <input
                      placeholder="Company or Organization"
                      value={contact.company}
                      onChange={onContactChange('company')}
                      className="operator-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="operator-label">Phone Number</label>
                    <input
                      placeholder="+1 (555) 000-0000"
                      value={contact.phone}
                      onChange={onContactChange('phone')}
                      className="operator-input"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="operator-label">Select a Service</label>
                  <select 
                    value={contact.service}
                    onChange={onContactChange('service')}
                    className="operator-input cursor-pointer appearance-none"
                  >
                    <option className="bg-[#0a0a0a]" value="AI Creative Content">CREATIVE AI HUB</option>
                    <option className="bg-[#0a0a0a]" value="Marketing">MARKETING AGENCY</option>
                    <option className="bg-[#0a0a0a]" value="Political">POLITICAL CONSULTANCY</option>
                    <option className="bg-[#0a0a0a]" value="Production">PRODUCTION & DISTRIBUTION</option>
                    <option className="bg-[#0a0a0a]" value="IT Consultancy">IT CONSULTANCY</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="operator-label">Your Message</label>
                  <textarea
                    placeholder="Tell us about your mission, goals, and how we can help..."
                    rows={4}
                    value={contact.message}
                    onChange={onContactChange('message')}
                    className="operator-input resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactStatus === 'sending'}
                  className={`w-full operator-btn flex items-center justify-center gap-4 group ${
                    contactStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="group-hover:text-white transition-colors duration-300">
                    {contactStatus === 'idle' && 'SEND MISSION BRIEF'}
                    {contactStatus === 'sending' && 'TRANSMITTING...'}
                    {contactStatus === 'success' && 'MISSION BRIEF TRANSMITTED'}
                    {contactStatus === 'error' && 'TRANSMISSION FAILED - TRY AGAIN'}
                  </span>
                </button>
                <div className="text-center">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    🔒 Your information is secure and confidential.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-20 bg-black">
          <div className="mx-auto max-w-[1320px] px-6 text-center">
            <div className="font-sub text-[14px] text-white/30 tracking-[0.3em] uppercase">
              all rights reserved @2026 silvr blacc productions
            </div>
          </div>
        </footer>
      </section>
    </motion.div>
  )
}
