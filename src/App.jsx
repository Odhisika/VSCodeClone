import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import styles from './App.module.css';
import "./index.css"
import Blog from "./pages/Blog/Blog";
import Updates from "./pages/Updates/updates";
import Docs from "./pages/Docs/Docs";
import Extensions from "./pages/Extensions/Extensions";
import FAQ from "./pages/FAQ/FAQ";
import API from "./pages/API/API";
import Copilot from "./pages/GitHubCopilot/Copilot";



const App = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs/>} />
            <Route path="/extensions" element={<Extensions />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/copilot" element={<Copilot />} />
            <Route path="/api" element={<API/>} />
            <Route path="/updates" element={< Updates/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;