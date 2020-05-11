import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
            <div className="omg-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="category">{props.data.category}</p>
                <p className="description">{props.data.description}</p>
                <button className="hapus" onClick={() => props.hapus(props.data.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;