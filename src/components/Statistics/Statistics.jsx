import { useEffect, useState } from 'react';

import './statistics.scss';

import { GamesData } from '../../games';

const Statistics = ({openedItem}) => {

  const [toggleView, setToggleView] = useState(false);

  const [gameStatistics, setGameStatistics] = useState(GamesData[openedItem].stats);

  const [timePlayed, setTimePlayed] = useState(0);

  const [completionPercDeg, setCompletionPercDeg] = useState(0);

  useEffect(() => {
    setGameStatistics(GamesData[openedItem].stats);
    setCompletionPercDeg(
      (gameStatistics.gameCompletion.slice(0,2)*3.6)+"deg"
      );
    setTimePlayed(
      parseInt(gameStatistics.timePlayed.slice(0,5)) > 1000 ?
      parseInt(gameStatistics.timePlayed.slice(0,7)) :
      parseInt(gameStatistics.timePlayed.slice(0,5))
    );
  }, [openedItem, completionPercDeg, gameStatistics.timePlayed, gameStatistics.gameCompletion])

  // console.log(openedItem, gameStatistics)

  // FIDDLE WITH USE EFFECT ON TOGGLE VIE TO SET COMPLETIONPERCENTAGE TO 0
  // FIDDLE SO STATISTICS WILL BE COUNTED TO SIZE OF WEBSITE?

  return (
    <div className='statistics__wrapper'>
      <div className='statistics__timePlayed'
        style={{
          "--hoursPlayed": timePlayed,
          "--minutesPlayed": gameStatistics.timePlayed.slice(-6,-3)}
        }
      >
      </div>

      <div className="circle-border"
        style={{
          "--angle": completionPercDeg
        }}
      >
        <div className='inner-circle'
          style={{
            "--value": gameStatistics.gameCompletion.slice(0,-1)
          }}
        >
        </div>
      </div>

    </div>
  )
}

export default Statistics