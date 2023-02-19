import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./component/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  

  return (
    <FeedbackProvider>
      <Router>
          <Header/>
            <div className="container">
            <Routes>
              <Route 
                exact 
                path="/" 
                element = {
                  <>
                    <FeedbackForm />
                    <FeedbackStats/>
                    <FeedbackList/>
                    <AboutIconLink />
                  </>
                }
              />
              <Route exact path="/about" element={<AboutPage />}/>
            </Routes>
            </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;