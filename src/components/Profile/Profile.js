import React from 'react'
import User from '../User/User'
import Palette from '../Palette/Palette'

const Profile = props => {
    return (
        <div className = "container profile">
            <User
                src = 'https://avatars.mds.yandex.net/get-pdb/51720/8b859cd7-0aed-4bd3-9bc9-cff65a18249b/s1200?webp=false'
                name = 'Lorel Lense'
            />
            <Palette/>
        </div>
    )
}

export default Profile
