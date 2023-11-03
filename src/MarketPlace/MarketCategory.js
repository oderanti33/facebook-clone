import React from 'react';
import './MarketCategory.css';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


function MarketCategory(props) {
  const { categoryName, image, price, details, location } = props
  return (
    <div className='marketCategoryTodayPlaceContainer'>
      <div className='TodayPlaceTop'>
        <h4> {categoryName} </h4> <div className='marketCategoryTodayPlaceTopRight'><button>See All</button><MoreHorizRoundedIcon /></div>
      </div>
      <div className='MarketCategoryPlaceContainer'>
        <div className='marketCardContainer'>
          <img src={image} alt={details} />
          <div className='marketCardDetail'>
            <h4>
              {price}
            </h4>
            <h5>
              {details}
            </h5>
            <h6>
              {location}
            </h6>
          </div>
        </div>
        <div className='marketCardContainer'>
          <img src={image} alt={details} />
          <div className='marketCardDetail'>
            <h4>
              {price}
            </h4>
            <h5>
              {details}
            </h5>
            <h6>
              {location}
            </h6>
          </div>
        </div>
        <div className='marketCardContainer'>
          <img src={image} alt={details} />
          <div className='marketCardDetail'>
            <h4>
              {price}
            </h4>
            <h5>
              {details}
            </h5>
            <h6>
              {location}
            </h6>
          </div>
        </div>
        <div className='marketCardContainer'>
          <img src={image} alt={details} />
          <div className='marketCardDetail'>
            <h4>
              {price}
            </h4>
            <h5>
              {details}
            </h5>
            <h6>
              {location}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketCategory