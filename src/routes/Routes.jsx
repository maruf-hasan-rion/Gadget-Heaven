import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Statistics from "../pages/Statistics.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import MainLayout from "../mainLayout/MainLayout.jsx";
import GadgetCards from "../components/GadgetCards.jsx";
import GadgetDetails from "../pages/GadgetDetails.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Carts from "../components/Carts.jsx";
import WishList from "../components/WishList.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadgets.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadgets.json'),
                    },
                ],
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
                // loader: () => fetch('../coffees.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../gadgets.json'),
                children: [
                    {
                        index: true,
                        element: <Carts></Carts>,
                        loader: () => fetch('../gadgets.json'),
                    },
                    {
                        path: 'cart',
                        element: <Carts></Carts>,
                        loader: () => fetch('../gadgets.json'),
                    },
                    {
                        path: 'wishList',
                        element: <WishList></WishList>,
                        loader: () => fetch('../gadgets.json'),
                    },
                ],
            },
            {
                path: '/gadget/:product_id',
                element: <GadgetDetails></GadgetDetails>,
                loader: () => fetch('../gadgets.json'),
            },
        ],
    },
]);

export default router