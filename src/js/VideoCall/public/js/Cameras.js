import React, { Component } from "react";
import ChatRoom from "./ChatRoom";
import LocalCamera from "./LocalCamera";
import RemoteCameras from "./RemoteCameras";

class Cameras extends Component {
    render() {
        return (
            <div class="ui container">
                <h1 class="ui header">Simple WebRTC Messenger</h1>
                <hr />
                <div class="ui two column stackable grid">
                    <ChatRoom></ChatRoom>
                    <LocalCamera></LocalCamera>
                </div>
                <h3 class="ui center aligned header">Remote Cameras</h3>
                <RemoteCameras></RemoteCameras>
            </div>
        );
    }
}

export default Cameras;
