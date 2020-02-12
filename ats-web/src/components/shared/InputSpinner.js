import React from 'react';
import DefaultProps from '../common/defaultProps';

class InputSpinner extends React.Component {
  state = {
    number: (this.props.min && this.props.min >= 0) ? this.props.min : 0,
    error: this.props.error
  };
  handleChange = (e) => {
    this.setState({
      number: e.target.value,
      error: ''
    });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className={this.props.containerClass}>
        <label htmlFor={this.props.id} className={this.props.isRequired ? this.props.requiredLabelClass : this.props.labelClass}>{this.props.label}</label>
        <div className={this.props.controlClass}>
          <input
            name={this.props.name}
            min={(this.props.min && this.props.min >= 0) ? this.props.min : 0}
            max={this.props.max ? this.props.max : 10}
            value={this.state.number}
            type='number'
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

InputSpinner.defaultProps = new DefaultProps();

export default InputSpinner;