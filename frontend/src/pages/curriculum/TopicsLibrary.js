import React from 'react';
import Axios from 'axios';

import { backendUrl } from '../../urls.js';

import TopicDropdown from '../../components/TopicDropdown.js';

class TopicsLibrary extends React.Component {
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
        {this.state.lessons.map((lesson, index) => {
          return (
            <TopicDropdown
              key={index}
              title={lesson.title}
              args={lesson.arguments.map((el) => el.title)}
            />
          );
        })}
      </div>
    );
  }
}

export default TopicsLibrary;
