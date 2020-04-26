const initialStore = {
  allUser : []
}

const UserReducer = (state = initialStore, action) => {
  switch(action.type){
      case "SET_USER" :   
        return {...state, allUser: [...action.payload]};
      case "ADD_USER" : 
        return {...state, allUser: [...state.allUser, action.payload]}; 
      case "DELETE_USER" : 
        const newState = state.allUser.filter(user => user.id !== action.payload);
        return {...state, allUser: [...newState]}; 
      case "UPDATE_USER" : 
        const newUpdatedState = state.allUser.map(user => user.id === action.payload.id ? action.payload : user );
        return {...state, allUser: [...newUpdatedState]};   
      default : 
        return state;
  }
}

export default UserReducer;