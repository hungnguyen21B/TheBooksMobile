import React from 'react';
import Icon  from 'react-native-vector-icons/thebook-appicon';

const IconBook = (props) => {
  return <Icon size={props.size ? props.size : 20} name="ic-book-1" color={props.color} />;
};
export default IconBook;
