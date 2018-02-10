import C from '../constants/ControllersConstants'

export const setControllersTune = (tune=0) =>
  ({
    type: C.SET_TUNE,
    tune: tune
  })

export const setControllersGlide = (glide=0) =>
  ({
    type: C.SET_GLIDE,
    glide: glide
  })

export const setControllersModMix = (modMix=0) =>
  ({
    type: C.SET_MOD_MIX,
    modMix: modMix
  })

export const setControllersModDepth = (modDepth=0) =>
  ({
    type: C.SET_MOD_DEPTH,
    modDepth: modDepth
  })

export const setControllersLfoRate = (lfoRate=0) =>
  ({
    type: C.SET_LFO_RATE,
    lfoRate: lfoRate
  })
