'use client'

import { gsap, useGsap } from '@/lib/use-gsap'

const headline = ['Strategic', 'Minds,', 'Creative', 'Impact.']

export function HeroSection() {
  const ref = useGsap<HTMLElement>(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.from('[data-hero-word] > span', {
      yPercent: 115,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.09,
    })
      .from(
        '[data-hero-fade]',
        {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        },
        '-=0.5',
      )
      .from(
        '[data-hero-line]',
        { scaleX: 0, transformOrigin: 'left', duration: 1.1, ease: 'power3.inOut' },
        '-=0.9',
      )

    // subtle parallax drift of the big X mark
    gsap.to('[data-hero-mark]', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-10 pt-32 md:px-10 md:pb-16"
    >
      {/* oversized background axis mark */}
      <span
        data-hero-mark
        aria-hidden
        className="pointer-events-none absolute -right-[6vw] -top-[6vw] select-none font-display text-[46vw] font-bold leading-none text-surface md:text-[38vw]"
      >
        X
      </span>

      <div className="relative mx-auto w-full max-w-[1400px]">
        <p
          data-hero-fade
          className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground md:mb-12 md:text-base"
        >
          <span className="text-accent">(01)</span> — A strategy &amp; creative studio
          building brands with a true competitive edge.
        </p>

        <h1 className="font-display text-[13vw] font-bold uppercase leading-[0.92] tracking-tight md:text-[9.5vw]">
          {headline.map((word, i) => (
            <span key={i} data-hero-word className="mr-[0.2em] inline-block overflow-hidden">
              <span className="inline-block">{word}</span>
            </span>
          ))}
        </h1>

        <div data-hero-line className="my-8 h-px w-full origin-left bg-line md:my-12" />

        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <p
            data-hero-fade
            className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We are the axis where strategy meets value, and creativity drives impact.
            With over a decade of experience in crafting strategies and building brands,
            we empower our clients with a true competitive edge in an ever-changing market.
          </p>

          <a
            data-hero-fade
            href="#contact"
            className="group inline-flex items-center gap-3 self-start whitespace-nowrap font-display text-sm font-semibold uppercase tracking-widest text-foreground md:self-end"
          >
            Start a project
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M1 13L13 1M13 1H4M13 1V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
