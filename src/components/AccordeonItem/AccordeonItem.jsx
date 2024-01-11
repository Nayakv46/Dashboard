import { useState, useEffect } from 'react';

import './accordeonItem.scss';

import { PlayButton } from '../../components';

import { IoLogoGameControllerB } from "react-icons/io";

const AccordeonItem = ({openedItem, setOpenedItem, index, image, name, shortName}) => {


    // A max value for window.innerWidth between (540, 991)
    const [maxHeight, setMaxHeight] = useState(`280px`);

    // On window resize, check if the state of maxHeight is supposed to be updated
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if(windowWidth <= 540){
            // set the state for a variable passed to css
            // windowWidth - padding * 280/500 ratio
            setMaxHeight(`${(windowWidth - 40) * 0.56}px`);
        }
    })

    // Run function once on load to check if the window is smaller than 540 and update the state if so
    useEffect(() => {
        const windowWidth = window.innerWidth;
        if(windowWidth <= 540){
            setMaxHeight(`${(windowWidth - 40) * 0.56}px`);
        }
    }, []);

    return (
    <div
        className={`accordeonItem ${openedItem === index ? 'accordeonItem--opened' : ''}`}
        style={{"--maxHeight": maxHeight}}
        onClick={() => {
            setOpenedItem(index)
        }}
    >
        <div className='accordeonItem__image' style={{backgroundImage: `url('${image}')`}}>
        </div>

        <div className='accordeonItem__overlay'>

        </div>

        <span className='accordeonItem__title-short'>
            {shortName}
        </span>

        <div className='accordeonItem__lower-info'>


            <div className='accordeonItem__desc'>

                <IoLogoGameControllerB className="accordeonItem__icon" />

                <span className='accordeonItem__title'>
                    <span className='accordeonItem__title-text'>
                        {window.innerWidth > 400 ? `${name}` : `${shortName}`}
                    </span>
                </span>
            </div>
                <PlayButton />

        </div>
    </div>
  )
}

export default AccordeonItem