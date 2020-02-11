import React from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";

function Dropdown(props) {
    return (
        <div style={{width:"200px"}}>
            <Select id={props.id} className={props.Class} onChange={props.onChange}
                options = {props.arr}
                isSearchable
            >
            </Select>
        </div>
    )
}

Dropdown.propTypes = {
    id: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    arr: PropTypes.array.isRequired
};

export default Dropdown;
