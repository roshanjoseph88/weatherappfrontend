import "./reset.css";
import "./App.css";
import { Search } from "./Content/Search/Search";
import { Locationlist } from "./Content/Locationlist/Locationlist";
import { LocationContext } from "./Context/LocationContext";
import { SubWeather } from "./Content/SubWeather/SubWeather";
import { Footer } from "./Content/Footer/Footer";
import { MainWeather } from "./Content/MainWeather/MainWeather";
function App() {
  return (
    <div className="App">
      <LocationContext>
        <div className="app-leftside">
          {" "}
          {/* left side start*/}
          <div className="app-picture">
            <h1>picture</h1>
          </div>
          <div className="app-mainweather">
            <MainWeather />
          </div>
        </div>
        {/* left side end*/}
        {/* right side start*/}
        <div className="app-rightside glasslook">
          <div className="app-search ">
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
              <Footer />
            </footer>
          </div>
        </div>
        {/* right side end*/}
      </LocationContext>
    </div>
  );
}

export default App;
