import React, { Component } from "react";

class ChatRoom extends Component {
  render() {
    return (
      <div class="ui ten wide column">
        <div class="ui segment">
          <div class="ui form">
            <div class="fields">
              <div class="field">
                <label>User Name</label>
                <input type="text" placeholder="Enter user name" id="username" name="username" />
              </div>
              <div class="field">
                <label>Room</label>
                <input type="text" placeholder="Enter room name" id="roomName" name="roomName" />
              </div>
            </div>
            <br />
            <div class="ui buttons">
              <div id="create-btn" class="ui submit orange button">Create Room</div>
              <div class="or"></div>
              <div id="join-btn" class="ui submit green button">Join Room</div>
            </div>
          </div>
          <div id="chat"></div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
