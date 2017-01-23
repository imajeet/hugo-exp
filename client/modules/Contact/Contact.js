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
              <span>D&rsquo;</span>uring my Junior year of college, I decided I was going to become a Web Application Developer
        and soon after college, I began searching for career opportunities that would let me acquire skills that could one
        day summate to that of a Full Stack JavaScript Developer. I worked at a digital agency, SapientNitro, where I was
        responsible for creating modular - reusable web components using just HTML5, CSS3, & JavaScript. We were only allowed
        to use jQuery & GreenSock’s TweenMax animation library, as the client whom project team I was on wanted very little
        third-party libraries. I really learned a lot about working in a fast pace environment and how to organize my time
        to finish my contributions to meet deadlines as well as the strengths JavaScript provided within a browser environment.
      </p>
            <p>
              Before being granted the opportunity to be a Front End developer at SapientNitro, I had completed a freelance project for a client
        I met at Starbucks. The project was a landing page built with HTML5, CSS3, JavaScript, jQuery, & Bootstrap and it had to also allow for clients to connect with the owner of the company through email; so I built a web server with NodeJS to handle sending emails directly from the landing page. I then became more interested in Back End development with NodeJS and thus became the prologue towards becoming more Full Stack Savvy.
      </p>
            <p>
              Recently, I was given the opportunity to work at my first start up, Callpal App, LLC where they had developed an app Callpal
        App; purposed to allow users to make calls, app-to-app, or app-to-landline, for free. During my role there as a Software-Engineer,
        I was tasked with various back-end systems that needed to: migrate data from MySQL to Couchbase stores, restructure
        data for in house analytics and for B2B teams. The RESTful APIs were built on top of NodeJS and there I learned to
        work in an Agile environment where I had to explain my progress in detail to my executives and team members every
        step of the way during and after the completion of tasks posted and managed by JIRA.
      </p>
            <p>
              As you can see, aside from a few personal projects and collegiate level programming workload, I have obtained professional
        experience in both front-end and back-end development. Everyday, I aim to become a better software developer and
        am always looking for excuses to learn new philosophies in software development & design. Most recently, I have become
        especially interested in distributive systems, artificial intelligence (machine learning), and how to leverage technology
        to add value to current markets.
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
