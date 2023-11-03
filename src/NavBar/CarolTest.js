import React from 'react';
import './CarolTest.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
import 'swiper/css';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import StoryCard from '../Shared/Component/StoryCard';
import { data } from '../Shared/Component/Data';



const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};

function CarolTest() {
    // const swiper = useSwiper();
    return (
        <div className='CarolTestContainer'>
            <Swiper
                spaceBetween={1}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='CarolTestContainer2'
            >
                <div className='button'>
                    <SwiperButtonPrev> <div className='prevButton'><KeyboardArrowLeftOutlinedIcon /></div></SwiperButtonPrev>
                    <SwiperButtonNext>
                        <div className='nextButton'>
                            <KeyboardArrowRightOutlinedIcon />
                        </div>
                    </SwiperButtonNext>


                </div>
                {data.map(items => (
                    <SwiperSlide>
                        <StoryCard
                            image={items.picture}
                            name={items.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarolTest