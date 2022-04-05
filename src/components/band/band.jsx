import React from 'react'
import { bandMember } from './bandMembers'

const band = () => {
  return (
    <section id="band">
      <div className="band__member">
        {bandMember.map(({ id, photo, name, role, description }) => {
          return (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" alt={name}>
              {icon}
            </a>
          );
        })}
      </div>
    </section>
  )
}

export default band