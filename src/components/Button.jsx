import React from 'react'

export default function Button({text, onClick, className}) {
  return (
    <>
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
    </>
  )
}
