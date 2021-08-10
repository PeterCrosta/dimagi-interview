import { useState, useEffect } from 'react';
import axios from 'axios';
import secrets from './secrets'

const SearchBar = props => {
    const {
        // locations, 
        setLocations
    } = props

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        const searchLocations = async () => {
            const searchStr = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${secrets.geoNamesUsername}&password=${secrets.geoNamesPassword}`;

            try {

                const {data} = await axios.get(searchStr);
                // console.log(data.geonames)
                setLocations(data.geonames)
            } catch (error) {
                console.error(error)
            }
        }
        if (location.length) searchLocations()
    }, [location, setLocations])

    return (
        <div id='search-bar'>
            <header className="App-header">
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
        </header>
        </div>
    )
}

export default SearchBar