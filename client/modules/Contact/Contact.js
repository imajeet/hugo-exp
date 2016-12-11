const isBrowser = typeof window !== 'undefined';
import React, { PropTypes, Component } from 'react';
const SweetAlert = isBrowser ? require('sweetalert-react').default : undefined; // eslint-disable-line
if (isBrowser) { require('sweetalert/dist/sweetalert.css'); } // eslint-disable-line 
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { submitFormRequest, hideSwal } from './ContactActions';
import { getLeaveAnimation, getSwal } from './ContactReducer';

import an from '../../assets/animate.css';
import styles from './Contact.css';

const errorMessages = {
  nameError: 'Your name is required',
  emailError: 'Your email is required',
  phoneError: 'Your phone number is required',
};
const formsyStyles = { fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' } };
class Contact extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
  }

  submitForm(data) {
    this.props.dispatch(submitFormRequest(data));

    this.nameText.setState({ value: '' });
    this.emailText.setState({ value: '' });
    this.phoneText.setState({ value: '' });
    this.inquiryText.setState({ value: '' });
  }

  notifyFormError(data) {
    console.log('Error submitting form: ', data);
  }

  render() {
    return (
      <div className={`${styles['contact-container']} ${an.animated} ${an.slideInLeft} ${this.props.leaveAnimation}`}>
        <div className={`${styles.content} ${an.animated} ${an.slideInLeft} ${this.props.leaveAnimation}`}>
          <h1>Contact</h1>
          <div className={styles['contact-excerpt']}>
            <p>
              <span>I&rsquo;</span> am always looking forward to connecting with individuals who require consultation from a Full Stack Developer or simply anyone looking to talk code to further their understanding.
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
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.nameText = node}
                validations="isWords"
                validationError={errorMessages.nameError}
                required
                hintText="What is your name?"
                floatingLabelText="Name"
              />
              <FormsyText
                name="email"
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.emailText = node}
                validations="isEmail"
                validationError={errorMessages.emailError}
                required
                hintText="What is your email?"
                floatingLabelText="Email"
              />
              <FormsyText
                name="phone"
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.phoneText = node}
                validations="isNumeric"
                validationError={errorMessages.phoneError}
                required
                hintText="What is your phone number?"
                floatingLabelText="Phone"
              />
              <br />
              <FormsyText
                name="inquiry"
                hintText="...the scope of your inquiry"
                floatingLabelText="Describe"
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.inquiryText = node}
                required
                multiLine
                rows={2}
              /><br />
              <RaisedButton
                fullWidth
                type="submit"
                label="Connect"
              />
            </Formsy.Form>
            {
              isBrowser ? <SweetAlert
                show={this.props.showSwal}
                type="success"
                title="Awesome!"
                text="I look forward to connecting with you soon!"
                onConfirm={() => this.props.dispatch(hideSwal())}
              /> : 'Loading'
            }
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  leaveAnimation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  showSwal: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    leaveAnimation: getLeaveAnimation(state),
    showSwal: getSwal(state),
  };
};

export default connect(mapStateToProps)(Contact);
