import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Sparkles, ArrowRight, Play, Rocket, Gem, Radar, Globe, Flame } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const easing = [0.22, 1, 0.36, 1]

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easing } }
}

function NeonBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[--accent]/30 bg-[--ink] px-3 py-1 text-[12px] tracking-wide text-[--accent] shadow-[0_0_30px_rgba(255,0,128,0.12)] backdrop-blur-sm">
      <Sparkles size={14} />
      {children}
    </span>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[--ink]/60 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[--accent] to-[--cyan] shadow-[0_0_40px_rgba(0,255,255,0.25)]" />
            <div className="text-sm leading-tight">
              <p className="font-display text-[15px] tracking-[0.2em] text-white">ASTRA</p>
              <p className="-mt-0.5 text-[10px] uppercase tracking-[0.35em] text-white/60">Marketing Studio</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a className="text-white/80 hover:text-white transition-colors" href="#work">Work</a>
            <a className="text-white/80 hover:text-white transition-colors" href="#services">Services</a>
            <a className="text-white/80 hover:text-white transition-colors" href="#about">About</a>
            <a className="text-white/80 hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[--accent] px-4 py-2 text-[13px] font-semibold text-black shadow-[0_8px_30px_rgba(255,0,128,0.35)] transition-transform hover:-translate-y-0.5">
              Start a project <ArrowRight size={16} />
            </a>
            <button className="md:hidden rounded-xl border border-white/10 p-2 text-white/80"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmosphere layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_70%_20%,rgba(255,0,128,0.18),transparent),radial-gradient(600px_300px_at_30%_70%,rgba(0,255,255,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={staggerParent} initial="hidden" animate="show" className="max-w-3xl pt-10">
            <motion.div variants={fadeUp} className="mb-5"><NeonBadge>Futurist brand, content & growth engine</NeonBadge></motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl sm:text-6xl leading-[1.05] text-white">
              We architect iconic brands for a hyper-digital world.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/70">
              Strategy, design, and campaigns tuned to culture. We blend editorial taste with scientific rigor to scale attention across platforms.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[--accent] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(255,0,128,0.38)] transition-transform hover:-translate-y-0.5">
                Book a discovery call <ArrowRight size={16} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/10">
                See our work <Play size={16} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2"><Rocket size={14} className="text-[--cyan]"/> Launch-ready in weeks</div>
              <div className="flex items-center gap-2"><Gem size={14} className="text-[--accent]"/> Taste-first design</div>
              <div className="flex items-center gap-2"><Radar size={14} className="text-[--lime]"/> Performance driven</div>
            </motion.div>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="mt-24 border-y border-white/10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04),transparent)] py-6">
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {['Aperture','Nebula','Covalent','Hyperflex','Monolith','Orbit','Nimbus','Vertex'].map((c, i) => (
                <span key={i} className="mx-8 inline-flex items-center gap-3 text-white/60">
                  <span className="h-1 w-1 rounded-full bg-white/40"/>
                  <span className="font-alt tracking-[0.35em] uppercase">{c}</span>
                </span>
              ))}
              {['Aperture','Nebula','Covalent','Hyperflex','Monolith','Orbit','Nimbus','Vertex'].map((c, i) => (
                <span key={`b-${i}`} className="mx-8 inline-flex items-center gap-3 text-white/60">
                  <span className="h-1 w-1 rounded-full bg-white/40"/>
                  <span className="font-alt tracking-[0.35em] uppercase">{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: <Flame className="text-[--accent]" size={20} />, title: 'Brand Systems', desc: 'Naming, identity, voice, and complete brand libraries built for omnichannel.' },
    { icon: <Globe className="text-[--cyan]" size={20} />, title: 'Campaign Architecture', desc: 'End-to-end concepts for product launches and momentum moments.' },
    { icon: <Radar className="text-[--lime]" size={20} />, title: 'Performance Creative', desc: 'High-frequency content engines optimized through experimentation.' },
  ]

  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_20%_20%,rgba(0,255,255,0.08),transparent),radial-gradient(600px_240px_at_80%_60%,rgba(255,0,128,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="font-display text-3xl text-white">What we do</motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-white/70">Strategic creativity that compounds. We fuse editorial craft with growth mechanics.</motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[--panel] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.5)] transition-transform will-change-transform">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(200px_120px_at_0%_0%,rgba(255,0,128,0.12),transparent),radial-gradient(200px_120px_at_100%_100%,rgba(0,255,255,0.12),transparent)]" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80">
                    {item.icon}
                    <span className="font-medium tracking-wide">{item.title}</span>
                  </div>
                  <p className="text-white/70">{item.desc}</p>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/10">
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
                <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[--accent] opacity-10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Cases() {
  const cases = [
    { tag: 'Fintech', title: 'Covalent: A category carve‑out with 4.2x CTR', color: 'from-[--accent] to-[--cyan]' },
    { tag: 'AI', title: 'Nebula: Story-first launch that hit 120k signups', color: 'from-[--cyan] to-[--lime]' },
    { tag: 'Consumer', title: 'Aperture: Identity and campaign that owned the feed', color: 'from-[--lime] to-[--accent]' },
  ]
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="font-display text-3xl text-white">Selected work</motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cases.map((c, i) => (
              <motion.article key={i} variants={scaleIn} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[--panel] p-5">
                <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${c.color} blur-2xl`} />
                <div className="relative z-10">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70">{c.tag}</span>
                  <h3 className="mt-4 text-lg text-white/90">{c.title}</h3>
                  <div className="mt-4 h-40 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))] ring-1 ring-inset ring-white/10" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(0,255,255,0.18),transparent),radial-gradient(400px_180px_at_10%_100%,rgba(255,0,128,0.2),transparent)]" />
          <div className="relative z-10">
            <NeonBadge>We take on 2 new partners monthly</NeonBadge>
            <h3 className="mt-4 font-display text-3xl text-white">Let’s build something that moves culture.</h3>
            <p className="mt-2 max-w-2xl text-white/70">Share your goals. We’ll return with a tailored plan—timeline, budgets, and impact model.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[--accent] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(255,0,128,0.38)] transition-transform hover:-translate-y-0.5">Start the conversation <ArrowRight size={16} /></a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/10">Download capabilities</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60">
        <p className="font-alt tracking-[0.3em] uppercase">Astra Studio</p>
        <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[--ink] selection:bg-[--accent]/40 selection:text-white">
      <Nav />
      <Hero />
      <Services />
      <Cases />
      <CTA />
      <Footer />
    </div>
  )
}
