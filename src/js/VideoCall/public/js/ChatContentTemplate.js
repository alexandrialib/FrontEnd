import React, { Component } from "react";

class ChatContentTemplate extends Component {
    render() {
        return (
            <script id="chat-content-template" type="text/x-handlebars-template">
                <div class="event">
                    <div class="label">
                        <i class="icon blue use</div>r"></i>
                    </div>
                    <div class="content">
                        <div class="summary">
                            <div class="date">
                            </div>
                        </div>
                        <div class="extra text">
                        </div>
                    </div>
                </div>
            </script>
        );
    }
}

export default ChatContentTemplate;
