'use client'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import DetailPage from '@/components/DetailPage'
import StartPage from '@/components/StartPage'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 10 // Changed from 4 to 5 to include pages 0-4
  const [touchStart, setTouchStart] = useState<number | null>(null)

  useEffect(() => {
    // Prevent default scrolling behavior
    const preventScroll = (e: Event) => {
      if (e instanceof WheelEvent) {
        // Only prevent vertical scrolling
        if (Math.abs((e as WheelEvent).deltaY) > Math.abs((e as WheelEvent).deltaX)) {
          e.preventDefault()
        }
      } else {
        // For touch events, only prevent vertical scrolling
        if (e instanceof TouchEvent) {
          const touch = e.touches[0]
          const target = touch.target as HTMLElement
          if (!target.closest('.overflow-x-scroll')) {
            e.preventDefault()
          }
        }
      }
    }

    // Handle touch events
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart === null) return

      const touchEnd = e.touches[0].clientY
      const diff = touchStart - touchEnd

      // Threshold of 50px for swipe
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentPage < totalPages - 1) {
          // Swipe up
          setCurrentPage(prev => prev + 1)
        } else if (diff < 0 && currentPage > 0) {
          // Swipe down
          setCurrentPage(prev => prev - 1)
        }
        setTouchStart(null)
      }
    }

    // Add all event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('wheel', preventScroll, { passive: false })
    document.addEventListener('touchmove', preventScroll, { passive: false })

    // Remove all event listeners on cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('wheel', preventScroll)
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [currentPage, touchStart, totalPages])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 0 ? (
          <StartPage key="start" />
        ) : (
          <DetailPage key="detail" pageNumber={currentPage} />
        )}
      </AnimatePresence>
    </div>
  )
}
