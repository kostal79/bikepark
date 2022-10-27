import React from 'react'
import './ArticlesImage.css'

const ArticlesImage = (props) => {
    /*comment */
    const name = props.name;
    const width = props.width;
    const height = props.height;
    const figcaption = props.figcaption;
    let src = props.src;
    const alt = props.alt;
    const imageDefault = `https://via.placeholder.com/${width}x${height}?text=${name}`
    if (!src) {
        src = imageDefault;
    }

    if (figcaption) {
        return (
            <figure>
                <img
                    className={name}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                />
                <figcaption>{figcaption}</figcaption>
            </figure>
        );
    } else {
        return (
            <img
            className={name}
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
        )
    }
};

export default ArticlesImage