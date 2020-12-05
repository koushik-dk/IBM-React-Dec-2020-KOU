import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import * as bugActionCreators from "./actions";


const BugTracker = ({ bugs, toggle, remove, removeClosed, addNew, projects }) => (
  <Fragment>
    <h3>Bug Tracker</h3>
    <hr />
    <BugStats bugs={bugs} />
    <BugSort />
    <BugEdit {...{bugs,projects,addNew}} />
    <BugList {...{ bugs, toggle, remove, removeClosed }} />
  </Fragment>
);

function mapStateToProps(rootStore){
  const bugs = rootStore.bugState;
  const projects = rootStore.projectState;
  return {bugs : bugs, projects : projects};
}

function mapDispatchToProps(dispatch){
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch)
  return bugActionDispatchers
}


export default connect (mapStateToProps, mapDispatchToProps) (BugTracker);