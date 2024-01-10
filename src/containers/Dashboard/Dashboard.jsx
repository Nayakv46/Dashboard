import React from 'react'

import './dashboard.scss';

import { Accordeon, SearchBox } from '../../components';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__inner-wrapper'>
        <SearchBox />
        <Accordeon />
      </div>
    </div>
  )
}

export default Dashboard