import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "modules/admin/pages";
import { Admin } from "modules/admin/admin";
const App = () => {
  return (
    // <div className="App">
    //   <Routes>
    //     {/* <Route path="/" component={ProductList} /> */}
    //     <Route path="/products" component={ProductList} />
    //   </Routes>
    // </div>
    <Admin />
  );
};

export default App;
