import React from "react"

const Stat = ({
    direction
}) => 
  <div className="ct-stats__item">
    <dd className={`ct-stats__value ct-stats__value--${direction}`}>
      XX
    </dd>
    <dt className="ct-stats__caption">
      Statistic caption
      <p className="ct-stats__subcaption">In the last 30 days</p>
    </dt>
  </div>

export default Stat