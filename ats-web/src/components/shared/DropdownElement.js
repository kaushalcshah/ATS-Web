import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Select } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/shared.css';

class DropdownElement extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { Option } = Select;
    return (
      <div className={this.props.error ? this.props.containerErrorClass : this.props.containerClass}>
        <div className={this.props.divLabelClass}>
          <label htmlFor={this.props.id} className={this.props.isRequired ? this.props.requiredLabelClass : this.props.labelClass}>{this.props.label}</label>
        </div>
        <div className={this.props.divSelectClass}>
          <Select
            showSearch
            id={this.props.id}
            name={this.props.name}
            onChange={this.props.onChange}
            className="selectWidth"
            placeholder={this.props.placeHolder}

          >
            {this.props.array.map((value, index) => {
              return (<Option value={value} >
                {value}
              </Option>);
            })}

          </Select>
          {this.props.error && (
            <span className="help-block">{this.props.error}</span>)}
        </div>
      </div>
    );
  }
}

DropdownElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
  placeHolder:PropTypes.string.isRequired,
  error: PropTypes.string,
  containerErrorClass: PropTypes.string,
  containerClass: PropTypes.string,
  Class: PropTypes.string,
  requiredLabelClass: PropTypes.string,
  labelClass: PropTypes.string,
  divLabelClass: PropTypes.string,
  divSelectClass: PropTypes.string
};

DropdownElement.defaultProps = {
  error: "",
  containerClass: "col-sm-6",
  containerErrorClass: "col-sm-6 has-error",
  labelClass: "control-label",
  requiredLabelClass: "control-label required",
  Class: "form-control",
  divLabelClass: "col-sm-2",
  divSelectClass: "col-sm-4"
};

export default DropdownElement;