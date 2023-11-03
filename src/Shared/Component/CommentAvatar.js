import React from 'react';
import '../../Watch/CommentAvatar.css';

function CommentAvatar(props) {
    return (
        <div className='commentcontaineravatar'> {props.icon}</div>
    )
}

export default CommentAvatar