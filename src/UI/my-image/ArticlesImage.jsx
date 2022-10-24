import React from 'react'

const ArticlesImage = (props) => {
    const name = props.name;
    const width = props.width;
    const height = props.height;
    let src = props.src;
    const alt = props.alt;
    const imageDefault = `https://via.placeholder.com/${width}x${height}?text=${name}`
    if (!src) {
        src=imageDefault;
    }

    return (    
        <img 
        className={name}
        src={src}
        width={width}
        height={height}
        alt={alt}
        />
    );
};

export default ArticlesImage