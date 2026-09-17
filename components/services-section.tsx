'use client'

import { useState } from 'react'
import { gsap, useGsap } from '@/lib/use-gsap'

const services = [
  {
    no: '01',
    title: 'Strategy & Brand',
    body: 'We build clear strategies and distinctive brands that create relevance, strengthen presence, and support sustainable growth.',
  },
  {
    no: '02',
    title: 'Creative & Campaigns',
    body: 'We transform strategic thinking into bold creative ideas and integrated campaigns that move audiences and deliver impact.',
  },
  {
    no: '03',
    title: 'Marketing & Communication',
    body: "We manage brands' daily presence through relevant content, active engagement, and data-driven communication.",
  },
  {
    no: '04',
    title: 'Event Management & Execution',
    body: 'We create and deliver engaging events and experiences that connect with audiences and leave a lasting impression.',
  },
]

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(0)

  const ref = useGsap<HTMLElement>(() => {
    gsap.from('[data-service-row]', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '[data-service-list]', start: 'top 80%' },
    })
  }, [])

  return (
    <section ref={ref} id="services" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex items-baseline justify-between md:mb-20">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </h2>
          <span className="font-display text-sm font-semibold text-accent">02</span>
        </div>

        <p className="mb-12 max-w-2xl text-pretty text-xl leading-snug md:mb-16 md:text-3xl">
          Four disciplines, one axis — aligned to create relevance, momentum, and
          lasting impact.
        </p>

        <div data-service-list className="border-t border-line">
          {services.map((s, i) => {
            const isOpen = active === i
            return (
              <div
                key={s.no}
                data-service-row
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(isOpen ? null : i)}
                className="group cursor-pointer border-b border-line py-6 transition-colors md:py-8"
              >
                <div className="flex items-center gap-4 md:gap-10">
                  <span
                    className={`font-display text-sm font-semibold tabular-nums transition-colors md:text-base ${
                      isOpen ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {s.no}
                  </span>
                  <h3
                    className={`flex-1 font-display text-2xl font-bold uppercase leading-none tracking-tight transition-transform duration-500 md:text-5xl ${
                      isOpen ? 'md:translate-x-4' : 'md:translate-x-0'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 md:h-12 md:w-12 ${
                      isOpen
                        ? 'rotate-45 border-accent bg-accent text-accent-foreground'
                        : 'border-line text-foreground'
                    }`}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pt-5 text-pretty leading-relaxed text-muted-foreground md:pl-[calc(2rem+40px)] md:text-lg">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
