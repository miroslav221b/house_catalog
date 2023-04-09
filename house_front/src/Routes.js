import React from "react"
import {ROUTES} from "./utils/consts"
import Shop from "./pages/Shop"
import Offer from "./pages/Offer"
export const PublicRoutes = [
    {
        path: ROUTES.SHOP,
        Component: <Shop/>,
    },
    {
        path:ROUTES.OFFER + '/:id',
        Component: <Offer/>,
    },
    {
        path: "*", //redirect
        Component: <Shop/>,
    },
]