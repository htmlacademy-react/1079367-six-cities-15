import CitiesMap from '../../components/cities-map/cities-map';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';


type MainpageProps = {
    placesFound: number;
}

function MainPage({placesFound}: MainpageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isUserContext/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <CitiesPlaces placesFound={placesFound}/>
          <div className="cities__right-section">
            <CitiesMap/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
