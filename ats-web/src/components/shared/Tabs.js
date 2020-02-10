import React from "react";
// import PropTypes from "prop-types";

function TextInput(props) {
    function htmlId(title){
        return title.replace(" ", "_").replace(/\W/g, '').toLowerCase();
    }
    return (
        <div className="container">
            <ul className="nav nav-tabs">
                {props.tabList.map((tabItem, index) =>
                    <li className={tabItem.isActive ? "active" : ""} key={index}><a data-toggle="tab" href={"#" + htmlId(tabItem.title)}> {tabItem.title}</a></li>)}
            </ul>
            <div className="tab-content">
                {props.tabList.map((tabItem, index) =>
                    <div
                        key={index}
                        id={htmlId(tabItem.title)}
                        id={htmlId(tabItem.title)}
                        className={tabItem.isActive ? "tab-pane fade in active" : "tab-pane fade"}
                        >
                        {tabItem.URL}
                    </div>
                )}
            </div>
        </div>
    );
}

// TextInput.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.string,
//     error: PropTypes.string,
//     containerClass: PropTypes.string,
//     containerErrorClass: PropTypes.string,
//     fieldClass: PropTypes.string,
//     controlClass: PropTypes.string,
//     labelClass: PropTypes.string,
//     requiredLabelClass: PropTypes.string,
// };

// TextInput.defaultProps = {
//     error: "",
//     containerClass: "form-group",
//     containerErrorClass: "form-group has-error",
//     controlClass: "col-sm-8",
//     labelClass: "control-label col-sm-4",
//     requiredLabelClass: "control-label required col-sm-4",
//     fieldClass: "form-control",
// };

export default TextInput;
