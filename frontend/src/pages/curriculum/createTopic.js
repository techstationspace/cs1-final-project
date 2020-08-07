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
        {this.state.lessons.map((lesson,index) => {
          return (
            <div key={index}>
              <h2>Titolo: {lesson.title}</h2>
                {lesson.arguments.map((argument,subindex)=>{
                  return (
                    <h3 key={subindex}>Arguments: {argument.title}</h3>
                  )
                })}
            {/*   <h3>Arguments: {lesson.arguments[0].title}</h3> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewTopic;
