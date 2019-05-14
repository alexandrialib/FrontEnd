import React, { Component } from "react";

class RemoteVideoTemplate extends Component {
    render() {
        return (
            <script id="remote-video-template" type="text/x-handlebars-template">
                <div id="{{ id }}" class="four wide column">
                    <img class="ui centered medium image" src="images/image.png" />
                </div>
            </script>
        );
    }
}

export default RemoteVideoTemplate;
