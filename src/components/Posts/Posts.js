import React,{useState, useEffect} from 'react'
import instaService from '../../services/instaService/instaService';
import User from '../User/User'
import Error from '../Error/Error'

function Posts(){

    let[post, setPost] = useState([])
    let[error, setError] = useState(false)

    const InstaService =  new instaService()


    useEffect(() => {
        updatePosts()
    }, []);

    const updatePosts = () =>{
        InstaService.getAllPosts()
        .then(onPostLoaded)
        .catch(onError)
    }

    const onPostLoaded = (posts) => {
        if(posts){
            setPost(post = posts)
            setError(error = false)
            // console.log(post)
        }
    }

    const onError = () => {
        setError(error = true)
    }
    if(error){
        return <Error/>
    }

    return (
        <div className="left">
            {post.map((index, key) => {
                return (
                <div className="post" key = {key + 1}>
                    <User
                        src = {index.photo}
                        name = {index.name}
                        min = {true}
                    />
                    <img src={index.src} alt=""/>
                    <div className="post__name">
                        {index.alt}
                    </div>
                    <div className="post__descr">
                        {index.descr}
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Posts