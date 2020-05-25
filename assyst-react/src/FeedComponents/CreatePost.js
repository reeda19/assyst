import React, { useState }from 'react'

export default function CreatePost(props) {
    const [postInfo, setPostInfo] = useState({
        Title: '',
        Desc: ''
    });

    const post = () => {
        return props.onPost;
    }

    return (
        <div className="create-card" style={{margin: '10px 5px'}}>
                {/* Display: Grid or create Divs and use Flex */}
                <form onSubmit={post()} >

                    {/* Post Title */}
                    <input type="text" placeholder="Title"/>

                    {/* Post Description */}
                    <input type="text" placeholder="Description"/>

                    {/* Submit Button -> Plus sign bg image*/}
                    <button className="post-button">Submit</button>

                </form>
        </div>
    )
}
