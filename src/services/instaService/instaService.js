export default class instaService {
    constructor(){
        this._apiBase = 'http://localhost:3000'
    }

    getResourse = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`)
        }

        return await res.json()
    }

    getAllPosts = async () => {
        const res = await this.getResourse('/posts/')
        return res
    }

    getAllPhotos = async () => {
        const res = await this.getResourse('/posts/')
        return res.map(this._transformPosts)
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}