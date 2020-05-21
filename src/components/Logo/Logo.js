import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FontFaceObserver from 'fontfaceobserver';

import createClassList from "../../helpers/createClassList";

import './logo.scss';

/** A simple Logo component */
const Logo = ({ fontSize, padding }) => {

  const [isLoadingFonts, setIsLoadingFonts] = useState(true);

  useEffect(() => {

    let isSubscribed = true;

    const font = new FontFaceObserver('Share Tech Mono');

    font
      .load()
      .then(() => {
        if(isSubscribed) { setIsLoadingFonts(false); }
      })
      .catch(err => {
        if(isSubscribed) { throw new Error(err); }
      });

  }, []);

  const containerClasses = createClassList([
    isLoadingFonts ? "logo-container--is-loading-fonts" : "",
    "logo-container"
  ]);

  const customStyles = {};

  if(fontSize) {
    customStyles.fontSize = fontSize;
  }

  if(padding) {
    customStyles.padding = padding;
  }

  return (
    <div className={containerClasses} style={customStyles}>
      <span>Component Browser</span>
    </div>
  );
};

Logo.propTypes = {
  /** A font size to be applied to the logo text */
  fontSize: PropTypes.string,
  /** Css unit(s) to apply to the padding style */
  padding: PropTypes.string
};

export default memo(Logo);

Logo.displayName = 'Logo';
