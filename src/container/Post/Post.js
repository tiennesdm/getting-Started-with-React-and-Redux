
import React from 'react';

import './Post.css';

const post = (props) =>{
    let style = {
        width: "10",
        height: "10",
    }
    return  (
        <article className="Post" onClick={props.clicked} onDoubleClick={props.mousePress}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
            <img src={props.url} alt={props.title} width={style.width} height={style.height} />
        </article>
    );

}

export default post;