import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import CardGrid from '../CardGrid'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameProject = ['P', 'r', 'o', 'j', 'e', 'c', 't']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div>
        <p className="about">Lorem Ipsum</p>
      </div>
      <CardGrid />
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
