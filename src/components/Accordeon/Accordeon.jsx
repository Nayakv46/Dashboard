import { useState } from 'react';

import './accordeon.scss';

import { AccordeonItem } from '../../components';

import { GamesData } from '../../games';

// use state here
// inside items onMouseOver setstate of chosen item

const Accordeon = () => {

    const [openedItem, setOpenedItem] = useState(0);

  return (
    <div className='accordeon__wrapper'>

        {GamesData.map((currElement, index) => (
            <>
            <AccordeonItem
                openedItem={openedItem}
                setOpenedItem={setOpenedItem}
                index={index}
                image={currElement.img}
                name={currElement.name}
                key={index}
            />

            {/* <img src={GamesData.img}  alt="bitc"/> */}
            </>
        ))}

        {/* <AccordeonItem
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            index="0"
            color="blue"
        />
        <AccordeonItem
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            index="1"
            color="red"
        />
        <AccordeonItem
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            index="2"
            color="green"
        />
        <AccordeonItem
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            index="3"
            color="yellow"
        /> */}
    </div>
  )
}

export default Accordeon