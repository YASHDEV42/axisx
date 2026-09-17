'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Runs a GSAP setup callback scoped to a container element.
 * All animations created inside are reverted automatically on unmount,
 * which keeps ScrollTriggers from leaking across route changes / HMR.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: { self: T }) => void,
  deps: unknown[] = [],
) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => setup({ self: el }), el)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

export { gsap, ScrollTrigger }
