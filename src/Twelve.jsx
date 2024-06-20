import React from 'react'

const Twelve = () => {

    let quotes = ['a','b','c','d','v','z','y'];

    const randomIndex = Math.floor(Math.random()*quotes.length)

    const quote = quotes[randomIndex]
  return (
    <div>{quote}</div>
  )
}

export default Twelve