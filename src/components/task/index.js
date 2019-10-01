import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './task.scss'

const tableHead = [
  '#','First Name', 'Last Name', 'Phone',
  'Registration', 'Status', 'Created', 'Action'
];
class Task extends Component {

  state = {
    page: 1
  }

  componentDidMount() {
    const { fetchAssignedTask, history } = this.props;
    fetchAssignedTask(this.state.page,  () => history.push(`/tasks/assigned?page=${1}`))
  }

  renderTableHead = () => {
    return tableHead.map((title, index) => (
      <th key={index}>{title}</th>
    ))
  };

  renderPageOption = () => {
    const {assignedTasks: {tasks: {totalTasks, page}}} = this.props;
    const pages = Math.floor(totalTasks?totalTasks/5:0);
    const reminder = totalTasks % 5;
    const options = Array(5).fill(null)
    return options.map((option,index)=> {
      return (<option key={index} value={index+1}>{page ? page: ''}</option>)
    })
  };


  renderTableData = () => {
    const {assignedTasks: {tasks: {tasks: myTask}}} = this.props;
    return myTask && myTask.map((task, index) => {
      const { task_id, customer_first_name, customer_last_name, customer_phone, registration, status, assigned } = task;
      const td = (tableCell) => (
        <td>{tableCell}</td>
      );
      return (
      <tr key={index}>
        {td(task_id)}
        {td(customer_first_name)}
        {td(customer_last_name)}
        {td(customer_phone)}
        {td(registration)}
        {td(status)}
        {td(assigned)}
        {td(status)}
      </tr>
    )}
    );
  };

  handleChangePage = (direction) => {
    const {assignedTasks: {tasks: {page: pageNumber}}} = this.props;
    const {pages, history} = this.props;
    if(direction === 'right') {
      return pages((pageNumber + 1), () => history.push(`/tasks/assigned?page=${(pageNumber + 1)}`))
    }
    if(direction === 'left') {
      return pages((pageNumber - 1), () => history.push(`/tasks/assigned?page=${(pageNumber - 1)}`))
    }
  };

  renderPaginationButton = (iconType, direction) => (
    <div>
      <button className="btn btn-rounded ml-2" type="submit" onClick={() => this.handleChangePage(direction)}>
        <FontAwesomeIcon icon={ iconType } />
      </button>
    </div>
  );

  handleSelectOnchange = (event) => {
    const {target: {value}} = event;
    this.setState({page: value});
  };

  renderPagination = () => {
    const {assignedTasks: {tasks: {totalTasks}}} = this.props;
    const pages = Math.floor(totalTasks ? totalTasks/5:0);
    return (
      <div className="pagination-container">
        <div>
          <small>Page</small>
        </div>
        <div>
          <select className="mr-2 ml-2" onChange={this.handleSelectOnchange}>
            {this.renderPageOption()}
          </select>
        </div>
        <div>
          of {pages}
        </div>
        {this.renderPaginationButton(faChevronLeft, 'left')}
        {this.renderPaginationButton(faChevronRight, 'right')}
      </div>
    )
  };

  render() {
    return (
      <Fragment>
        <div className='task-table-container'>
          <div className='table-header'>
            <span>Tasks</span>
          </div>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  {this.renderTableHead()}
                </tr>
                {this.renderTableData()}
              </tbody>
            </table>
          </div>
        </div>
        <div className='table-footer'>
          <div className='pagination-footer'>
            {this.renderPagination()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Task;
