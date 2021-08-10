import { useState } from 'react';
import SearchBar from './SearchBar';
import SingleLocationPreview from './SingleLocationPreview';

function App() {
  const [locations, setLocations] = useState([]);
  const [singleLocation, setSingleLocation] = useState({});
  const [locationChosen, setLocationChosen] = useState(false);


  return (
    <div className="App">
      <SearchBar 
        location={singleLocation}
        setLocations={setLocations}
      />
      {locationChosen ? (
        <div>
        <span>Your location: {singleLocation.name}, {singleLocation.countryName}</span>
          <button
            type='button'
            onClick={() => {
              setLocationChosen(false)
              setSingleLocation({})
            }}
            >X</button>

        </div>

      ): 
      locations.map((loc, idx) => (
        <div key={idx}>
          <SingleLocationPreview
            loc={loc}
            setSingleLocation={setSingleLocation}
            setLocationChosen={setLocationChosen}
            locationChosen={locationChosen}
          />
        </div>
      ))
      }
    </div>
  );
}

export default App;
