import React from 'react'
import Knob from 'react-canvas-knob'
import SynthKnob from './SynthKnob'

export default (props) => {

  const name = props.controllers.name
  const { tune, glide, modMix, modDepth, lfoRate } = props.controllers
  const { onSetControllersTune, onSetControllersGlide, onSetControllersModMix, onSetControllersModDepth, onSetControllersLfoRate } = props

  return (
    <div className="container border border-dark rounded p-2">
      <div className="row">
        <div className="col-1 text-center">

        </div>
        <div className="col-2 text-center">
          <SynthKnob value={tune} onChangeValue={onSetControllersTune} />
        </div>
        <div className="col-2 text-center ">
          <SynthKnob value={glide} onChangeValue={onSetControllersGlide} />
        </div>
        <div className="col-2 text-center ">
          <SynthKnob value={modMix} onChangeValue={onSetControllersModMix} />
        </div>
        <div className="col-2 text-center">
          <SynthKnob value={modDepth} onChangeValue={onSetControllersModDepth} />
        </div>
        <div className="col-2 text-center">
          <SynthKnob value={lfoRate} onChangeValue={onSetControllersLfoRate} />
        </div>
        <div className="col-1 text-center">

        </div>
      </div>
      <div className="row">
        <div className="col-1 text-center">

        </div>
        <div className="col-2 text-center ">
          <p className="small">Tune</p>
        </div>
        <div className="col-2 text-center ">
          <p className="small">Glide</p>
        </div>
        <div className="col-2 text-center ">
          <p className="small">Mod Mix</p>
        </div>
        <div className="col-2 text-center ">
          <p className="small">Mod Depth</p>
        </div>
        <div className="col-2 text-center ">
          <p className="small">LFO Rate</p>
        </div>
        <div className="col-1 text-center">

        </div>
      </div>
    </div>
  )

}
