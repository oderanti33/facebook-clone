import React from 'react';
import '../../Watch/Contact.css'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ContactAvartar from './ContactAvartar';


function Contact() {
    return (
        <div className='contactContainer'>
            <div className='contactTop'>
                <h6>Contacts</h6>
                <div className='contactIcon'> <VideoCallRoundedIcon /><SearchRoundedIcon /><MoreHorizRoundedIcon /></div>
            </div>
            <div className='contactDown'>
                <ContactAvartar
                    contactName='Esther Adesegun'
                    contactImage='https://media.licdn.com/dms/image/C4D03AQEoQ0nqB2E7hg/profile-displayphoto-shrink_800_800/0/1658021249788?e=2147483647&v=beta&t=29m0Al6UumEPYyFdn8sdDyTIWNLf6U1CHqwd7xsT0BY'
                />
            </div>
            <ContactAvartar
                contactName='Elon Musk'
                contactImage='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
            <ContactAvartar
                contactName='Bill Gates'
                contactImage='https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
            />
        </div>
    )
}

export default Contact