let currentBugId = 0;

export function addNew(bugName, projectName){
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        projectName : projectName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'BUG_ADD_NEW', payload : newBug }
    return action;
}