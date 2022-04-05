import React from 'react'
import { concertList } from './concertList'

const concerts = () => {
  return (
    <section id="concerts">
    <div className="concert__list">
    {concertList.map(({ id, date, city, venue, flyer, alt }) => {
      return (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer" alt={alt}>
          {icon}
        </a>
      );
    })}
  </div>
  </section>
  )
}

export default concerts