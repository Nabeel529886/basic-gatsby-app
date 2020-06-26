import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div className="container">
      <h1>I am Nabeel!</h1>
      <div className="underline"></div>
      <p>I hope you are doing great!</p>
      <Link to={'/about'} className="link">More Info About Me..</Link>
    </div>
  )
}
