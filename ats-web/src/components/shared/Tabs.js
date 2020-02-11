import React from "react";

function Tabs(props) {
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

export default Tabs;
