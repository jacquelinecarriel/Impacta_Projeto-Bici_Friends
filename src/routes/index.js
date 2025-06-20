import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeUser from "../pages/HomeUser";
import Groups from "../pages/Groups";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Events from "../pages/Events"
import PedalFofo from "../pages/PedalFofo";
import CreateGroup from "../pages/CreateGroup";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route exact path="/homeuser" element={<Private Item={HomeUser} />} />
                    <Route exact path="/groups" element={<Private Item={Groups} />} />
                    <Route exact path="/pedalfofo" element={<Private Item={PedalFofo} />} />
                    <Route exact path="/creategroup" element={<Private Item={CreateGroup}/>} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                    <Route exact path="/events" element={<Private Item={Events} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;