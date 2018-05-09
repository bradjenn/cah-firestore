import React from 'react'

const HomePage = props => {
  console.log(props.user.email)
  return <div>hello {props.user.email}</div>
}

export default HomePage
