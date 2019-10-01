import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, withRouter } from 'react-router-dom';

class PrivateRoute extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = ({loginReducer}) => ({
  loginReducer
});

export default connect(mapStateToProps, null)(PrivateRoute)


