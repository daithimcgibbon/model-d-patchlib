import { connect } from 'react-redux'
import Controllers from '../components/Controllers'
import { setControllersTune, setControllersGlide, setControllersModMix, setControllersModDepth, setControllersLfoRate } from '../actions/controllersActions'

const ControllersContainer = connect(
  state =>
    ({
      controllers: state.controllers
    }),
  dispatch =>
    ({
      onSetControllersTune(tune) {
        dispatch(setControllersTune(tune))
      },
      onSetControllersGlide(glide) {
        dispatch(setControllersGlide(glide))
      },
      onSetControllersModMix(modMix) {
        dispatch(setControllersModMix(modMix))
      },
      onSetControllersModDepth(modDepth) {
        dispatch(setControllersModDepth(modDepth))
      },
      onSetControllersLfoRate(lfoRate) {
        dispatch(setControllersLfoRate(lfoRate))
      }
    })
)(Controllers)

export default ControllersContainer
