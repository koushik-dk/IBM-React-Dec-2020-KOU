export function remove(bugToRemove){
    const removedBug = bugToRemove;
    const action = {type : 'BUG_REMOVE', payload : removedBug};
    return action;
}