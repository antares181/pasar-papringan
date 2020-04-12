import React from 'react';

const SectionTitle = ({props}) => {

  const CheckAction = () => {
    if (props.action) {
      return (
        <div className="right">
          <div>Lihat Semua Info</div>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className="title">
      <div className="left">
        <div className="sub-title">{props.sub_title}</div>
        <div className="title-inner">{props.title}</div>
      </div>
      <CheckAction/>
    </div>
  )
}

export default SectionTitle;