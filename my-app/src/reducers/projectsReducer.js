function projectsReducer(currentState = [], action) {
    if (action.type === "PROJECT_ADD_NEW") {
      return [...currentState, action.payload];
    }
    return currentState;
  }
  
  export default projectsReducer;