import { Home, Navbar, Project,CreatePost, UploadProject, AboutUs, CalendarPage, ProjectDetails, Login,Profile} from "../Sections/Index.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/uploadproject" element={<UploadProject />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/CalenderPage" element={<CalendarPage />} />
          <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Profile" element = {<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
