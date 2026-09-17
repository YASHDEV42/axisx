'use client'

import { gsap, useGsap } from '@/lib/use-gsap'

const marquee = ['Strategy', 'Brand', 'Creative', 'Campaigns', 'Impact', 'Growth']

export function AboutSection() {
  const ref = useGsap<HTMLElement>(() => {
    // headline word reveal
    gsap.from('[data-about-word] > span', {
      yPercent: 110,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.06,
      scrollTrigger: { trigger: '[data-about-statement]', start: 'top 80%' },
    })

    gsap.from('[data-about-fade]', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: { trigger: '[data-about-grid]', start: 'top 85%' },
    })

    // infinite marquee
    const track = ref.current?.querySelector('[data-marquee-track]')
    if (track) {
      gsap.to(track, {
        xPercent: -50,
        duration: 24,
        ease: 'none',
        repeat: -1,
      })
    }
  }, [])

  const words = 'We turn thinking into brands that matter.'.split(' ')

  return (
    <section
      ref={ref}
      id="about"
      className="relative border-t border-line py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex items-baseline justify-between md:mb-24">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            About Axis
          </span>
          <span className="font-display text-sm font-semibold text-accent">X01</span>
        </div>

        <h2
          data-about-statement
          className="max-w-5xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-7xl"
        >
          {words.map((w, i) => (
            <span key={i} data-about-word className="mr-[0.22em] inline-block overflow-hidden">
              <span className={`inline-block ${w === 'matter.' ? 'text-accent' : ''}`}>{w}</span>
            </span>
          ))}
        </h2>

        <div
          data-about-grid
          className="mt-16 grid gap-10 border-t border-line pt-10 md:mt-24 md:grid-cols-3 md:gap-8"
        >
          <p data-about-fade className="text-pretty leading-relaxed text-muted-foreground">
            For over a decade we have crafted strategies and built brands, standing at the
            axis where sharp thinking meets real business value.
          </p>
          <div data-about-fade>
            <div className="font-display text-5xl font-bold md:text-6xl">10+</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Years of experience
            </div>
          </div>
          <div data-about-fade>
            <div className="font-display text-5xl font-bold md:text-6xl">
              04<span className="text-accent">.</span>
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Core disciplines
            </div>
          </div>
        </div>
      </div>

      {/* marquee band */}
      <div className="mt-20 overflow-hidden border-y border-line py-6 md:mt-32">
        <div data-marquee-track className="flex w-max whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marquee.map((word) => (
                <span key={`${dup}-${word}`} className="flex items-center">
                  <span className="px-8 font-display text-2xl font-medium uppercase tracking-tight md:text-4xl">
                    {word}
                  </span>
                  <span className="px-2 font-display text-xl text-accent md:text-2xl" aria-hidden>
                    ×
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
