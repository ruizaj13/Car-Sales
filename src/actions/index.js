//action constant
export const ADD_FEATURE = 'ADD_FEATURE';

//action creator function
//use this when dispatching 
export const addFeature = feature => {
    return({type: ADD_FEATURE, payload:feature})
}