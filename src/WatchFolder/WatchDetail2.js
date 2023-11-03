import React from 'react';
import '../WatchFolder/WatchDetail2.css';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import '../Shared/Component/Input'
import Input from '../Shared/Component/Input';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import WatchCard from './WatchCard';

function WatchDetail2() {
    return (
        <div className='watchContainer'>
            <div className='watchLeftSide'>
                <div className='watchLeftSideTop'>
                    <h4>Watch</h4> <SettingsRoundedIcon />
                </div>
                <div className='watchLeftSideTop2' >
                    <input type="text" placeholder='Search video' />
                </div>
                <div className='watchLeftSideBottom' >
                    <div className='watchLeftSideBottomIn'>
                        <OndemandVideoRoundedIcon /> <h6>Home</h6>
                    </div>
                </div>
                <div className='watchLeftSideBottom2' >
                    <div className='watchLeftSideBottomIn'>
                        <VideoCameraFrontRoundedIcon /> <h6>Live</h6>
                    </div>
                </div>
                <div className='watchLeftSideBottom2' >
                    <div className='watchLeftSideBottomIn'>
                        <MovieRoundedIcon /> <h6>Reels</h6>
                    </div>
                </div>
                <div className='watchLeftSideBottom2' >
                    <div className='watchLeftSideBottomIn'>
                        <MovieFilterRoundedIcon /> <h6>Shows</h6>
                    </div>
                </div>
                <div className='watchLeftSideBottom2' >
                    <div className='watchLeftSideBottomIn'>
                        <BookmarkRoundedIcon /> <h6>Saved Video</h6>
                    </div>
                </div>
            </div>
            <div className='watchRightSide'>
                <div className='watchCardContainer' >
                    <WatchCard />
                </div>
                <div className='watchCardContainer' >
                    <WatchCard />
                </div>
                <div className='watchCardContainer' >
                    <WatchCard />
                </div>
            </div>
        </div>
    )
}

export default WatchDetail2