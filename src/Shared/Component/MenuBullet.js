import React from 'react';
import '../../Watch/MenuBullet.css';

function MenuBullet(props) {
    return (
        <div className='menuBulletContainer'>
            <div className='menuBulletRight'>
                {props.icon}
            </div>
            <div className='menuBulletLeft'>
                <h5>{props.head}</h5>
                <h6>{props.body}</h6>
            </div>
        </div>
    )
}

export default MenuBullet