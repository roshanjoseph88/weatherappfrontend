import "./reset.css";
import "./App.css";
import { Search } from "./Content/Search/Search";
import { Locationlist } from "./Content/Locationlist/Locationlist";
import { LocationContext } from "./Context/LocationContext";
import { SubWeather } from "./Content/SubWeather/SubWeather";
function App() {
  return (
    <div className="App">
      <LocationContext>
        <div className="app-picture">
          <h1>picture</h1>
        </div>
        <div className="app-mainweather">
          <h1>weather</h1>
        </div>
        <div className="app-search">
          <Search />
        </div>
        <div className="app-searchresults">
          <Locationlist />
        </div>
        <div className="app-subweather">
          <SubWeather />
        </div>
        <div className="app-footer">
          <footer>
            <h1>Open Weather</h1>
          </footer>
        </div>
      </LocationContext>
    </div>
  );
}

export default App;
