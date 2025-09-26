import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set event date to Summer 2025 (June 21, 2025)
    const eventDate = new Date('2025-06-21T10:00:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegisterClick = () => {
    alert('Registration form would open here!')
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="tennis-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Tennis</span>
            <span className="title-line highlight">Summer Cup</span>
            <span className="title-line year">2025</span>
          </h1>
          
          <p className="hero-subtitle">
            Join the most prestigious tennis tournament of the year
          </p>
        </div>

        <div className="countdown-container">
          <h3 className="countdown-title">Event Starts In</h3>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>

        <button className="register-button" onClick={handleRegisterClick}>
          <span>Register Now</span>
          <div className="button-glow"></div>
        </button>
      </div>
    </section>
  )
}

export default HeroSection