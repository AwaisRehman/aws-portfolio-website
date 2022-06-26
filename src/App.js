import { Routes, Route, useLocation } from "react-router";
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import { AnimatePresence } from "framer-motion"
//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {

  const location = useLocation();

  return <>
  
  <GlobalStyle />
   <ThemeProvider theme={LightTheme}>
    <SoundBar />
    <AnimatePresence exitBeforeEnter>
   <Routes location={location} key={location.pathname}>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<MySkillsPage />} />
      </Route>
  </Routes>
  </AnimatePresence>
  </ThemeProvider>

    </>
    
}

export default App

