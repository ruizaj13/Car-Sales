//action constant
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

//action creator function
//use this when dispatching 
export const addFeature = (newFeature) => {
    return({type: ADD_FEATURE, payload:newFeature})
}

export const removeFeature = (feature) => {
    return({ type: REMOVE_FEATURE, payload:feature})
}