import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/App'
import { UserProvider } from './setup/context/user.context'

ReactDOM.render(    <UserProvider><App /></UserProvider>, document.querySelector("#root"))