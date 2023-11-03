import React from 'react';
import Avatar from './Avatar';
import '../../Watch/Shortcut.css';

function Shortcut() {
    return (
        <div className='shortcutContainer'>
            <h5>Your Shortcuts</h5>
            <div>
                <Avatar icon='RJ' />
                <h6>RCCG, Jesus Our Saviour Parish</h6>
            </div>
            <div>
                <Avatar icon='RJ' />
                <h6>RCCG, Jesus Our Saviour Parish</h6>
            </div>
        </div>
    )
}

export default Shortcut