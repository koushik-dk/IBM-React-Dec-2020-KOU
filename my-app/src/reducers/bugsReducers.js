let initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'BUG_ADD_NEW'){
        const newState = [ ...currentState, action.payload ];
        newState.sort( (a,b) => {return (a.name < b.name) ? -1 : 1} );
        return newState;
    }
    if (action.type === 'BUG_REPLACE'){
        const bugToReplace = action.payload,
             newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        return newState;
    }
    if (action.type === 'BUG_REMOVE'){
        const bugToRemove = action.payload,
             newState = currentState.filter(bug => bug.id != bugToRemove.id );
        return newState;
    }
    if (action.type === 'BUG_REMOVE_CLOSED'){
    //    const newState = action.payload;
        const bugListToRemove = action.payload,
            newState = currentState.filter(bug => !bugListToRemove.find(b => b.id === bug.id)); 
        return newState;
    }
    if (action.type === 'BUG_INIT'){
        return action.payload;
      }
    return currentState;
}

export default bugsReducer;