import "./App.css";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../src/main";
import Login from "./components/Auth/Login";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import JobDetails from "./components/Job/JobDetails";
import Jobs from "./components/Job/Jobs";
import Postjobs from "./components/Job/Postjobs";
import MyJobs from "./components/Job/MyJobs";
import Myapplication from "./components/Application/Myapplication";
import { Toaster } from "react-hot-toast";

function App() {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      {/* //<Home /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/post" element={<Postjobs />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="applications/me" element={<Myapplication />} />
        </Routes>
        <Footer />
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
