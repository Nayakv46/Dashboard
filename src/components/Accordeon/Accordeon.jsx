
import './accordeon.scss';

import { AccordeonItem } from '../../components';

import { GamesData } from '../../games';

const Accordeon = ({openedItem, setOpenedItem}) => {

  return (
    <div className='accordeon__wrapper'>

        {GamesData.map((currElement, index) => (

            <AccordeonItem
                openedItem={openedItem}
                setOpenedItem={setOpenedItem}
                index={index}
                image={currElement.img}
                name={currElement.name}
                shortName={currElement.shortName}
                key={index}
            />

        ))}

    </div>
  )
}

export default Accordeon