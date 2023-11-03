import React from 'react';
import '../../Watch/Birthday.css';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

function Birthday() {
    return (
        <div className='birthdayContainer'>
            <h6>Birthday</h6>
            <div className='birthdayCelebrant'>
                <CardGiftcardRoundedIcon /> <h6>Esther O. Adesegun and <br /> 6 others have birthdays today</h6>
            </div>
        </div>
    )
}

export default Birthday