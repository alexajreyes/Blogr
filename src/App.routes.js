import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HOME } from 'config/path'

const Home = lazy(() => import('view/Home'))

function AppRoutes() {
    return (
        <Suspense fallback={() => <p>Cargarndo...</p>}>
            <Switch>
                <Route exact path={HOME} component={Home}></Route>
                <Route component={() => <h1>Ocurrio algo Mal</h1>}></Route>
            </Switch>
        </Suspense>
    )
}
export default React.memo(AppRoutes)
