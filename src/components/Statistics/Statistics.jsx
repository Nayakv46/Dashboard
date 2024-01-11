import { useEffect, useState } from 'react';

import './statistics.scss';

import { GamesData } from '../../games';

const Statistics = ({openedItem}) => {

  const [toggleView, setToggleView] = useState(false);

  const [gameStatistics, setGameStatistics] = useState(GamesData[openedItem].stats);

  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    setGameStatistics(GamesData[openedItem].stats);
    setCompletionPercentage((gameStatistics.gameCompletion*3.6)+"deg");
  }, [openedItem, completionPercentage, gameStatistics.gameCompletion])

  // console.log(openedItem, gameStatistics)

  return (
    <div className='statistics__wrapper'>
      <div className='statistics__timePlayed'>
        {gameStatistics.timePlayed}
      </div>

      <div className="circle-border" style={{"--angle": completionPercentage}}>
        <div className='inner-circle'>
          {gameStatistics.gameCompletion}%
        </div>
      </div>

    </div>
  )
}

export default Statistics