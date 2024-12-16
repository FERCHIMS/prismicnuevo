'use client'
import { useState, useEffect, useRef } from "react";


const Card = ({children}) => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting)
        }
      )
      if (itemRef.current) {
        observer.observe(itemRef.current)
      }
      return () => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current)
        }
      }
    }, [])

  return (
    <div ref={itemRef} className={`w-[400px] h-[400px] transition-all duration-[1200ms] ${isInView ? "scale-100 translate-x-0 brightness-100" : "scale-[95%] translate-x-[10vh] brightness-[2]"} `}>
        {children}
    </div>
  )
}

export default Card