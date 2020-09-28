import React from 'react';
import SelectFilter from './SelectFilter';
import database from '../firebase/firebase';
import CupholderCard from './CupholderCard';

class CupholderPage extends React.Component {
  state = {
    selectedFilter: '',
    events: []
  };

  componentDidMount() {
    database
      .ref('events')
      .once('value')
      .then((snap) => {
        const eventsObj = snap.val();
        const keyArr = Object.keys(eventsObj);

        const events = keyArr.map((key) => {
          const event = eventsObj[key];
          event.id = key;
          return event;
        });

        this.setState({
          events: events
        });
        console.log(events);
      });
  }

  onFilterSubmit = (selectedFilter) => {
    this.setState({ selectedFilter: selectedFilter });
  };

  render() {
    return (
      <div className="cupholderpage">
        <h1 className="cupholderpage__title">컵홀더 이벤트</h1>
        <SelectFilter onFilterSubmit={this.onFilterSubmit} />
        <div className="cupholderpage__cards">
          {this.state.events.map((event) => {
            if (
              !this.state.selectedFilter ||
              event.tags.includes(this.state.selectedFilter)
            ) {
              return <CupholderCard key={event.id} {...event} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default CupholderPage;
