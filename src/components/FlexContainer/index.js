import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = (props) => {
  const {children, style, justContent,alignItem,flexDir,flexWrap, ...restProps} = props;
  const inlineStyles = {
    ...style,
    display: 'flex',
    justifyContent:justContent,
    alignItem: alignItem,
    flexDirection: flexDir,
    flexWrap: flexWrap
  };
  return (
    <div style={inlineStyles} {...restProps}>
      {children}
    </div>
  );
};

FlexContainer.defaultProps = {
  justContent:'center',
  alignItem: 'center',
  flexDir:'row',
  flexWrap: 'nowrap'
}
FlexContainer.propTypes = {
  justContent: PropTypes.string,
  alignItem: PropTypes.string,
  flexDir: PropTypes.string,
  flexWrap: PropTypes.string
};


export default FlexContainer;
