import React from "react";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
// Screens
import Landing from "./screens/Landing.jsx";
// import Login from "./screens/Login.jsx";
// import Home from "./screens/Home/Home.jsx";
// import SurveyForm from "./screens/employeeForms/SurveyForm";
import { ChakraProvider } from "@chakra-ui/react";
// import SurveyCreationTool from "./screens/forms/SurveyCreationTool";
// import ContactEmpForm from "./screens/employeeFeedback/EmpForm";
import { UserContext } from "./context/UserContext";
// import Blogs from "./screens/blogs/Blogs";
// import Events from "./screens/events/Events";
import Verify from "./components/Sections/Verify.jsx";
import Dashboard from "./components/Sections/Dashboard.jsx";
import ProfileSection from "./components/Sections/ProfileSection.jsx";
import LeaderDash from "./components/Sections/LeaderDash.jsx";
import ForumDash from "./components/Sections/ForumDash.jsx";
import AiDash from "./components/Sections/AiDash.jsx";
import RepoDash from "./components/Sections/RepoDash.jsx";
import Chat from "./chat/Chat.jsx"
import Profile_Form from "./components/Sections/Profile_Form.jsx";
import ProjectRec from "./components/Elements/ProjectRec.jsx";
import ProjectDash from "./components/Sections/ProjectDash.jsx";

export default function App() {
  return (
    <>
    <ChakraProvider>
      <Router>


        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <UserContext>
        <Routes>
          <Route path='/verify' element={<><Verify /></>} />
        </Routes>
        <Routes>
          <Route path='/' element={<><Landing /></>} />
          {/* <Route path='/survey-form' element={<SurveyCreationTool/>} /> */}
        </Routes>
        <Routes>
          {/* <Route path='/home' element={<><Home /></>} /> */}
          <Route path='/issues/:email' element={<><Dashboard /></>} />
          {/* <Route path='/blogs' element={<><Blogs /></>} />
          <Route path='/events' element={<><Events /></>} /> */}
          <Route path='/profile' element={<><ProfileSection /></>} />
          <Route path='/forum' element={<><ForumDash /></>} />
          <Route path='/leader' element={<><LeaderDash /></>} />
          <Route path='/ai' element={<><AiDash /></>} />
          <Route path='/domain' element={<><RepoDash /></>} />
          <Route path='/repo' element={<><ProjectDash /></>} />
          <Route path='/userProfile' element={<><Profile_Form /></>} />
          <Route path='/chat' element={<><Chat /></>} />



        </Routes>
        {/* <Routes>
          <Route path='/empForm' element={<><ContactEmpForm /></>} />
        </Routes> */}
        </UserContext>
      </Router>
      </ChakraProvider>
    </>
  );
}

