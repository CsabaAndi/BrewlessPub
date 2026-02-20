'use client'
import { useEffect, useState } from "react"

function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setShowButton(window.scrollY > 300)
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#6022A6] text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 active:scale-95 ${showButton
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}

export default BackToTop