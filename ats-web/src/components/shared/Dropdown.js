import React from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";

function Dropdown(props) {
    return (
         <div className={props.error ? props.containerErrorClass : props.containerClass}>
             <div className={props.divLabelClass}>
             <label htmlFor={props.id} className={props.isRequired ? props.requiredLabelClass : props.labelClass}>{props.label}</label>
             </div>
            <div className={props.divSelectClass}>
                <Select id={props.id}
                    name={props.name}
                    defaultValue={props.arr[0]}
                    onChange={props.onChange}
                    options={props.arr}
                    isSearchable
                />
                {props.error && (
                    <span className="help-block">{props.error}</span>)}
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    arr: PropTypes.array.isRequired,
    error: PropTypes.string,
    containerErrorClass: PropTypes.string,
    containerClass: PropTypes.string,
    Class: PropTypes.string,
    requiredLabelClass: PropTypes.string,
    labelClass: PropTypes.string,
    divLabelClass: PropTypes.string,
    divSelectClass: PropTypes.string
};

Dropdown.defaultProps = {
    error: "",
    containerClass: "col-sm-6",
    containerErrorClass: "col-sm-6 has-error",
    labelClass: "control-label",
    requiredLabelClass: "control-label required",
    Class: "form-control",
    divLabelClass: "col-sm-2",
    divSelectClass: "col-sm-4"
};

export default Dropdown;