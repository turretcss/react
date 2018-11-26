import React from 'react'

const Wrap = ({ size = 'm', children }) => (
  <div className={`margin-vertical-${size}`}>
    <div className={`flex-gap-${size} align-items-center`}>{children}</div>
  </div>
)

export default Wrap
