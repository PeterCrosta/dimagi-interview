import secrets from './secrets';

const SingleUserLocation = props => {
    const {
        countryName,
        // email,
        lat,
        lng,
        name,
        date
    } = props.user;

    return (
        <div className='single-user-container' >
            <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=150x100&maptype=roadmap&markers=color:blue%7C${lat},${lng}&key=${secrets.mapsApiKey}`}
                alt='user location'
                className='user-location-map'
            />
            <div className='single-user-text'>
                <h3>{name}</h3>
                <h3>{countryName}</h3>
                <h3>{date}</h3>
            </div>
        </div>
    )

}

export default SingleUserLocation