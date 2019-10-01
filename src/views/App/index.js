import React, {Component} from 'react';
import { connect } from 'react-redux'
import Auth from '../../components/auth/login';
import TaskPage from '../TasksView';
import { login } from '../../redux/actions/loginAction';

import './home.scss';


class App extends Component {
  render() {
    const { login, loginReducer, history } = this.props;
    const { token } = localStorage;
    return (
      <div className="app-container">
        {!token
          ? <div className="homeLoginContainer">
            <Auth
              login={login}
              loginReducer={loginReducer}
              history={history}
            />
            </div>
          : <div>
             <TaskPage history={history}/>
            </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  login,
});

const mapStateToProps = ({loginReducer}) => ({
  loginReducer
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
