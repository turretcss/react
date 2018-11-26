import React from 'react'

const Wrap = ({ size = 'm', children }) => (
  <div className={`group group-${size}`}>
    <ul>{React.Children.map(children, (child, i) => <li key={i}>{child}</li>)}</ul>
  </div>
)

export default Wrap
