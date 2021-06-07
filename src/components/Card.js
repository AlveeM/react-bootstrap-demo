import React from 'react'

export default function Card({ title, text, url }) {
  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <h3 className="card-title h1">{title}</h3>
        <p className="card-text">{text}</p>
        <a href={url} className="btn btn-primary">Link</a>
      </div>
    </div>
  )
}
