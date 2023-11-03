import React from 'react';
import './StoryCard.css';

function StoryCard(props) {
    return (
        <div class="storyCardcontainer">
            <img src={props.image} alt="Cinque Terre" />
            <div className="center"><img src={props.image} alt={props.name} /></div>
            <div className='name'> <h7>{props.name}</h7></div>
        </div>
    )
}

export default StoryCard