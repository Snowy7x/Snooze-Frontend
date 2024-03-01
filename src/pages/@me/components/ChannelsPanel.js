import React from "react";
import {FiSettings} from "react-icons/fi";

const ChannelsPanel = () => {
    return (
        <div className="db-panel db-l">
            <div className="db-header left-head">
                <div className="profile">
                    <div className="db-profile-pic"/>
                    <div className="db-username">Snowy
                        <div className="db-tag">#0000</div>
                    </div>
                </div>
                <div className="tools">
                    <div className="tool-icon"><FiSettings/></div>
                </div>
            </div>
            <div className="db-content">Content</div>
        </div>
    );
};

export default ChannelsPanel;
