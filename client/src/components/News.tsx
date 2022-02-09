import React, { FC } from 'react'

interface Props {
    title: string
    description: string
    image: string
}

export const News:FC<Props> = ({title, description, image}) => {
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', width: '70%', border: '2px solid #F0F1F5', padding: '3rem', background: '#fff8ff', marginBottom: '1rem', borderRadius: '20px'}}>
        <h1 style={{borderBottom: '1px solid #b7b7b7', width: '100%', color: '#757577'}}>{title}</h1>
        <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
            <img style={{maxWidth: '500px'}} src={image} alt={title}/>
            <p style={{color: '#7A7380', marginTop: '1rem'}}>{description}</p>
        </div>
    </div>
  )
}
