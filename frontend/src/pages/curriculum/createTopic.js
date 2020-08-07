import React from 'react';
import Axios from 'axios';

import { backendUrl } from '../../urls.js';

class ViewTopic extends React.Component {
  state = {
    lessons: [],
  };

  componentDidMount() {
    Axios.get(`${backendUrl}/lezioni`).then((response) => {
      this.setState({ lessons: response.data.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.lessons.map((lesson) => {
          return (
            <div>
              <h2>Titolo: {lesson.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewTopic;
