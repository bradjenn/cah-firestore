import { withHandlers } from 'recompose'

export default withHandlers({
  handleOnSubmit: ({ history, login }) => formData => {
    return login(formData)
      .then(goToRoot)
      .catch(handleErrors)

    function goToRoot() {
      history.push('/')
    }

    function handleErrors(error) {
      console.log(error)
    }
  },
})
