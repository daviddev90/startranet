import React from 'react';
import database from '../firebase/firebase';

class PlaceBox extends React.Component {
  state = {
    place: {
      ...this.props
    }
  };
  handleSaveClicked = (e) => {
    e.preventDefault();
    const obj = { ...this.state.place };
    const ref = obj.id;
    delete obj.id;
    database.ref(`placeList/${ref}`).update(obj);
  };

  handleDeleteClicked = (e) => {
    e.preventDefault();
  };
  handleNameChange = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        name: e.target.value
      }
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        description: e.target.value
      }
    });
  };
  handleAddressChange = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        address: e.target.value
      }
    });
  };
  handleTelChange = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        tel: e.target.value
      }
    });
  };
  handleParkalbeChange = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        parkable: e.target.checked
      }
    });
  };
  handleInformation1Change = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        information1: e.target.value
      }
    });
  };
  handleInformation2Change = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        information2: e.target.value
      }
    });
  };
  handleInformation0Change = (e) => {
    this.setState({
      place: {
        ...this.state.place,
        information0: e.target.value
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} method="post" className="placebox">
        <div className="placebox__section">
          <div className="placebox__liner">
            <p>이름</p>
            <input
              value={this.state.place.name}
              ref={(element) => {
                this.name = element;
              }}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="placebox__liner">
            <p>기본설명</p>
            <input
              value={this.state.place.description}
              ref={(element) => {
                this.description = element;
              }}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className="placebox__liner">
            <p>주소</p>
            <input
              value={this.state.place.address}
              ref={(element) => {
                this.address = element;
              }}
              onChange={this.handleAddressChange}
            />
          </div>
          <div className="placebox__liner">
            <p>전화번호</p>
            <input
              value={this.state.place.tel}
              ref={(element) => {
                this.tel = element;
              }}
              onChange={this.handleTelChange}
            />
          </div>
        </div>
        <div className="placebox__section">
          <div className="placebox__liner">
            <p>주차가능</p>
            <input
              type="checkbox"
              ref={(element) => {
                this.parkable = element;
              }}
              checked={this.state.place.parkable}
              onChange={this.handleParkalbeChange}
            />
          </div>
          <div className="placebox__liner">
            <p>추가설명1</p>
            <input
              value={this.state.place.information0}
              ref={(element) => {
                this.information0 = element;
              }}
              onChange={this.handleInformation0Change}
            />
          </div>
          <div className="placebox__liner">
            <p>추가설명2</p>
            <input
              value={this.state.place.information1}
              ref={(element) => {
                this.information1 = element;
              }}
              onChange={this.handleInformation1Change}
            />
          </div>
          <div className="placebox__liner">
            <p>추가설명3</p>
            <input
              value={this.state.place.information2}
              ref={(element) => {
                this.information2 = element;
              }}
              onChange={this.handleInformation2Change}
            />
          </div>
        </div>
        <div className="placebox__section">
          <div className="placebox__liner">
            <p>최종 확인</p>
            <p>20-09-01</p>
          </div>
          <div className="placebox__liner">
            <p>핀</p>
            <p>155</p>
          </div>
          <div className="placebox__liner"></div>
          <div className="placebox__liner">
            <button onClick={this.handleSaveClicked}>저장</button>
            <button onClick={this.handleDeleteClicked}>삭제</button>
          </div>
        </div>
      </form>
    );
  }
}

export default PlaceBox;
