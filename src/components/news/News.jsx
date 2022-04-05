import React from 'react'
import { newsList } from './newsList'

const News = () => {
  return (
    <section id="news">
      <div className="news__new">
        {newsList.map(({ id, link, icon, alt }) => {
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

export default News