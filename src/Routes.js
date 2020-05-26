import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './common/routerConstants';

const Routes = () => (
    <>
        <Switch>
            <Route
                path={routes.notFound}
                component={() => <h1>Not Found</h1>}
            />
        </Switch>
    </>
);

export default Routes;
