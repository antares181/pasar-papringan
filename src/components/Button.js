import React from 'react';

const Button = ({props}) => {

  const Icon = () => {
    if (props.use_icon) {
      return (<span className={props.icon_type}></span>)
    } else {
      return null
    }
  }

  const Text = () => {
    if (props.text !== '') {
      return (<span>{props.text}</span>)
    } else {
      return null
    }
  }

  return (
    <button className={props.use_icon && props.text !== '' ? props.class + ' btn-icon' : props.class}>
      <Text />
      <Icon />
    </button>
  )
}

export default Button;