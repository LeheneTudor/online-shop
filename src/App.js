import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Directory from "./components/directory/directory.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>
      <hr />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
