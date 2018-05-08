import { withHandlers } from 'recompose'

export default withHandlers({
  handleOnSubmit: ({ history, register }) => formData => {
    return register(formData)
      .then(goToLogin)
      .catch(handleErrors)

    function goToLogin() {
      history.push('/login')
    }

    function handleErrors(error) {
      console.log(error)
    }
  },
})
