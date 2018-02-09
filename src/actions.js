import C from './constants'

export const setControllersTune = (tune=0) =>
  ({
    type: C.SET_CONTROLLERS_TUNE,
    tune: tune
  })

export const setControllersGlide = (glide=0) =>
  ({
    type: C.SET_CONTROLLERS_GLIDE,
    glide: glide
  })

export const setControllersModMix = (modMix=0) =>
  ({
    type: C.SET_CONTROLLERS_MOD_MIX,
    modMix: modMix
  })

export const setControllersModDepth = (modDepth=0) =>
  ({
    type: C.SET_CONTROLLERS_MOD_DEPTH,
    modDepth: modDepth
  })

export const setControllersLfoRate = (lfoRate=0) =>
  ({
    type: C.SET_CONTROLLERS_LFO_RATE,
    lfoRate: lfoRate
  })
