module.exports = [{"name":"Logo","description":"A simple Logo component","props":{"fontSize":{"type":{"name":"string"},"required":false,"description":"A font size to be applied to the logo text"},"padding":{"type":{"name":"string"},"required":false,"description":"Css unit(s) to apply to the padding style"}},"code":"import React, { memo, useEffect, useState } from 'react';\nimport PropTypes from 'prop-types';\n\nimport FontFaceObserver from 'fontfaceobserver';\n\nimport createClassList from \"../../helpers/createClassList\";\n\nimport './logo.scss';\n\n/** A simple Logo component */\nconst Logo = ({ fontSize, padding }) => {\n\n  const [isLoadingFonts, setIsLoadingFonts] = useState(true);\n\n  useEffect(() => {\n\n    let isSubscribed = true;\n\n    const font = new FontFaceObserver('Share Tech Mono');\n\n    font\n      .load()\n      .then(() => {\n        if(isSubscribed) { setIsLoadingFonts(false); }\n      })\n      .catch(err => {\n        if(isSubscribed) { throw new Error(err); }\n      });\n\n  }, []);\n\n  const containerClasses = createClassList([\n    isLoadingFonts ? \"logo-container--is-loading-fonts\" : \"\",\n    \"logo-container\"\n  ]);\n\n  const customStyles = {};\n\n  if(fontSize) {\n    customStyles.fontSize = fontSize;\n  }\n\n  if(padding) {\n    customStyles.padding = padding;\n  }\n\n  return (\n    <div className={containerClasses} style={customStyles}>\n      <span>Component Browser</span>\n    </div>\n  );\n};\n\nLogo.propTypes = {\n  /** A font size to be applied to the logo text */\n  fontSize: PropTypes.string,\n  /** Css unit(s) to apply to the padding style */\n  padding: PropTypes.string\n};\n\nexport default memo(Logo);\n\nLogo.displayName = 'Logo';\n","examples":[{"name":"ExampleLogo","description":"Logo","code":"import React from \"react\";\nimport Logo from \"@roboholix/component-browser/Logo\";\n\n/** Logo */\nexport default function ExampleLogo() {\n\n  return (\n    <Logo\n      fontSize=\"42px\"\n      padding=\"20px\"\n    />\n  );\n\n}\n"}]}]