import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <div className="componentpage">
      <header>
        <h2 className="app__header">{name}</h2>
      </header>
      {description ?
          <p className="description">{description}</p>
        :
          null
      }

      <h3>Props</h3>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }

      <h3>{examples.length > 1 ? "Examples" : "Example"}</h3>
      {
        examples.length > 0 ?
        examples.map( example => <Example key={example.code} example={example} componentName={name} /> ) :
        "No examples exist."
      }

    </div>
  );

};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
