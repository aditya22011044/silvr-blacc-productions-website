import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="grid h-[100vh] w-full place-items-center bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="font-display text-[46px] tracking-[0.32em] gold-text">
          SILVRBLACC
        </div>
        <motion.div
          className="mx-auto mt-6 h-[2px] w-[220px] bg-[rgba(201,168,76,0.75)]"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.32em] text-[#6b6456]">
          Loading
        </div>
      </motion.div>
    </div>
  )
}

