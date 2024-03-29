import Mainpage from '../../pages/mainpage/mainpage';

type AppProps = {
    placesFound: number;
}

function App({placesFound}: AppProps): JSX.Element {
  return (
    <Mainpage placesFound={placesFound}/>
  );
}

export default App;
