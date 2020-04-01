import React from 'react'
import User from '../User/User'

const Post = props =>{
    return (
        <div className="post">
            <User
                src = 'https://avatars.mds.yandex.net/get-pdb/51720/8b859cd7-0aed-4bd3-9bc9-cff65a18249b/s1200?webp=false'
                name = 'Lorel Lense'
                min = {true}
            />
            <img src={props.src} alt=""/>
            <div className="post__name">
                some name account
            </div>
            <div className="post__descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum, asperiores tempora, impedit doloremque et, neque non nisi aut ex facilis quisquam fuga? Dicta, blanditiis perferendis temporibus laborum natus eligendi.
            </div>
        </div>
    )
}

export default Post