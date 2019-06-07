import React, { useEffect, useRef, useState } from 'react'
import Vex from 'vexflow'


function Chord(props) {

  const container = useRef(document.createElement('container'))
  const [loading, done] = useState(true)


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

      let notes = [new VF.StaveNote({clef: "treble", keys: props.notes, duration: "w", align_center: true})]

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
