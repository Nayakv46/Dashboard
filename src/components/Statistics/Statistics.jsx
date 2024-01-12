import { useEffect, useState } from 'react';

import './statistics.scss';

import { FaChevronUp } from 'react-icons/fa6';

import { GamesData } from '../../games';

const Statistics = ({openedItem}) => {

  const [toggleView, setToggleView] = useState(true);

  const [gameStatistics, setGameStatistics] = useState(GamesData[openedItem].stats);

  useEffect(() => {

    setGameStatistics(GamesData[openedItem].stats);

  }, [openedItem])


  return (
    <div
      className={`statistics__wrapper ${toggleView === true ? "statistics__wrapper--open" : ""}
      `}
      >

      <div className='statistics__switch'
        onClick={() => {
        setToggleView(!toggleView)
        }}
      >
        <FaChevronUp className="statistics__switch-icon" />
      </div>

      <div className='statistics__box'>
        <span className='statistics__box-title'>Total Playtime</span>

        <div className='statistics__timePlayed'
          style={{
            "--hoursPlayed": parseInt(gameStatistics.timePlayed),
            "--minutesPlayed": parseInt(gameStatistics.timePlayed.slice(-6,-3))}
          }
        >
        </div>
      </div>

      <div className='statistics__box'>
        <span className='statistics__box-title'>Game Completion</span>

        <div className="circle-border"
          style={{
            "--angle": parseInt(gameStatistics.gameCompletion)*3.6+"deg"
          }}
        >
          <div className='inner-circle inner-circle--percentage'
            style={{
              "--percentage": parseInt(gameStatistics.gameCompletion)
            }}
          >
          </div>
        </div>
      </div>

      <div className='statistics__box'>
        <span className='statistics__box-title'>Achievements</span>

        <div className='circle-border'
          style={{
            "--angle": ((gameStatistics.achievementsCompleted/gameStatistics.achievementsAll)*360)+"deg"
          }}
        >
            <div className='inner-circle inner-circle--fraction'
              style={{
                "--numerator": gameStatistics.achievementsCompleted,
                "--denominator": gameStatistics.achievementsAll
              }}
            >

            </div>
        </div>
      </div>

    </div>
  )
}

export default Statistics