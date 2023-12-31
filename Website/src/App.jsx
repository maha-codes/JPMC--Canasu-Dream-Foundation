import NavBar from "./components/home/NavBar";
import Footer from "./components/home/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoginRegistration from "./components/login/LoginRegistration";
import Home from "./components/home/Home";
import Mentor from "./components/Dashboard/mentor/mentor";
import Mentee from "./components/Dashboard/mentee/mentee";
import { useEffect } from "react";
const LazyABout = React.lazy(() => import("./components/about/About"));
const LazyBlog = React.lazy(() => import("./components/blog/Blog"));
const LazyMyAccount = React.lazy(() =>
  import("./components/account/MyAccount")
);
const LazyMentors = React.lazy(() =>
  import("./components/mentorspage/Mentors")
);

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setLogin(!login);
    navigate("/main");
  };
  const handleLoginForm = () => {
    setLogin(!login);
    
  };
  if (login) {
    return <LoginRegistration handleLoginForm={handleLoginForm} />;
  } 

 

  return (
    <>
      <NavBar handleClick={handleLoginClick} />
      
      <Routes>
        
        <Route path="/" element={<Home handleClick={handleLoginClick} />} />
         <Route path="/Mentor" element={<Mentor/>} />
         <Route path="/mentee" element={<Mentee/>} />
        <Route
          path="/about"
          element={
            <React.Suspense
              fallback={
                <div className="ui segment">
                  <div className="ui active loader"></div>
                  <h2>Hang in there..</h2>
                </div>
              }>
              <LazyABout />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <React.Suspense
              fallback={
                <div className="ui segment">
                  <div className="ui active loader"></div>
                  <h2>Hang in there..</h2>
                </div>
              }>
              <LazyBlog />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/mentors"
          element={
            <React.Suspense
              fallback={
                <div className="ui segment">
                  <div className="ui active loader"></div>
                  <h2>Hang in there..</h2>
                </div>
              }>
              <LazyMentors handleLoginClick={handleLoginClick} />{" "}
            </React.Suspense>
          }
        />
        
        <Route
          path="/account"
          element={
            <React.Suspense
              fallback={
                <div className="ui segment"Name>
                  <div className="ui active loader"></div>
                  <h2>Hang in there..</h2>
                </div>
              }>
              <LazyMyAccount />{" "}
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
