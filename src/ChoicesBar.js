import React from 'react'


function ChoicesBar(props) {

  console.log(props);

  return (
    <>
      <button className='choicebutton' onClick={props.onClick}>{props.choices[0]}</button>
      <button className='choicebutton'>B</button>
      <button className='choicebutton'>C</button>
      <button className='choicebutton'>D</button>
      <button className='choicebutton'>E</button>
    </>
  )

}

export default ChoicesBar
