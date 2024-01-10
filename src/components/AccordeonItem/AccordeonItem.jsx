import React from 'react'

import './accordeonItem.scss';

import { IoLogoGameControllerB } from "react-icons/io";

const AccordeonItem = ({openedItem, setOpenedItem, index, image, name, shortName}) => {

    return (
    <div
        className={`accordeonItem ${openedItem === index ? 'accordeonItem--opened' : ''}`}
        onClick={() => {
            setOpenedItem(index)
        }}
    >
        <img className='accordeonItem__image' src={image} alt="poster" />

        <div className='accordeonItem__overlay'>

        </div>

        <span className='accordeonItem__title-short'>
            {shortName}
        </span>

        <div className='accordeonItem__lower-info'>

            <IoLogoGameControllerB className="accordeonItem__icon" />

            <span className='accordeonItem__title'>
                <span className='accordeonItem__title-text'>
                    {name}
                </span>
            </span>

        </div>
    </div>
  )
}

export default AccordeonItem