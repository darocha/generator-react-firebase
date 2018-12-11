import React from 'react'
import PropTypes from 'prop-types'<% if (includeRedux) { %>
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'<% } %><% if (!includeRedux) { %>
import TextField from '@material-ui/core/TextField'<% } %>
import Button from '@material-ui/core/Button'<% if (includeRedux) { %>
import { required, validateEmail } from 'utils/form'<% } %>

<% if (includeRedux) { %>const SignupForm = ({ pristine, submitting, handleSubmit, classes }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <Field
      name="username"
      component={TextField}
      autoComplete="username"
      label="Username"
      validate={required}
    />
    <Field
      name="email"
      component={TextField}
      autoComplete="email"
      label="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={TextField}
      autoComplete="current-password"
      label="Password"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Sign Up'}
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default SignupForm<% } %><% if (!includeRedux) { %>const SignupForm = ({ classes, handleSubmit, handleEmailChange, handlePasswordChange }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <div>
      <TextField label='Username' />
    </div>
    <div>
      <TextField
        hintText='someone@email.com'
        label='Email'
        onChange={handleEmailChange}
      />
    </div>
    <div>
      <TextField
        label='Password'
        type="password"
        onChange={handlePasswordChange}
      />
    </div>
    <div className={classes.submit}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        onClick={handleSubmit}>
        Login
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleEmailChange: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  handlePasswordChange: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  handleSubmit: PropTypes.func.isRequired // from enhancer (withHandlers - calls onSubmit)
}

export default SignupForm<% } %>
