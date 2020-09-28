import React from 'react';
import { Link } from 'react-router-dom';
import database from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

class PlacePage extends React.Component {
  state = {
    place: {},
    tags: ['BTS', 'RM', 'RM 투어', '석굴암', '경북 경주시'],
    points: [
      '수학여행지로 유명한 곳',
      '사진이 정말 예쁘게 나오는 곳',
      '흰 옷을 입고가면 사진이 잘 나와요'
    ]
  };
  componentDidMount() {
    const placeId = this.props.location.pathname.split('/')[2];
    console.log(placeId);
    database
      .ref(`placesList/${placeId}`)
      .once('value')
      .then((snap) => {
        const place = snap.val();
        place.imgSrc = place.imgSrc.replace('200-200', '400-400');
        //lorempixel 기능 이용해 상세보기에서는 큰 이미지를 불러오도록(리스트에서는 작은 이미지)
        this.setState({ place: place });
      });
  }
  handleGoBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { name, imgSrc, description, address, pin } = this.state.place;
    return (
      <div className="placePage">
        <div className="placePage__wrap">
          <div className="placePage_header">
            <a onClick={this.handleGoBack}>
              <img
                className="placePage_header__goBack"
                src="/imgs/icon--left.png"
              />
            </a>
            <p className="placePage_header__name">{name}</p>
          </div>
          <div className="placePage_topInfo">
            <img className="placePage__img" src={imgSrc} />
            <h1 className="placePage__name">{name}</h1>
            <p>{description}</p>
            <div className="placePage__counters">{`리뷰 0 | 핀 ${pin}`}</div>
            <div className="placePage__tags">
              {this.state.tags.map((tag) => {
                return (
                  <p key={uuidv4()} className="placePage__tag">
                    #{tag}
                  </p>
                );
              })}
            </div>
            <div className="placePage__points">
              {this.state.points.map((point) => {
                return (
                  <div key={uuidv4()} className="placePage__point">
                    <img
                      className="placePage__point__icon"
                      src="/imgs/icon--pencil.png"
                    />
                    <p className="placePage__point__txt">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="placePage_boxs">
            <p className="placePage__subtitle">기본 정보</p>
            <a href="https://www.google.com/maps/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/@37.580832,126.9713109,15.5z">
              <img
                className="placePage__map"
                src="https://maps.googleapis.com/maps/api/staticmap?center=37.580832,126.9713109&zoom=14&size=400x200&key=AIzaSyDTdkqL6ieU9u2fcPH1qJfohWxNzwryl7c"
              />
            </a>
            <div className="placePage__basicInfo">
              <img src="/imgs/icon--compass.png" />
              <p>{address}</p>
            </div>
            <div className="placePage__basicInfo">
              <img src="/imgs/icon--phone.png" />
              <p>010-2878-6221</p>
            </div>
            <div className="placePage__basicInfo">
              <img src="/imgs/icon--clock.png" />
              <p>11~2월 08시~12시 3~10월 07시~13시</p>
            </div>
            <div className="placePage__basicInfo">
              <img src="/imgs/icon--car.png" />
              <p>주차 가능</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlacePage;
