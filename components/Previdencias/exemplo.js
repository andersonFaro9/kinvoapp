const { Fragment, useState } = React;

// Filter the hotels by location
function filterHotels(hotels, filter) {
  return hotels.filter(hotel => {
    return filter.includes(hotel.location);
  });
}

// Get a deduped list of hotels by mapping their
// locations, adding them to a set, and sorting them
// alphabetically
function getLocations(hotels) {
  const locations = hotels.map(hotel => hotel.location);
  return [...new Set(locations)].sort();
}

// Works out if a checkbox is checked
function isChecked(filter, location) {
  return filter.includes(location);
}

// Based on the checkbox checked value return
// a new filter array with a checkbox value added, or a
// new filter array with a checkbox's value removed
function getUpdated(filter, value, checked) {
  return checked
    ? [...filter, value]
    : filter.filter(el => el !== value);
}

// For the purposes of this example I'm just passing in
// and array of predefined hotel objects
function Example({ config }) {

  // Initialise the hotels and filter states
  const [ hotels, setHotels ] = useState(config);
  const [ filter, setFilter ] = useState(getLocations(config));

  
  function handleClick(e) {
    if (e.target.matches('[type="checkbox"]')) {
      const { value, checked } = e.target;
      setFilter(getUpdated(filter, value, checked));
    }
  }

  return (
    <section onClick={handleClick}>
      <Filter locations={getLocations(hotels)} filter={filter} />
      <HotelList hotels={hotels} filter={filter} />
    </section>
  );

}

function Filter({ locations, filter }) {
  return (
    <section>
      {locations.map((location, id) => {
        return (
          <Fragment key={id}>
            <label htmlFor={location}>
              {location}
            </label>
            <input
              id={location}
              type="checkbox"
              value={location}
              checked={isChecked(filter, location)}
            />
          </Fragment>
        );
      })}
    </section>
  );
}

function HotelList({ hotels, filter }) {
  return (
    <ul>
      {filterHotels(hotels, filter).map(hotel => {
        return (
          <li key={hotel.id}>
            {hotel.name} ({hotel.location})
          </li>
        );
      })}
    </ul>
  );
}

const config=[{id:1,name:"York Hotel",location:"York"},{id:2,name:"London Hotel",location:"London"},{id:3,name:"Bork Hotel",location:"York"},{id:4,name:"Fancy Hotel",location:"London"},{id:5,name:"Pelican Hotel",location:"Paris"},{id:6,name:"Moose Hotel",location:"Paris"},{id:7,name:"Murder Hotel",location:"Chicago"}];

ReactDOM.render(
  <Example config={config} />,
  document.getElementById('react')
);