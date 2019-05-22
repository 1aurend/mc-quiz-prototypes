import React, { useState, useEffect } from 'react'
import data from './quiz-data.js'
import Quiz from './Quiz.js'




function QuizContainer(props) {

  const [theQs, fetchedQs] = useState(null)


  useEffect( () => {
      loadQuiz(parseInt(props.location.state.numQs))
    }, [])


    function loadQuiz(numQs) {

      var Airtable = require('airtable')
      var base = new Airtable({apiKey: 'API_KEY'}).base('appNa5eSSYVJ1Pt5H')
      console.log(numQs);
      let qs = [];

      base('flashcardQs').select({
            maxRecords: numQs,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function(record) {
                qs.push(record.fields)
                console.log('Retrieved', record.fields);
            });

            fetchNextPage();

        }, function done(err) {
            if (err) { console.error(err); return; }
            else {
              console.log('here!');
              console.log(qs);
              fetchedQs(qs)
            }
        })

        }


  if (!theQs) {
    return <h2>Loading...</h2>
  }
  else if (theQs) {
    console.log(theQs);
    return (
      <Quiz data={theQs} />
    )
  }

}

export default QuizContainer
