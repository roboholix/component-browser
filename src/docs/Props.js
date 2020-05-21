import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {

  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(props).map((key, index) => {
          return (
            <tr className={index % 2 ? "props__table-row--is-even" : "props__table-row--is-odd"} key={key}>
              <td className="props__name">{key}</td>
              <td>{props[key].description || "-"}</td>
              <td>{props[key].type.name}</td>
              <td className={props[key].defaultValue ? "props__default-value" : "props__default-value props__default-value--no-value"}>{props[key].defaultValue ? props[key].defaultValue.value : "-"}</td>
              <td className={props[key].required ? "props__is-required" : "props__is-not-required"}>{props[key].required ? "✓" : "✗"}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );

};

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
