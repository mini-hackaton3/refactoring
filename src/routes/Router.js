import { Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";
import Main from "../components/Main";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import SearchResult from "../components/SearchResult";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/result" element={<SearchResult />}></Route>
      <Route path="/detail/:movieID" element={<Detail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
    </Routes>
  );
};

export default Router;
