import React from 'react'


function ChoicesBar(props) {

  return (
    <>
      <button className='choicebutton' onClick={props.onClick}>A</button>
      <button className='choicebutton'>B</button>
      <button className='choicebutton'>C</button>
      <button className='choicebutton'>D</button>
      <button className='choicebutton'>E</button>
    </>
  )

}

export default ChoicesBar
