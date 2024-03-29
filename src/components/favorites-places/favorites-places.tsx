import FavoritePlace from '../favorite-place/favorite-place';

function FavoritesPlaces() {
  return(
    <div className="favorites__places">
      {[1, 2, 3].map((place) => <FavoritePlace key={place}/>)}
    </div>
  );
}

export default FavoritesPlaces;
