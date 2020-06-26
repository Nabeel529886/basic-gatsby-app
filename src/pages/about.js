import React from 'react'
import { Link } from 'gatsby'

export default function About(){
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="underline"></div>
            <p>This is my Info</p>
            <Link to={'/'} className="link">Go back to home page</Link>
        </div>
    )
}