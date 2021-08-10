import { useState } from 'react';
import SearchBar from './SearchBar'

function App() {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [location, setLocation] = useState('');


  return (
    <div className="App">
      <SearchBar />
      {/* <header className="App-header">
        <form className='new-location-form'>
          <input
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} 
          />
          <input
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} 
          />
          <input
            type='text'
            placeholder='Enter location'
            value={location}
            onChange={(e) => {
              setLocation(e.target.value)
            }} 
          />
          <button
            type='submit'
          >Add location</button> 
        </form>
      </header> */}
    </div>
  );
}

export default App;
