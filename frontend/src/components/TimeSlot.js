import React from 'react';

class TimeSlot extends React.Component {
  state = {
    enabled: false,
    startTime: '',
    endTime: '',
    plannedActivities: [],
  };

  render() {
    return (
      <div>
        <p>{this.state.startTime}</p>
        <ul>
          {this.state.plannedActivities.map((activity) => activity.title)}
        </ul>
        <p>{this.state.endTime}</p>
      </div>
    );
  }
}

export default TimeSlot;
