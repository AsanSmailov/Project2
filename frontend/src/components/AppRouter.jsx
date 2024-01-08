import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    path={route.path}
                    element= {route.element}
                    exact={route.exact}
                />
            )}
            <Route
                path="*"
                element={<Navigate to="/error" replace />}
            />
        </Routes>
    );
};

export default AppRouter;