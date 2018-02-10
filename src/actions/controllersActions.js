import C from '../constants/controllersConstants'

export const setTune = (tune=0) =>
  ({
    type: C.SET_TUNE,
    tune: tune
  })

export const setGlide = (glide=0) =>
  ({
    type: C.SET_GLIDE,
    glide: glide
  })

export const setModMix = (modMix=0) =>
  ({
    type: C.SET_MOD_MIX,
    modMix: modMix
  })

export const setModDepth = (modDepth=0) =>
  ({
    type: C.SET_MOD_DEPTH,
    modDepth: modDepth
  })

export const setLfoRate = (lfoRate=0) =>
  ({
    type: C.SET_LFO_RATE,
    lfoRate: lfoRate
  })
