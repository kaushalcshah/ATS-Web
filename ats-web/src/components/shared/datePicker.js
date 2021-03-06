import React from 'react';
import PropTypes from "prop-types";
import { DatePicker } from 'antd';

function DateTimePicker(props) {

    return (
        <div className="ant-row ant-form-item">
            <div className={props.error  ? props.containerErrorClass : props.containerClass}>
                <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                    <label htmlFor={props.id} className={props.isRequired ? props.requiredLabelClass : ''}>{props.label}</label></div>
                <div className={props.controlClass}>
                    <DatePicker format="MM/DD/YYYY HH:mm" onChange={props.onChange} showTime={true} disabledSeconds="true"  />
                    {props.error  && (
                        <div className="ant-form-explain">{props.error}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
DateTimePicker.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    containerClass: PropTypes.string,
    containerErrorClass: PropTypes.string,
    controlClass: PropTypes.string,
    requiredLabelClass: PropTypes.string,
    onChange: PropTypes.func
};

DateTimePicker.defaultProps = {
    error: "",
    containerClass: "ant-form-item",
    containerErrorClass: "ant-form-item has-error",
    controlClass: "ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16",
    requiredLabelClass: "ant-form-item-required",
    isRequired : false
};

export default DateTimePicker;