import React, {useState, useEffect} from 'react'
import User from '../User/User'
import instaService from '../../services/instaService/instaService';
import Error from '../Error/Error'

function Users(props){

    const InstaService =  new instaService()
    
    let[error, setError] = useState(false)
    let[photo, setPhoto] = useState([])

    useEffect(() => {
        updateUsers()
    }, []);

    const updateUsers = () => {
        InstaService.getAllPosts()
            .then(onPhotosLoaded)
            .catch(onError)
    }
    const onError = () => {
        if(!error){
            setError(error = true)
        }
    }

    const onPhotosLoaded = (photos) => {
        if(photos){
            setPhoto(photo = photos)
            setError(error = false)
            console.log(photo)
        }
    }
    if(error){
        return <Error/>
    }


    return (
        <div className="right">
            <User
                src = 'https://avatars.mds.yandex.net/get-pdb/51720/8b859cd7-0aed-4bd3-9bc9-cff65a18249b/s1200?webp=false'
                name = 'Lorel Lense'
            />
            <div className="users__block">
                {photo.map((photo) => {
                    return (
                        <User
                            src = {photo.photo}
                            name = {photo.name}
                            min = {true}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Users