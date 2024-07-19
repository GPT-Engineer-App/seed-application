import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/navbar";
import { navItems } from "./nav-items";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navItems.map((item) => (
            <Route key={item.to} path={item.to} element={item.page} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;