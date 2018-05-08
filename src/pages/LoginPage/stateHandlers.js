import { withStateHandlers } from 'recompose'

export default withStateHandlers(
  {
    formState: {},
  },
  {
    handleOnChange: (state, props) => (name, value) => {
      const newFormState = { ...state.formState, [name]: value }

      return {
        formState: { ...newFormState },
      }
    },
  }
)
