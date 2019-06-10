import React, { useState } from 'react';
import ImageContext from '../../context/contextImage';


const ImageProvider = (image) => {

    const [ image, setImage ] = useState({
        image
    })

    return (
        <ImageContext.Provider value={image}></ImageContext.Provider>
    )
}

export default ImageProvider