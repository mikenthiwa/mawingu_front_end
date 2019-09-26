import React, {Component} from 'react';
import { connect } from 'react-redux'
import Auth from '../../components/auth/login';
import { login } from '../../redux/actions/loginAction';
import './home.scss';


class App extends Component {
  render() {
    const { login, loginReducer } = this.props;
    return (
      <div className="app-container">
        <div className="homeLoginContainer">
          <Auth login={login} loginReducer={loginReducer}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  login
});

const mapStateToProps = ({loginReducer}) => ({
  loginReducer
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
