import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.scss";

const ImageWrapper = (props) => {
  const { children, height } = props;
  const inlineStyles = {
    height: height,
  };
  return (
    <div style={inlineStyles} className={styles.wrapper}>
      {children}
    </div>
  );
};



ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ImageWrapper;
