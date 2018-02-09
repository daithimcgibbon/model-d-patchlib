import React from 'react'
import ControllersContainer from './containers/ControllersContainer'
import PatchSummaryContainer from './containers/PatchSummaryContainer'

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <ControllersContainer />
      </div>
    </div>
    <div className="row">
      <PatchSummaryContainer />
    </div>
  </div>
)
