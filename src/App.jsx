import "./App.css";
import Map from "./components/Map.jsx";
import DashBoard from "./components/DashBoard.jsx";
function App() {
  return (
    <div className=" main flex flex-row bg-lime-500 text-white text-3xl m-0 top-0 left-0 fixed h-screen w-screen border-all">
      <DashBoard />
      <Map />
    </div>
  );
}

export default App;
