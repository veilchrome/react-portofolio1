import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    // Assuming you fetch portfolio data here and update the state using setPortfolio
    // For example: fetchPortfolioData().then(data => setPortfolio(data));
  }, [])

  const renderPortfolio = () => {
    return (
      <div className="images-container">
        {portfolio.map((project, idx) => (
          <div key={idx} className="portfolio-card">
            <h1>TEST Portfolio</h1>
            <img
              src={`YOUR_IMAGE_BASE_PATH/${project.imageURL}`}
              alt={project.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-title">{project.title}</h3>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {portfolio.length === 0 ? (
        <div className="loader-container">
          <Loader type="ball-scale-ripple-multiple" active />
        </div>
      ) : (
        renderPortfolio()
      )}
    </div>
  )
}

export default Portfolio
