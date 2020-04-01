import React from 'react'

const User = props => {
    return (
        <a href="/" className = {props.min ? "user min" : "user"}>
            <img src={props.src} alt=""/>
            <div>{props.name}</div>
        </a>
    )
}

export default User