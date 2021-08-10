import { locations } from "./firebase";
import { useState, useEffect } from 'react';
import SingleUserLocation from "./SingleUserLocation";

const AllUserLocations = props => {
    const {
        setUsers,
        users
    } = props;
    // const [users, setUsers] = useState([])

    useEffect(() => {
        const getAllUsers = () => {
            const tempArr = [];
            locations.get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        tempArr.push(doc.data())
                    })
                })
                .then(() => {
                    setUsers(tempArr)
                })
                .catch(error => {
                    console.error('problem getting users: ', error)
                })
        };
        getAllUsers();
    }, [setUsers]);

    return (
        <div id='all-users-container'>
            {users.map((user, idx) => (
                <div key={idx} >
                    <SingleUserLocation
                        user={user}
                    />
                </div>
            ))}
        </div>
    )
}

export default AllUserLocations;