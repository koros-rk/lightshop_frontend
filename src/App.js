import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import BaseListPage from "./components/shop/BaseListPage";
import {product_list_loader, single_product_loader} from "./components/Loaders/ProductLoader";
import AboutPage from "./components/utils/AboutPage";
import FAQPage from "./components/utils/FAQPage";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import BaseSinglePage from "./components/shop/SingleItem/BaseSinglePage";
import ErrorPage from "./components/utils/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "shop/",
        element: <BaseListPage/>,
        loader: product_list_loader,
        errorElement: <ErrorPage/>
    },
    {
        path: "shop/:slug",
        element: <BaseSinglePage/>,
        loader: single_product_loader,
        errorElement: <ErrorPage/>
    },
    {
        path: "about/",
        element: <AboutPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "FAQ/",
        element: <FAQPage/>,
        errorElement: <ErrorPage/>
    },
])

function App() {
    return (
        <div className={'font-bitter'}>
            <Navbar/>

            <main>
                <RouterProvider router={router}/>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
