import React, {useState, useEffect} from 'react'
import instaService from '../../services/instaService/instaService';
import Error from '../Error/Error'

function Palette() {
    const InstaService =  new instaService()
    
    let[error, setError] = useState(false)
    let[photo, setPhoto] = useState([])

    useEffect(() => {
        updatePhotos()
    }, []);

    const updatePhotos = () => {
        InstaService.getAllPhotos()
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
        }
    }
    if(error){
        return <Error/>
    }

    return (
     <div className = 'palette'>
         {photo.map((photo, index) => {
             return <img key = {index + 1} src={photo.src} alt={photo.alt}/>
         })}
     </div>   
    )
}

export default Palette