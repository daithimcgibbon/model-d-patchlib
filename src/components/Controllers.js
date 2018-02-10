import React from 'react'
import SynthKnob from './SynthKnob'

export default (props) => {

  const name = props.controllers.name
  const { tune, glide, modMix, modDepth, lfoRate } = props.controllers
  const { onSetControllersTune, onSetControllersGlide, onSetControllersModMix, onSetControllersModDepth, onSetControllersLfoRate } = props

  return (
    <div className="container border border-dark rounded p-2">

      <div className="row p-2">
        <div className="col-4 text-center" />
        <div className="col-4 text-center"><SynthKnob value={tune} onChangeValue={onSetControllersTune} /></div>
        <div className="col-4 text-center" />
      </div>
      <div className="row p-2">
        <div className="col-4 text-center" />
        <div className="col-4 text-center small">TUNE</div>
        <div className="col-4 text-center" />
      </div>

      <div className="row p-2">
        <div className="col-4 text-center"><SynthKnob value={glide} onChangeValue={onSetControllersGlide} /></div>
        <div className="col-4 text-center"></div>
        <div className="col-4 text-center"><SynthKnob value={modMix} onChangeValue={onSetControllersModMix} /></div>
      </div>
      <div className="row p-2">
        <div className="col-4 text-center small">GLIDE</div>
        <div className="col-4 text-center" />
        <div className="col-4 text-center small">MOD MIX</div>
      </div>

      <div className="row p-2">
        <div className="col-4 text-center"><SynthKnob value={modDepth} onChangeValue={onSetControllersModDepth} /></div>
        <div className="col-4 text-center"></div>
        <div className="col-4 text-center"><SynthKnob value={lfoRate} onChangeValue={onSetControllersLfoRate} /></div>
      </div>
      <div className="row p-2">
        <div className="col-4 text-center small">MOD DEPTH</div>
        <div className="col-4 text-center" />
        <div className="col-4 text-center small">LFO RATE</div>
      </div>

      <div className="row p-2">
        <div className="col-3 text-center" />
        <div className="col-6 text-center text-uppercase">{name}</div>
        <div className="col-3 text-center" />
      </div>

    </div>
  )

}
