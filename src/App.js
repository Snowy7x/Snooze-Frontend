import { Route, Routes } from "react-router-dom";
import { Home, Auth, Dashboard } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/@me" element={<Dashboard />} />
      <Route path="/@me/:id" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
