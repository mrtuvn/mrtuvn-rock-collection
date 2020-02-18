import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { moduleImport } from 'utils';

const About = moduleImport('About');
const AlbumDetail = moduleImport('AlbumDetail');
const Albums = moduleImport('Albums');
const Home = moduleImport('Home');
const NotFound = moduleImport('NotFound');
const Admin = moduleImport('Admin');
const Search = moduleImport('Search');

interface RouteProps {
    location: any;
}

const Routing = withRouter(({ location }: RouteProps) => {
    const [prevLocation, setPrevLocation] = useState<any | null>(null);

    useEffect(resetWindowScroll, [location]);

    return (
        <Switch>
            <PrivateRoute exact path='/admin'>
                <Suspense fallback={null}>
                    <Admin />
                </Suspense>
            </PrivateRoute>
            <Route exact path='/about'>
                <Suspense fallback={null}>
                    <About />
                </Suspense>
            </Route>
            <Route
                exact
                path='/albums/album/:id'
                render={props => (
                    <Suspense fallback={null}>
                        <AlbumDetail {...props} />
                    </Suspense>
                )}
            />
            <Route exact path='/albums'>
                <Suspense fallback={null}>
                    <Albums />
                </Suspense>
            </Route>
            <Route exact path='/search'>
                <Suspense fallback={null}>
                    <Search />
                </Suspense>
            </Route>
            <Route exact path='/'>
                <Suspense fallback={null}>
                    <Home />
                </Suspense>
            </Route>
            <Route>
                <Suspense fallback={null}>
                    <NotFound />
                </Suspense>
            </Route>
        </Switch>
    );

    function resetWindowScroll() {
        if (location !== prevLocation) {
            window.scrollTo(0, 0);
            setPrevLocation(location);
        }
    }
});

export { Routing };