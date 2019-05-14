import React, { Component } from "react";

class LocalCamera extends Component {
    render() {
        return (
            <div class="ui six wide column">
                <img id="local-image" class="ui large image" src="images/image.png" />
                <video id="local-video" class="ui large image" autoplay></video>
                <h4 class="ui center aligned header" style="margin:0;">
                    Local Camera
                </h4>
            </div>
        );
    }
}

export default LocalCamera;
