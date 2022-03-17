import React from 'react'

const GifGridItem = ({title, id, url}) => {
  return (
    <div className="card animate__animated animate__fadeInLeftBig ">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem

