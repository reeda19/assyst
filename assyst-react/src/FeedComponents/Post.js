import React from 'react'
import '../Styles/post.css'

export default function Post(props) {
    return (
        // Grid Display
        <div className="card">
            <div className="title">
                <h1>{props.title}</h1>
                <h1 className="user">{props.user}</h1>
            </div>
            <div className="post-card">
                <div className="desc">
                    <h4>Description</h4>
                    <div className="box">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
            <div className="post-card">
                <div className="desc">
                    <h4>Location</h4>
                    <div className="box">
                        <p>{props.location}</p>
                    </div>
                </div>
            </div>
            <div className="post-card">
                <div style={{flexDirection: 'row'}} className="desc">
                    <h4 style={{fontSize: ".7rem"}}>Tags:</h4>
                    <div className="box2">
                        <p style={{fontSize: ".7rem", margin: '5px 0'}}><i>{props.tags}</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
