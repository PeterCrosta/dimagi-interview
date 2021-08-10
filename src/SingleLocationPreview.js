import secrets from './secrets'

const SingleLocationPreview = props => {
    const {
        countryName,
        lat,
        lng,
        name,
    } = props.loc;
    const { 
        setSingleLocation, 
        setLocationChosen,
        locationChosen
     } = props;

    return (
        <div className='single-location-preview-container' >
            <img 
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=150x100&maptype=roadmap&markers=color:blue%7C${lat},${lng}&key=${secrets.mapsApiKey}`}
                alt='location map'
            />
            <div className='location-preview-text-conatiner' >
                <h3>{name}</h3>
                <h3>{countryName}</h3>
            </div>
            {locationChosen ? (
                null
                // <button
                //     type='button'
                //     onClick={() => {
                //         setLocationChosen(false);
                //         setSingleLocation({});
                //     }}
                // >X</button>
            ) : (
                    <button 
                        type='button'
                        onClick={() => {
                            setLocationChosen(true);
                            setSingleLocation(props.loc);
                        }}
                    >✅</button>
            )}
        </div>
    )
};

export default SingleLocationPreview;