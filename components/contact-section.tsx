'use client'

import { gsap, useGsap } from '@/lib/use-gsap'

const bigWords = ["Let's", 'make', 'something', 'impossible', 'to', 'ignore.']

export function ContactSection() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from('[data-contact-word] > span', {
      yPercent: 110,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.05,
      scrollTrigger: { trigger: '[data-contact-headline]', start: 'top 85%' },
    })

    gsap.from('[data-contact-fade]', {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '[data-contact-details]', start: 'top 90%' },
    })
  }, [])

  return (
    <section
      ref={ref}
      id="contact"
      className="relative border-t border-line pt-20 md:pt-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex items-baseline justify-between md:mb-20">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact Us
          </span>
          <span className="font-display text-sm font-semibold text-accent">04</span>
        </div>

        <p
          data-contact-fade
          className="mb-8 text-sm uppercase tracking-[0.2em] text-muted-foreground md:mb-10"
        >
          Have a project in mind?
        </p>

        <h2
          data-contact-headline
          className="font-display text-[11vw] font-bold uppercase leading-[0.92] tracking-tight md:text-[8vw]"
        >
          {bigWords.map((w, i) => (
            <span key={i} data-contact-word className="mr-[0.18em] inline-block overflow-hidden">
              <span className={`inline-block ${w === 'ignore.' ? 'text-accent' : ''}`}>{w}</span>
            </span>
          ))}
        </h2>

        <div
          data-contact-details
          className="mt-16 grid gap-8 border-t border-line pt-10 md:mt-24 md:grid-cols-2"
        >
          <a
            data-contact-fade
            href="mailto:info@axisx.sa"
            className="group flex flex-col gap-1"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </span>
            <span className="font-display text-2xl font-medium transition-colors group-hover:text-accent md:text-4xl">
              info@axisx.sa
            </span>
          </a>
          <a
            data-contact-fade
            href="tel:+966549230331"
            className="group flex flex-col gap-1 md:items-end"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Phone
            </span>
            <span className="font-display text-2xl font-medium transition-colors group-hover:text-accent md:text-4xl">
              +966 54 923 0331
            </span>
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-20 flex max-w-[1400px] flex-col gap-6 border-t border-line px-5 py-8 md:mt-28 md:flex-row md:items-center md:justify-between md:px-10">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-widest"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M6 11V1M1 6l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Back to top
        </a>

        <span className="font-display text-lg font-bold tracking-tight">
          AXIS<span className="text-accent">X</span>
        </span>

        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          2026 — All Rights Reserved for AxisX
        </p>
      </footer>
    </section>
  )
}
