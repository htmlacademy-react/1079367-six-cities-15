import Place from '../place/place';

function PlacesList(): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {[1, 2, 3, 4, 5, 6].map((place) => <Place key={place}/>)}
    </div>
  );
}

export default PlacesList;
