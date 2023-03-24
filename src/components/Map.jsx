

export const Map = ({ city }) => {

    return (
        <div>
            <iframe
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                // src={`https://www.google.com/maps/embed/v1/place?q=${city}`}
              src= {`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                >
            </iframe>
        </div>
    );
};