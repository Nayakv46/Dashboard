import React from 'react'

import './accordeonItem.scss';

const AccordeonItem = ({openedItem, setOpenedItem, index, image, name, color}) => {

    return (
    <div
        className={`accordeonItem ${openedItem === index ? 'accordeonItem--opened' : ''} ${color}`}
        onClick={() => {
            setOpenedItem(index)
        }}
    >
        <img className='accordeonItem__image' src={image} alt="poster" />

        <span className='accordeonItem__icon'></span>

        <span className='accordeonItem__title'>
            {name}
        </span>
    </div>
  )
}

export default AccordeonItem