const BugStats = ({bugs}) =>{
    const closedCount = bugs.reduce((counter, bug) => {
                if(bug.isClosed === true){
                    counter = counter +1 ; 
                } 
            return counter;
            },0
        );  
    return(
    <section className="stats">
        <span className="closed">{closedCount}</span>
        <span> / </span>
        <span>{bugs.length}</span>
    </section>
    )
};

export default BugStats;