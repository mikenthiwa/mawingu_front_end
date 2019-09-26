import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import _ from 'lodash';
import mawinguImage from '../../assets/images/mawingu.png';
import 'react-toastify/dist/ReactToastify.css';
import './login.scss';

class Login extends Component {
  state = {
    phone: '',
    password: ''
  };

  notify = () => toast.success('Login Successfully');



  renderFormInput = (awesomeIcon, name, onChangeHandler) => {
    const {loginReducer: {error: {error}}} = this.props;
    return (
      <div className="login-form-input-container">
        <div className='login-form-input'>
          <div className="input-icon">
            <FontAwesomeIcon icon={awesomeIcon} color="white"/>
          </div>
          <div className="form-input">
            <input
              className={`${error ? 'input-error': ''}`}
              type="text"
              name={name}
              onChange={onChangeHandler}/>
          </div>
        </div>
        <div className={`${error ? error[name]&& 'login-form-error-container': 'no-error'}` }>
          <small>{error ? error[name]&& `${_.upperFirst(name)} is required`: ''}</small>
        </div>
      </div>
    )
  };

  renderFormHeader = () => (
    <Fragment>
      <div className="mawingu-image">
        <img src={mawinguImage} alt="" className="mawinguImage"/>
      </div>
      <div className="header-label">
        <span>Admin Login</span>
      </div>
    </Fragment>
  );

  renderFormButton = (submitHandler) => (
    <div className="form-input">
      <input
        type="submit"
        value="Login"
        onClick={submitHandler}
      />
    </div>
  );

  handleOnchange = (event) => {
    const {target: { name, value }} = event;
    this.setState({
      [name]: value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login(this.state, () => this.notify());
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header">
          {this.renderFormHeader()}
        </div>
        <div className='login-body'>
          {this.renderFormInput(faPhoneAlt, 'phone', this.handleOnchange)}
          {this.renderFormInput(faLock, 'password', this.handleOnchange)}
          {this.renderFormButton(this.handleSubmit)}
        </div>
      </div>
    );
  }
}

export default Login;
