import React from "react";
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

export const Footer = () => {
  const [display, setDisplay] = React.useState(false);
  const friendsBtn = React.useRef(null);
  return (
    <div className="db-b-bar">
        <div
            className="friends-toggle"
            ref={friendsBtn}
            onClick={() => {setDisplay(!display)}}
        />
        <div className="servers">
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-1">Snowys</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-2">Something</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-3">IDK</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-4">well yeah</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-5">hehehe</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="server-6">kkkkk</Tooltip>}>
                <div className="server"></div>
            </OverlayTrigger>

        </div>
        <div className="servers">
            <div className="server"/>
            <div className="server"/>
        </div>
            <Overlay target={friendsBtn.current} show={display} placement="top">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div className="friendsPanel">
                        Simple tooltip
                    </div>
                )}
            </Overlay>
    </div>
  );
};
