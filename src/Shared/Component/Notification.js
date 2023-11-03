import React from 'react';
import '../../Watch/Notification.css';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import ReactDOM from 'react-dom';
import FriendRequest from './FriendRequest';

function Notification() {
    const Notification = <div className='notificationContainer'>
        <div className='notificationTop'>
            <h2>Notification</h2> <MoreHorizSharpIcon />
        </div>
        <div className='notificationTop2'>
            <h6>All</h6> <h6>Unread</h6>
        </div>
        <div className='notificationTop3'>
            <h6>New</h6> <button>See all</button>
        </div>
        <FriendRequest
            friendrequest='yes'
            reason='friendrequest'
            sender='Esther Adesegun'
            mutualFriend='10'
            period='a week'
        />
        <FriendRequest
            birthday='yes'
            reason='birthday'
            celebrant='Elon Musk'
            period='a week'
        />
        <FriendRequest
            alert='yes'
            reason='alert'
            before='Action Congress of Nigeria'
            after='Action Progressive Congress'
            period='a week'
        />
        <FriendRequest
            group='yes'
            reason='group'
            groupName='CACCF FUTA'
            period='a week'
        />
        <FriendRequest
            announcement='yes'
            reason='announcement'
            invitee='Esther Adesegun'
            period='a week'
        />
        <FriendRequest
            video='yes'
            reason='video'
            senders='Esther Adesegun'
            post='How to find purpose'
            period='a week'
        />
    </div>;

    return ReactDOM.createPortal(Notification, document.getElementById('notification-hook'));
}

export default Notification