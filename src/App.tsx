import React, {ReactNode} from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main';
import {PlaceCardProps} from './components/PlaceCard/PlaceCardProps';
// import Offer from './pages/Offer';
// import Login from './pages/Login';
// import Favorites from './pages/Favorites';
// import Footer from './components/Footer/Footer';

interface AppProps {
  placeCardsData: PlaceCardProps[];
}

function App({placeCardsData}: AppProps):ReactNode {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <Main placeCardsData={placeCardsData}/>
      {/*<Offer />*/}
      {/*<Login />*/}
      {/*<Favorites />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
