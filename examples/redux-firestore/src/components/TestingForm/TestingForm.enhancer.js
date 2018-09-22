import { compose } from 'redux'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form'
import { formNames } from 'constants'
import { withStyles } from '@material-ui/core/styles'
import styles from './TestingForm.styles'

export default compose(
  // Add handlers as props
  withHandlers({
    onSubmit: props => formValues => {
      console.log('form values:', formValues) // eslint-disable-line no-console
    }
  }),
  // Add form capabilities (including submit and validation handling)
  reduxForm({ form: formNames.testingForm }),
  // Add styles as "classes" prop
  withStyles(styles)
)
