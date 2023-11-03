import React from 'react';
import '../../Watch/FriendRequest.css';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import TourSharpIcon from '@mui/icons-material/TourSharp';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';

function FriendRequest(props) {
    const friendrequest = props.friendrequest;
    const birthday = props.birthday;
    const alert = props.alert;
    const group = props.group;
    const announcement = props.announcement;
    const video = props.video;

    let icon;
    let senders;
    let mutualFriend;
    let period;
    let backupMessage;
    let celebrant;
    let before;
    let after;
    let groupName;
    let invitee;
    let post;
    switch (props.reason) {
        case 'friendrequest':
            // icon = <PersonRoundedIcon />;
            senders = `${props.sender}`;
            mutualFriend = `${props.mutualFriend}`;
            backupMessage = 'sent you a friend request'
            period = `${props.period}`;
            break;
        case 'birthday':
            // icon = <PersonRoundedIcon />;
            celebrant = `${props.celebrant}`;
            backupMessage = 'had birthday yesterday'
            period = `${props.period}`;
            break;
        case 'alert':
            // icon = <PersonRoundedIcon />;
            before = `${props.before}`;
            after = `${props.after}`;
            period = `${props.period}`;
            break;
        case 'group':
            // icon = <PersonRoundedIcon />;
            groupName = `${props.groupName}`
            period = `${props.period}`;
            break;
        case 'announcement':
            // icon = <PersonRoundedIcon />;
            invitee = `${props.invitee}`
            period = `${props.period}`;
            break;
        case 'video':
            // icon = <PersonRoundedIcon />;
            senders = `${props.senders}`;
            post = `${props.post}`;
            period = `${props.period}`;
            break;

        default:
            break;
    }
    return (
        <div className='friendRequestContainer'>
            <div className='fRTop'>
                <div className='fRAvartar'>
                    <img src="https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY" alt="Esther Adesegun" />
                    {friendrequest && <div className='friendrequest'><PersonRoundedIcon /></div>}
                    {birthday && <div className='birthday'><CakeRoundedIcon /></div>}
                    {alert && <div className='alert'><TourSharpIcon /></div>}
                    {group && <div className='group'><GroupsRoundedIcon /></div>}
                    {announcement && <div className='announcement'><NotificationsRoundedIcon /></div>}
                    {video && <div className='video'><OndemandVideoRoundedIcon /></div>}
                </div>
                <div className='fRTopleft'>
                    <div>
                        {friendrequest && <h6>{senders} <span>{backupMessage}</span> </h6>}
                        {birthday && <h6>{celebrant} <span>{backupMessage}</span> </h6>}
                        {alert && <h6> <span>A page you follow,</span>{before} <span>changed its name to </span> {after} </h6>}
                        {group && <h6> <span>Welcome to </span>{groupName}. <span>Admins have approved your request to join</span>. </h6>}
                        {announcement && <h6> {invitee} <span>invited you to follow a page</span>. </h6>}
                        {video && <h6> {senders} <span>posted 3 new videos, including '{post}'</span>. </h6>}
                        <h6 className='day'>{period} ago </h6>
                        {friendrequest && <h7> {mutualFriend} mutual friends </h7>}
                        {friendrequest ? <div className='fRButton'>
                            <button className='confirmButton'>Confirm</button>
                            <button className='deleteButton'>Delete</button>
                        </div> : null}
                    </div>
                    <CircleRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default FriendRequest