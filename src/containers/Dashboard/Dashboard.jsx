import React from 'react'

import './dashboard.scss';

import { Accordeon } from '../../components';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__inner-wrapper'>
        <Accordeon />
      </div>
    </div>
  )
}

export default Dashboard