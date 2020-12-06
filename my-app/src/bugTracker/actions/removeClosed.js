export function removeClosed(){
    return function(dispatch, getState){
        const bugList = getState().bugState;
        const bugsToRemove = bugList.filter(bug => bug.isClosed === true);
        const action = {type : 'BUG_REMOVE_CLOSED', payload : bugsToRemove};
        dispatch(action);
    }
}