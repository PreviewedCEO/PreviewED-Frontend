import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import LandingIndex from "./pages/Landing-Page/LandingIndex";
import SearchJobs from "./pages/Search-Jobs/SearchJobs";
import WIP from "./pages/WIP-Page/WIP";

const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <BrowserRouter>
      <div>
        {/*
        
        
               <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-jobs">All Jobs</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/career-advice">Career Advice</Link>
            </li>
          </ul>
        </nav>
        
        
        */}

        <Routes>
          <Route exact path="/" element={<LandingIndex />} />
          <Route path="/all-jobs" element={<SearchJobs />} />
          <Route path="/companies" element={<WIP />} />
          <Route path="/people" element={<WIP />} />
          <Route path="/career-advice" element={<WIP />} />
          <Route path="/about" element={<WIP />} />
          <Route path="/join" element={<WIP />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
