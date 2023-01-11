import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./authentication/PrivateRouter";
import HomePage from "./page/HomePage"

const Router = () => {
    <Routes>
        <Route
            path="/"
            element={
                <PrivateRouter>
                    <HomePage />
                </PrivateRouter>
            }
        />
    </Routes>
};

export default Router;