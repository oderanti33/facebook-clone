import React from 'react';
import '../../Shared/Component/TabPanel2.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Detail1 from './Detail1';
import Carousal from './Carousal';
import Carousaltest from './Carousaltest';
import Underline from './Underline';
import CarolTest from '../../NavBar/CarolTest';



function TabPanel2(props) {
    const [value, setValue] = React.useState(0);
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }
    return (
        <div className='appBar2Container'>
            <Tabs className='tabbar2' value={value} onChange={handleTabs}>
                <Tab className='tabbarreal' label={props.label1} />
                <Tab className='tabbarreal' label={props.label2} />
            </Tabs>
            <Underline />
            <TabDetail value={value} index={0}> <CarolTest /></TabDetail>
            <TabDetail value={value} index={1}> Detail 2</TabDetail>

        </div>

    )
}

function TabDetail(props) {
    const { children, value, index } = props
    return (
        <div className='detailtab2'>
            {value === index && (<h1>{children}</h1>)}
        </div>
    )
}

export default TabPanel2