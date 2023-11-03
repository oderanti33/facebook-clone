import React from 'react';
import '../../Watch/Menu.css';
import ReactDOM from 'react-dom';
import MenuBullet from './MenuBullet';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Underline from './Underline';



function menu() {
    const menu = <div className='menuContainer'>
        <h3>Menu</h3>
        <div className='menuColumn'>
            <div className='menufirstColumn'>
                <input type="text" id='menuSearch' placeholder='Search menu' />
                <h6>Social</h6>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Events' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Friends' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <Underline />
                <h6>Entertainment</h6>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
                <div className='menuSocial'>
                    <MenuBullet icon=<MenuBookRoundedIcon /> head='Group' body='Organise or find events and other things to do online and nearby' />
                </div>
            </div>
            <div className='menuSecondColumn'>
                <h6>Create</h6>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <Underline />
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
                <div className='menuCreate'>
                    <MenuBookRoundedIcon /> <h6>Post</h6>
                </div>
            </div>
        </div>

    </div>;

    return ReactDOM.createPortal(menu, document.getElementById('menu-hook'));
}

export default menu