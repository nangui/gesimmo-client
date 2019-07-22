import React from 'react'

const CardStat = (props) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="card-box">
        <h4 className="header-title mt-0 m-b-30">{ props.title }</h4>
        <div className="box-widget my-3">
          <div className="widget-detail">
            <h2 className="p-t-10 mb-0">{ props.number }</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardStat
