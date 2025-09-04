import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ChapterView from "./pages/ChapterView";
import { chaptersData } from "./data/chapters";
import ChaptersPage from "./components/ChaptersPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex flex-col flex-grow">
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/chapters" 
                element={<ChaptersPage chapters={chaptersData} />} 
              />
              <Route 
                path="/chapters/:chapterId" 
                element={<ChapterView />} 
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;