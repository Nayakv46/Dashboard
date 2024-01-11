import { useState } from 'react';

import './dashboard.scss';

import { Accordeon, SearchBox, Statistics } from '../../components';

const Dashboard = () => {

  const [openedItem, setOpenedItem] = useState(0);

  return (
    <div className='dashboard'>
      <div className='dashboard__inner-wrapper'>
        <SearchBox />
        <Accordeon
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
      </div>
        <Statistics openedItem={openedItem} />
    </div>
  )
}

export default Dashboard