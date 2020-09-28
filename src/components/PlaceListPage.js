import React from 'react';
import database from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import PlaceBox from './PlaceBox';

class PlacePage extends React.Component {
  state = {
    placeList: []
  };
  handleAddButtonClicked = () => {
    console.log('추가하자');
  };
  componentDidMount = () => {
    //장소들 객체를 배열로 변환해 state에 담음. 담을때 key값을 같이 넣어줌
    database.ref('placeList').on('value', (snap) => {
      const placeObj = snap.val();
      const keyArr = Object.keys(placeObj);

      const placeList = keyArr.map((key) => {
        const place = placeObj[key];
        place.id = key;
        return place;
      });
      console.log(placeList);

      this.setState({ placeList: placeList });
    });

    //누군가 항목을 수정했는지 확인해 알림(내가 수정한 항목 포함)
    database.ref('placeList').on('child_changed', (snap) => {
      ToastsStore.info(`${snap.val().name} 항목이 수정되었습니다.`);
    });
  };

  componentWillUnmount = () => {
    database.ref('placeList').off();
  };

  render() {
    return (
      <div>
        <ToastsContainer store={ToastsStore} />
        <div className="placeBoxs">
          {this.state.placeList.map((place) => (
            <PlaceBox key={place.id} {...place} />
          ))}
        </div>
        <button
          className="placeListPage__addButton"
          onClick={this.handleAddButtonClicked}
        >
          항목 추가
        </button>
      </div>
    );
  }
}

export default PlacePage;
