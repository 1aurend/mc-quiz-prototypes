import React from 'react';


function Choice(props) {

  return (
    <button className='choicebutton' onClick={props.onClick}>{props.choice}</button>
  )

}

export default Choice
