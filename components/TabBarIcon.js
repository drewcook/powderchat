import React from 'react';
import PropTypes from 'prop-types';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from "@expo/vector-icons";
import Colors from '../constants/Colors';

// TODO: consider making this a more usable PCIcon component
const TabBarIcon = (props) => {
  const { set, focused, name, size } = props;

  const iconProps = {
    name,
    size,
    style: {},
    color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
  };

  const icon = <Ionicons {...iconProps} />;
  // FontAwesome5 support
  const faIcon = <FontAwesome5 {...iconProps} />;
  // MaterialIcons support
  const mdIcon = <MaterialIcons {...iconProps} />;


  // return null;
  return (
    <>
      {set === 'ios' && icon}
      {set === 'fa' && faIcon}
      {set === 'md' && mdIcon}
    </>
  );
};

TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.number,
  set: PropTypes.string,
};

TabBarIcon.defaultProps = {
  focused: false,
  name: 'code-slash-outline',
  size: 26,
  set: 'ios',
};

export default TabBarIcon;
