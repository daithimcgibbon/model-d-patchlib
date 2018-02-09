import React from 'react'

const PatchSummary = ({stateData}) => (
  <div className='container'>
  <h4>Controllers</h4>
  <ul>
    <li><b>Tune: </b>{stateData.controllers.tune}</li>
    <li><b>Glide: </b>{stateData.controllers.glide}</li>
    <li><b>Mod Mix: </b>{stateData.controllers.modMix}</li>
    <li><b>Mod Depth: </b>{stateData.controllers.modDepth}</li>
    <li><b>LFO Rate: </b>{stateData.controllers.lfoRate}</li>
  </ul>
  </div>
)

export default PatchSummary
