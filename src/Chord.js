import React, { useEffect, useRef, useState } from 'react'
import Vex from 'vexflow'


function Chord(props) {

  const container = useRef(document.createElement('container'))
  const [loading, done] = useState(true)

console.log(props.octaves);
  let formattedNotes = []
  let accidentals = []
  for (var i = 0; i < props.notes.length; i++) {
    formattedNotes.push(props.notes[i] + '/' + props.octaves[i])
    if (props.notes[i].length > 1) {
      accidentals.push(props.notes[i].slice(1))
    }
  }


  useEffect(() => {

    if (container.current.firstChild) {
      container.current.removeChild(container.current.firstChild)
    }

    let VF = Vex.Flow

    let renderer = new VF.Renderer(container.current, VF.Renderer.Backends.SVG);

    renderer.resize('1000px', '500px')

    let context = renderer.getContext()

    let stave = new VF.Stave(450, 200, 200)

    stave.addClef("treble").addTimeSignature("4/4")

    stave.setContext(context).draw()


    if (props.notes.length > 0) {

      let notes = [new VF.StaveNote({clef: "treble", keys: formattedNotes, duration: "w", align_center: true})]

      if (accidentals.length > 0) {
        for (var i = 0; i < accidentals.length; i++) {
           notes = [notes[0].addAccidental(i, new VF.Accidental(accidentals[i]))]
        }
      }

      let voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      voice.addTickables(notes);

      let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);

      voice.draw(context, stave);
  }



    done(false)

  }, [props.notes])


  return (
    <div ref={container} style={{
      display: "block",
      alignItems: 'center',
      padding: 10,
      width: '100%',
      height: '100%',
  }}>
  </div>
)

}

export default Chord
