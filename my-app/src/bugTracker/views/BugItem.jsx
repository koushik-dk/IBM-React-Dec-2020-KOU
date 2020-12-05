const BugItem = ({bug,toggle,remove}) => {
    return(
        <li >
            <span className={"bugname " + (bug.isClosed ? 'closed' : '')}
                  onClick={ () => toggle(bug) }
                   >
                    {bug.name}
                </span>
                <span> - </span>
                <span>[{bug.projectName}]</span>
                <div className="datetime">{bug.createdAt.toString()}</div>
                <input type="button" value="Remove"  onClick={ () => remove(bug) } />
        </li>
    )
};

export default BugItem;