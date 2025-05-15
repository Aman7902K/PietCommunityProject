import { Home, Navbar, Project,CreatePost, UploadProject, AboutUs, CalendarPage, ProjectDetails} from "../Sections/Index.js"
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
        </Routes>
      </Router>
    </>
  )
}

export default App
