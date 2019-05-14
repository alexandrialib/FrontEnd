import React, { Component } from "react";

class RemoteCameras extends Component {
    render() {
        return (
            <div id="remote-videos" class="ui stackable grid">
                <div class="four wide column">
                    <img class="ui centered medium image" src="images/image.png" />
                </div>
                <div class="four wide column">
                    <img class="ui centered medium image" src="images/image.png" />
                </div>
                <div class="four wide column">
                    <img class="ui centered medium image" src="images/image.png" />
                </div>
                <div class="four wide column">
                    <img class="ui centered medium image" src="images/image.png" />
                </div>
            </div>
        );
    }
}

export default RemoteCameras;
