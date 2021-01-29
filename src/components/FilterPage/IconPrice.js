import React from 'react';
import Icon from 'react-native-vector-icons/thebook-appicon';

const IconPrice = (props) => {
  return <Icon size={props.size ? props.size : 20} name="ic-price" color={props.color} />;
};
export default IconPrice;
