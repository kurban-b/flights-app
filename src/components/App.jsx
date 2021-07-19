import Sidebar from "./Sidebar";
import Main from "./Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadFlights } from "../redux/actions/flights";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
