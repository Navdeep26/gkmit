const initialState = {
  loader: false,
}

const LoaderReducer = (state = initialState, action) => {
  switch(action.type){
    case "SHOW_LOADER" : 
      return  {...state, loader: true}
    case "HIDE_LOADER" : 
      return  {...state, loader: false}  
    default : 
      return state;
  } 
}

export default LoaderReducer;