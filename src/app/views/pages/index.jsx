import React, { Fragment } from 'react'

import { User } from '../components/User' 

export default ({ users }) => {  
  return (
    <Fragment>
      <h1>Beeleads2</h1>

      <ul>
        {users.map (user => <User key={ user.id } { ...user } />)}
      </ul>
    </Fragment>
  )
}