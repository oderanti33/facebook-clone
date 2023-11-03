import React from 'react';
import '../../Watch/Chat.css';
import ReactDOM from 'react-dom';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ChatBullet from './ChatBullet';
import Underline from './Underline';

function Chats() {
    const chat = <div className='ChatContainer'>
        <div className='chatTopContainer'>
            <h2>Chats</h2>
            <div className='chatIcon'>
                <MenuBookRoundedIcon />
                <MenuBookRoundedIcon />
                <MenuBookRoundedIcon />
                <MenuBookRoundedIcon />
            </div>
        </div>
        <input type="text" id='chatInput' placeholder='Search Messenger' />
        <div className='chatButton'>
            <button id='inbox'>Inbox</button>
            <button id='community'>communities</button>
        </div>
        <div>
            <ChatBullet image='https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY' head='Esther Adesegun' body='okay' hour='2h' />
            <ChatBullet image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' head='Elon Musk' body='its done' hour='3m' />
            <ChatBullet image='https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY' head='Esther Adesegun' body='okay' hour='2h' />
            <ChatBullet image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' head='Elon Musk' body='its done' hour='3m' />
            <ChatBullet image='https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY' head='Esther Adesegun' body='okay' hour='2h' />
            <ChatBullet image='https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY' head='Esther Adesegun' body='okay' hour='2h' />
        </div>
        <Underline />
        <div className='chatBottomContainer'>
            <h6> See all in Messenger</h6>
        </div>
    </div>;

    return ReactDOM.createPortal(chat, document.getElementById('chat-hook'))
}

export default Chats