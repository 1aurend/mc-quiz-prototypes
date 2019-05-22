import React from 'react'

function QuizSelector(props) {

return (
  <div id='selector'>
    <select onChange={props.onChange}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
    </select>
  </div>
)

} //eventually other options can go in here

export default QuizSelector
