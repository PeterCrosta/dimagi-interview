import { useState } from 'react';
import SearchBar from './SearchBar';
import SingleLocationPreview from './SingleLocationPreview';
import AllUserLocations from './AllUserLocations';

function App() {
  const [locations, setLocations] = useState([]);
  const [singleLocation, setSingleLocation] = useState({});
  const [locationChosen, setLocationChosen] = useState(false);
  const [users, setUsers] = useState([]);


  return (
    <div className="App">
      <SearchBar 
        singleLocation={singleLocation}
        setLocations={setLocations}
        locationChosen={locationChosen}
        setLocationChosen={setLocationChosen}
        setUsers={setUsers}
        users={users}
      />
      {locationChosen ? (
        <div>
          <SingleLocationPreview
            loc={singleLocation}
            setSingleLocation={setSingleLocation}
            setLocationChosen={setLocationChosen}
            locationChosen={locationChosen}
          />
          {/* <button
            type='button'
            onClick={() => {
              setLocationChosen(false)
              setSingleLocation({})
            }}
            >X</button> */}

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
      <h1>Most recent check-ins</h1>
      <AllUserLocations 
        setUsers={setUsers}
        users={users}
      />
    </div>
  );
}

export default App;
