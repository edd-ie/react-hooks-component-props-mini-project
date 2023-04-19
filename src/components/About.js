import React from 'react'

function About({url="https://via.placeholder.com/215", about}){
    return (
        <aside>
            <img src={url} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About