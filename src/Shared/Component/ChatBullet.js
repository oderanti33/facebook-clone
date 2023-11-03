import React from 'react';
import '../../Watch/ChatBullet.css';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';


function ChatBullet(props) {
    return (
        <div className='chatBulletContainer'>
            <div className='chatBulletRight'>
                <img src={props.image} alt={props.head} />
                <div className='chatDot'>
                    <CircleRoundedIcon />
                </div>
            </div>
            <div className='chatBulletLeft'>
                <h5>{props.head}</h5>
                <div className='chatMessage'><h6>{props.body}</h6><CircleRoundedIcon /><h6>{props.hour}</h6></div>
            </div>
        </div>
    )
}

export default ChatBullet