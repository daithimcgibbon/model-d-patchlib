import React from 'react'

export default (props) => {

  let _tune
  const name = props.controllers.name
  const { tune, glide, modMix, modDepth, lfoRate } = props.controllers
  const { onSetControllersTune, onSetControllersGlide, onSetControllersModMix, onSetControllersModDepth, onSetControllersLfoRate } = props

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <input defaultValue={tune} ref={(input) => _tune = input} />
        <button id='#setTuneButton' onClick={() => onSetControllersTune(parseInt(_tune.value))}>Set Tune</button>
      </div>
    </div>
  )
  
}
