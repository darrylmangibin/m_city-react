import React from 'react';
import { Link } from 'react-router-dom';

import mcityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
  const template = (
    <div className="img_cover"
      style={{ 
        height: props.height,
        width: props.width,
        background:  `url(${mcityLogo}) no-repeat`
      }}
    ></div>
  )
  if(props.link) {
    return (
      <Link className="link_logo" to={props.linkTo}>
        {template}
      </Link>
    )
  } else {
    return template
  }
}