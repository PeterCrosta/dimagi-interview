import { useState } from 'react'

const SearchBar = props => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

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