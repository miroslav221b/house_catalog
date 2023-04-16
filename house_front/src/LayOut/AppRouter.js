import React from "react";
import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "../Routes";

function AppRouter() {
    return (
        <Routes>
            {PublicRoutes.map(({ path, Component }) => {
                return <Route path={path} element={Component} key={path} />

            })}
        </Routes>
    )
};
export default AppRouter;