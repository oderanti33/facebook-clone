import React from 'react';
import '../Pages/TabPanel.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Detail1 from '../../Shared/Component/Detail1';
import WatchDetail2 from '../../WatchFolder/WatchDetail2';
import MarketPlace from '../../MarketPlace/MarketPlace';
import Group from '../../Group/Group';
import Game from '../../Gaming/Game';



function TabPanel(props) {
    const [value, setValue] = React.useState(0);
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }
    return (
        <div>
            <div className='appbar'>
                <Tabs className='tabbar' value={value} onChange={handleTabs}>
                    <Tab label={props.label1} />
                    <Tab label={props.label2} />
                    <Tab label={props.label3} />
                    <Tab label={props.label4} />
                    <Tab label={props.label5} />
                </Tabs>
            </div>
            <TabDetail value={value} index={0}> <Detail1 /></TabDetail>
            <TabDetail value={value} index={1}> <WatchDetail2 /> </TabDetail>
            <TabDetail value={value} index={2}> <MarketPlace /></TabDetail>
            <TabDetail value={value} index={3}> <Group /></TabDetail>
            <TabDetail value={value} index={4}> <Game /></TabDetail>
        </div>

    )
}

function TabDetail(props) {
    const { children, value, index } = props
    return (
        <div>
            {value === index && (<h1>{children}</h1>)}
        </div>
    )
}

export default TabPanel