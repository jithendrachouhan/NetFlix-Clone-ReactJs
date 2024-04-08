import Layout from "./components/Layout"
import { RouterProvider } from "react-router-dom";
import { CustomeRoute } from "./utils/CustomeRoute";
import appStore from "./utils/Redux/AppStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}><RouterProvider router={CustomeRoute} /></Provider>
    
  );
}

export default App;
