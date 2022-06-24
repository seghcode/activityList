import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import Navbar from "./components/Navbar";
import ActivityContextProvider from "./contexts/ActvityContext";

function App() {
  return (
    <div className="App">
      <ActivityContextProvider>
        <Navbar/>
        <ActivityList/>
        <ActivityForm/>
      </ActivityContextProvider>
    </div>
  );
}

export default App;
