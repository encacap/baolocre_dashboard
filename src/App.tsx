import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import React, { Suspense } from "react";
import CommonRoutes from "./app/routes/CommonRoutes";

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={"Loading..."}>
                <CommonRoutes />
            </Suspense>
        </React.Fragment>
    );
};

export default App;
