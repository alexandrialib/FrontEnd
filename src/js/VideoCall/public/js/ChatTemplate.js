import React, { Component } from "react";

class ChatTemplate extends Component {
    render() {
        return (
            <script id="chat-template" type="text/x-handlebars-template">
                <hr />
                <div id="chat-content" class="ui feed"> </div>
                <hr />
                <div class="ui form">
                    <div class="ui field">
                        <label>Post Message</label>
                        <textarea id="post-message" name="post-message" rows="1"></textarea>
                    </div>
                    <div id="post-btn" class="ui primary submit button">Send</div>
                </div>
            </script>
        );
    }
}

export default ChatTemplate;
