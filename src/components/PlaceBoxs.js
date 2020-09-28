import React from 'react';
import PlaceBox from './PlaceBox';
import database from '../firebase/firebase';

class PlaceBoxs extends React.Component {
  state = {
    placesList: []
  };

  componentDidMount() {
    database
      .ref('placesList')
      .once('value')
      .then((snap) => {
        const placesObj = snap.val();
        const keyArr = Object.keys(placesObj);

        const placesList = keyArr.map((key) => {
          const place = placesObj[key];
          place.id = key;
          return place;
        });

        this.setState({
          placesList: placesList
        });
      });
  }

  render() {
    return (
      <div className="placeBoxs">
        {this.state.placesList.map((place) => (
          <PlaceBox key={place.id} {...place} />
        ))}
      </div>
    );
  }
}

export default PlaceBoxs;
