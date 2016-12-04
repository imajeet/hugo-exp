import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';

import {
  enableSubmit as enableSubmitAction,
  disableSubmit as disableSubmitAction,
  submitForm as submitFormAction,
} from './ContactActions';

import { getLeaveAnimation, getSubmitStatus } from './ContactReducer';

import {
  // FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
  // FormsySelect, FormsyTime, FormsyToggle, FormsyAutoComplete,
  FormsyText,
} from 'formsy-material-ui/lib';

import an from '../../assets/animate.css';
import styles from './Contact.css';

const errorMessages = {
  nameError: 'Your name is required',
  emailError: 'Your email is required',
  phoneError: 'Your phone number is required',
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.enableSubmit = this.enableSubmit.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
  }

  enableSubmit() {
    this.props.dispatch(enableSubmitAction());
  }

  disableSubmit() {
    this.props.dispatch(disableSubmitAction());
  }

  submitForm(data) {
    this.props.dispatch(submitFormAction(data));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    return (
      <div className={`${styles['contact-container']} ${an.animated} ${an.fadeInLeft} ${this.props.leaveAnimation}`}>
        <div className={styles.content}>
          <h1>Contact</h1>
          <div className={styles['contact-excerpt']}>
            <p>
              <span>I&rsquo;</span> am always looking to connect with individuals who are seeking a Freelance Fullstack Developer.
            </p>
          </div>

          <div className={`${styles['contact-form']}`}>
            <Formsy.Form
              onValid={this.enableSubmit}
              onInvalid={this.disableSubmit}
              onValidSubmit={this.submitForm}
              onInvalidSubmit={this.notifyFormError}
            >
              <FormsyText
                name="name"
                validations="isWords"
                validationError={errorMessages.nameError}
                required
                hintText="What is your name?"
                floatingLabelText="Name"
              />
              <FormsyText
                name="email"
                validations="isEmail"
                validationError={errorMessages.emailError}
                required
                hintText="What is your email?"
                floatingLabelText="Email"
              />
              <FormsyText
                name="phone"
                validations="isNumeric"
                validationError={errorMessages.phoneError}
                required
                hintText="What is your phone number?"
                floatingLabelText="Phone"
              />
              <br />
              <FormsyText
                name="inquiry"
                required
                multiLine
                floatingLabelFixed
                floatingLabelText="Describe the scope of your inquiry"
                rows={2}
              />
              <RaisedButton
                type="submit"
                label="Connect"
                disabled={!this.props.canSubmit}
              />
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  leaveAnimation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    leaveAnimation: getLeaveAnimation(state),
    canSubmit: getSubmitStatus(state),
  };
};

export default connect(mapStateToProps)(Contact);
