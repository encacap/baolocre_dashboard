import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit.js";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import CommonRoutes from "./app/routes/CommonRoutes";

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={"Loading..."}>
                <ToastContainer icon={false} />
                <CommonRoutes />
            </Suspense>
        </React.Fragment>
    );
};

export default App;
