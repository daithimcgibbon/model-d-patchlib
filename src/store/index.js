import { createStore, combineReducers, applyMiddleware } from 'redux'
import { controllers } from './reducers'
import stateData from './initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['patchlib-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({controllers}),
        (localStorage['patchlib-store']) ?
            JSON.parse(localStorage['patchlib-store']) :
            stateData
    )

export default storeFactory
