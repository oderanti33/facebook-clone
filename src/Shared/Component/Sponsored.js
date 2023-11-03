import React from 'react';
import '../../Watch/Sponsored.css';
import Underline from './Underline';
import YourPage from './YourPage';
import Birthday from './Birthday';
import Contact from './Contact';
import Group from './Group';

function Sponsored() {
    return (
        <div className='sponsoredContainer'>
            <h5>Sponsored</h5>
            <div className='advertSection'>
                <img src="https://media.ng.oraimo.com/catalog/product/cache/260d56349d48a602b23f9645dee29150/6/8/680_-8.17-03_56e2e87a-0add-40bb-803d-7004b87d7893.jpg" alt="Sponsored Image" />
                <div>
                    <h6>2000mAh 20% OFF!</h6>
                    <h6>ng.oraimo.com</h6>
                </div>
            </div>
            <div className='advertSection'>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/32/794608/1.jpg?0951" alt="Sponsored Image" />
                <div>
                    <h6>2000mAh 20% OFF!</h6>
                    <h6>ng.oraimo.com</h6>
                </div>
            </div>
            <Underline />
            <div className='YourPage'>
                <YourPage />
            </div>
            <Underline />
            <div className='YourPage'>
                <Birthday />
            </div>
            <Underline />
            <div className='YourPage'>
                <Contact />
            </div>
            <Underline />
            <div className='YourPage'>
                <Group />
            </div>
        </div>
    )
}

export default Sponsored