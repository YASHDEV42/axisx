'use client'

import { useEffect, useState } from 'react'
import { gsap, useGsap } from '@/lib/use-gsap'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  const ref = useGsap<HTMLElement>(() => {
    gsap.from('[data-nav-item]', {
      yPercent: -120,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.15,
    })
  }, [])

  // lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 mix-blend-difference md:px-10 md:py-7">
        <a
          href="#top"
          data-nav-item
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="AxisX home"
        >
          AXIS<span className="text-accent">X</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href} data-nav-item>
              <a
                href={l.href}
                className="group relative font-display text-sm font-medium uppercase tracking-wide text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          data-nav-item
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-2 bg-background px-8 transition-[opacity,transform] duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-5xl font-bold uppercase tracking-tight text-foreground"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:info@axisx.sa"
          className="mt-8 text-sm uppercase tracking-widest text-muted-foreground"
        >
          info@axisx.sa
        </a>
      </div>
    </header>
  )
}
