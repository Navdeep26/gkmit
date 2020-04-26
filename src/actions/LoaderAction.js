class LoaderAction {
  static showLoader(data){
    return {
      type: "SHOW_LOADER",
      payload: data
    }
  } 
  static hideLoader(data){
    return {
      type: "HIDE_LOADER",
      payload: data
    }
  } 
}
export default LoaderAction;
