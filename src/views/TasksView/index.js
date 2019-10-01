import React, {Component} from 'react';
import { connect } from 'react-redux'
import Task from '../../components/task';
import { fetchAssignedTasks, nextPreviousPage } from '../../redux/actions/tasksAction'
import mawinguIcon from '../../assets/images/mawingu.png';
import './taskView.scss';


class TaskView extends Component {

  renderHeaderLinks = (linkName) => (
    <div>
      <span>{linkName}</span>
    </div>
  );

  render() {
    const { myTasks, assignedTasks, pages, history } = this.props;
    return (
      <div className='task-view-container'>
        <div className='task-view-header'>
          <div className='logo'>
            <img className='mawinguLogo' alt='' src={mawinguIcon}/>
          </div>
          <div className='nav-links'>
            {this.renderHeaderLinks('Customer')}
            {this.renderHeaderLinks('Tasks')}
            {this.renderHeaderLinks('Personnel')}
            {this.renderHeaderLinks('Reports')}
          </div>
        </div>
        <div className="task-view-body">
          <Task
            fetchAssignedTask={myTasks}
            assignedTasks={assignedTasks}
            pages={pages}
            history={history}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  myTasks: fetchAssignedTasks,
  pages: nextPreviousPage,
});

const mapStateToProps = ({ assignedTasks }) => ({
  assignedTasks
});

export default connect(mapStateToProps, mapDispatchToProps())(TaskView);
