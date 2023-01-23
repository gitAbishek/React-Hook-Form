import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import CreatePost from "./components/Pages/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Details from "./components/Pages/Details";
import SignOut from "./components/Pages/SignOut";
import Footer from "./components/Pages/Footer";
//import Users from "./components/Pages/Users";
import Posts from "./components/Pages/Posts";
import FetchPostWithId from "./components/Pages/FetchPostWithId";

import { Divider } from "@chakra-ui/react";

import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Divider />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user" element={<Users />} /> */}
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postid" element={<FetchPostWithId />}/>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
      
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
