import { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'offered'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    
 

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className='text-center'>
            <Helmet>
    <title> Bistro Boss | Order</title>
  </Helmet>
          <Cover img={orderCover} title={"Order Food"}></Cover>
          <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
    <Tab>salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>offered</Tab>
      </TabList>
     <TabPanel>
     <OrderTab items={salad}></OrderTab>
     </TabPanel>
     <TabPanel>
        <OrderTab items={pizza}></OrderTab>
     </TabPanel>
     <TabPanel>
         <OrderTab items={soup}></OrderTab>
     </TabPanel>
     <TabPanel>
     <OrderTab items={dessert}></OrderTab>
     </TabPanel>
     <TabPanel>
     <OrderTab items={offered}></OrderTab>
     </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;