import React, { Component } from "react";
import Cameras from "./Cameras";
import RemoteVideoTemplate from "./RemoteVideoTemplate";
import ChatContentTemplate from "./ChatContentTemplate";
import ChatTemplate from "./ChatTemplate";

class VideoChat extends Component {
    render() {
        return (
            <div>
                <Cameras></Cameras>
                <RemoteVideoTemplate></RemoteVideoTemplate>
                <ChatContentTemplate></ChatContentTemplate>
                <ChatTemplate></ChatTemplate>
                <script src="scripts/jquery/dist/jquery.min.js"></script>
                <script src="scripts/semantic-ui-css/semantic.min.js"></script>
                <script src="scripts/handlebars/dist/handlebars.min.js "></script>
                <script src="scripts/simplewebrtc/out/simplewebrtc-with-adapter.bundle.js"></script>
                <script src="js/app.js"></script>
            </div>
        );
    }
}

export default VideoChat;
