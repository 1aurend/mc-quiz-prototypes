import React from 'react'
import { Link } from 'react-router-dom'
import gosvg from './go.svg'


function Go(props) {

  return (
    <div id='go'>
      <Link to={{
        pathname: '/quiz',
        state: {
          numQs: props.num
        }
      }} style={{height:"3rem"}}><img src={gosvg} alt='go!' style={{height: '3rem'}}></img>
      </Link>
    </div>
  )

}

export default Go
