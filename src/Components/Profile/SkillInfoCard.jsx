import React from 'react'

export default function SkillInfoCard({ skill }) {
    return (
        <div className='col-4 skillBox '>
            <img src={skill.image} alt="" />
            <p>{skill.name}</p>
        </div>
    )
}