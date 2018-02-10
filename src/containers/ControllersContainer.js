import { connect } from 'react-redux'
import Controllers from '../components/Controllers'
import { setTune, setGlide, setModMix, setModDepth, setLfoRate } from '../actions/controllersActions'

const ControllersContainer = connect(
  state =>
    ({
      controllers: state.controllers
    }),
  dispatch =>
    ({
      onSetTune(tune) {
        dispatch(setTune(tune))
      },
      onSetGlide(glide) {
        dispatch(setGlide(glide))
      },
      onSetModMix(modMix) {
        dispatch(setModMix(modMix))
      },
      onSetModDepth(modDepth) {
        dispatch(setModDepth(modDepth))
      },
      onSetLfoRate(lfoRate) {
        dispatch(setLfoRate(lfoRate))
      }
    })
)(Controllers)

export default ControllersContainer
