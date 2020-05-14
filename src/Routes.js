import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './common/routerConstants'
import Dictionary from './pages/Dictionary'

const Routes = () => (
  <>
    <Switch>
      <Route exact path={routes.root} component={Dictionary} />
      <Route path={routes.notFound} component={() => <h1>Not Found</h1>} />
    </Switch>
  </>
)

export default Routes
