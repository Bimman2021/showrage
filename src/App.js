import React from "react";
import Index from './PAGES/index/Index';
import { Routes, Route } from "react-router-dom";
//import Home from './homepage/index';
import Page404 from "./PAGES/404page/Page404";
import Login from './PAGES/form/login/Login'
import Register from './PAGES/form/register/register'
import Forgot from './PAGES/form/forgot/forgot'
import List from "./COMPONENTS/movies/Index";
import Info from "./PAGES/moreInfo/info";
import Validate from './AUTH/infoAuth'
import Animation from "./COMPONENTS/animation";
import Mylist from "./PAGES/mylist/list";
import Subscribe from "./PAGES/subscribe";
import Season from "./PAGES/season/season"
import Profile from "./PAGES/profile/profile";
import Play from "./PAGES/playPage/play";
//import Moviepage from "./PAGES/moviePage/moviePage";
import Test from "./test/test";
import { AuthProvider } from "./AUTH";
const Home = React.lazy(() => import("./PAGES/homepage/index"));

function App() {
  return (
    <AuthProvider>
     <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/list" element={<Mylist />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/season" element={<Season />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/play" element={<Play />} />
      <Route
            path="/home"
            element={
              <React.Suspense fallback={<Animation />}>
                <Home />
              </React.Suspense>
            }
          />
      <Route path="/animation" element={<Animation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reg" element={<List />} />    
       <Route path="/info" element={
        <Validate>
       <Info />
       </Validate>
       } />
  
     </Routes>
     </AuthProvider>
  );
}

export default App;
