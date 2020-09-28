import React from 'react';

const options = ['엑소', '방탄소년단', '슈퍼주니어'];

class SelectFilter extends React.Component {
  state = {
    optionsOpened: false,
    selectedFilter: '아티스트 선택'
  };
  handleSelect = (e) => {
    //onclick으로 구현해야 값이 안 바뀌었을때 창 닫기를 구현 가능
    if (!!e.target.value) {
      this.optionBoxs.classList.remove('opened');
      this.setState({ optionsOpened: false, selectedFilter: e.target.value });
      this.props.onFilterSubmit(e.target.value);
    }
  };

  openSelect = () => {
    if (this.state.optionsOpened) {
      this.optionBoxs.classList.remove('opened');
      this.setState({ optionsOpened: false });
    } else {
      this.optionBoxs.classList.add('opened');
      this.setState({ optionsOpened: true });
    }
  };

  render() {
    return (
      <div>
        <div className="selectFilter__openOptions" onClick={this.openSelect}>
          <p>{this.state.selectedFilter}</p>
          <img src="/imgs/icon--down.png" />
        </div>
        <div
          className="selectFilter__options"
          ref={(ref) => {
            this.optionBoxs = ref;
          }}
        >
          <form onClick={this.handleSelect}>
            <label className="selectFilter__option">
              방탄소년단
              <input type="radio" name="selectFilter" value="방탄소년단" />
              <span className="selectFilter__customButton"></span>
            </label>
            <label className="selectFilter__option">
              엑소
              <input type="radio" name="selectFilter" value="엑소" />
              <span className="selectFilter__customButton"></span>
            </label>
            <label className="selectFilter__option">
              블랙핑크
              <input type="radio" name="selectFilter" value="블랙핑크" />
              <span className="selectFilter__customButton"></span>
            </label>
            <label className="selectFilter__option">
              BTOB
              <input type="radio" name="selectFilter" value="BTOB" />
              <span className="selectFilter__customButton"></span>
            </label>
            <label className="selectFilter__option">
              아이즈원
              <input type="radio" name="selectFilter" value="아이즈원" />
              <span className="selectFilter__customButton"></span>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default SelectFilter;
