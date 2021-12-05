import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/navbar";
import NotFound from "./components/common/notfound";
import Forbidden from "./components/common/forbidden";
import Profile from "./components/profile";
import RegisterForm from "./components/registerPage";
import LoginForm from "./components/loginPage";
import Logout from "./components/logout";
import { getCurrentUser } from "./services/authService";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App h-screen">
            <ToastContainer />
            <main className="h-full flex flex-col">
                <Navbar />
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route
                        path="/register"
                        render={() => {
                            if (!getCurrentUser()) return <RegisterForm />;
                            return <Profile />;
                        }}
                    />
                    <Route
                        path="/profile"
                        render={() => {
                            if (!getCurrentUser()) return <Redirect to="/login" />;
                            return <Profile />;
                        }}
                    />
                    {/*                     <Route path="/register" component={RegisterForm} /> */}
                    <Route path="/logout" component={Logout} />
                    <Redirect from="/" exact to="/profile" />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/forbidden" component={Forbidden} />
                    <Redirect from="/" exact to="/profile" />
                    <Redirect to="/not-found" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
