import { Fragment } from 'react';

// import environment Router , Routes ,Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// setup router to change page when onclick
import { publicRoutes } from '~/routes';
// import DefaultLayout 
import { DefaultLayout } from '~/layouts';

function App() {
    return (
        //  user Router <Router></Router>
        <Router>
            <div className="App">
                {/* user Router <Router></Router> */}
                <Routes>
                    {/* lặp qua mảng để lấy component thông qua Router */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
