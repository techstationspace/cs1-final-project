import React from 'react';

function TopicDropdown({ title, args }) {
  return (
    <div>
      <h3>{title}</h3>
      <button>+</button>
      <ul>
        {args.map((argument, index) => {
          return <li key={index}>{argument}</li>;
        })}
      </ul>
    </div>
  );
}

export default TopicDropdown;
