import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letter, setLetter] = useState('text-animate')
  const nameContact = ['C', 'O', 'N', 'T', 'A', 'C', 'T']
  const nameMe = ['_', 'M', 'E']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetter('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <>
      <h1 className="contact-container">
        <AnimatedLetters letterClass={letter} strArray={nameContact} idx={15} />
        <AnimatedLetters letterClass={letter} strArray={nameMe} idx={15} />
      </h1>
      <p className="p-contact">In Progress</p>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
