import React from 'react'

export default function Post(props) {
    return (
        // Grid Display
        <div className="post-card" style={{margin: '10px 5px', width: '20%'}}>
            <h1>{props.title}</h1>
            <div className="post-info">
                <h4><i>Location:</i> {props.location}</h4>
                <h4><i>Details:</i> {props.desc}</h4>
            </div>
            <button>Join Project!</button>
        </div>
    )
}
