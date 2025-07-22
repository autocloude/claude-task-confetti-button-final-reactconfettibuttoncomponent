'use client'

import { useState } from 'react'
import Confetti from 'react-confetti'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleButtonClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <main className="container">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="content">
        <h1>Celebrate with Confetti!</h1>
        <button 
          onClick={handleButtonClick}
          className="confetti-button"
        >
          🎉 Click for Confetti!
        </button>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .content {
          text-align: center;
          color: white;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .confetti-button {
          background: linear-gradient(45deg, #ff6b6b, #ee5a52);
          border: none;
          border-radius: 50px;
          padding: 20px 40px;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .confetti-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
          background: linear-gradient(45deg, #ff5252, #e53935);
        }

        .confetti-button:active {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }

        .confetti-button:focus {
          outline: none;
          ring: 4px;
          ring-color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .confetti-button {
            padding: 16px 32px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </main>
  )
}