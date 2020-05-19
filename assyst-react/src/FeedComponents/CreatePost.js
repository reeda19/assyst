import React from 'react'

export default function CreatePost() {
    return (
        <div className="create-card" style={{margin: '10px 5px'}}>
                {/* Display: Grid or create Divs and use Flex */}
                <form action="">

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
