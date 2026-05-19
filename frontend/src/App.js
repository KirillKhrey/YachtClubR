
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default App;
