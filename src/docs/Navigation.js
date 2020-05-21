import React from 'react';
import PropTypes from 'prop-types';
import Logo from "../components/Logo/Logo";

const Navigation = ({components}) => {

  let currentPage = window.location.hash.replace(/\W/g, '');

  return (
    <div className="navigation__container">
      <header className="componentpage__header">
        <Logo includeGlitchEffect includeTypeEffect />
      </header>
      <ul className="navigation">
        {
          components.map( name => {
            return (
              <li key={name}>
                <a href={`#${name}`} className={currentPage === name ? 'isActive' : ''}>{name}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );

};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
