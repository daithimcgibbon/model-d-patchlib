import C from '../constants/controllersConstants'

export const controllers = (state={}, action) => {
  switch(action.type) {
    case C.SET_TUNE:
      return {
        ...state,
        tune: action.tune
      }
    case C.SET_GLIDE:
      return {
        ...state,
        glide: action.glide
      }
    case C.SET_MOD_MIX:
      return {
        ...state,
        modMix: action.modMix
      }
    case C.SET_MOD_DEPTH:
      return {
        ...state,
        modDepth: action.modDepth
      }
    case C.SET_LFO_RATE:
      return {
        ...state,
        lfoRate: action.lfoRate
      }
    default:
      return state
  }
}
