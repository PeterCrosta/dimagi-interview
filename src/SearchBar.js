import { useState, useEffect } from 'react';
import axios from 'axios';
import secrets from './secrets';
import { locations } from './firebase';
import validator from 'email-validator'

const SearchBar = props => {
    const {
        singleLocation, 
        setLocations,
        locationChosen,
        setLocationChosen,
        users,
        setUsers
    } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        const searchLocations = async () => {
            const locStr = location.split(' ').join('+');
            const searchStr = `http://api.geonames.org/searchJSON?q=${locStr}&maxRows=10&username=${secrets.geoNamesUsername}&password=${secrets.geoNamesPassword}`;
            try {

                const {data} = await axios.get(searchStr);
                setLocations(data.geonames);
            } catch (error) {
                console.error(error);
            }
        };
        if (location.length) searchLocations()
    }, [location, setLocations]);

    const handleSubmit = () =>{
        const { lat, lng, countryName } = singleLocation;
        const locObj = {
            name,
            email,
            countryName,
            lat,
            lng
        };

        locations
            .doc(email)
            .set(locObj)
            .then(() => {
                setUsers([locObj,...users])
                setEmail('');
                setName('');
                setLocation('');
                setLocationChosen(false);
                setLocations([]);
            })
            .catch(error => {
                console.error('error creating document: ', error);
            })
    }


    return (
        <div id='search-bar'>
            <header className="App-header">
                <form
                    className='new-location-form'
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (!validator.validate(email)) {
                            window.alert('Please enter valid email')
                        } else if (!locationChosen) {
                            window.alert('Please choose your location by clicking the green check box')
                        } else if (!name.length) {
                            window.alert('Please enter your name')
                        } else {
                            handleSubmit()
                        }
                    }}
                >
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