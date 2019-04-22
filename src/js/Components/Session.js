import Blackboard from './Blackboard';
import Editor from './Editor';
import React, { Component } from "react";

class Session extends Component {
    render() {
        return (
          <div className="Session">
            <Editor/>
            <Blackboard/>
          </div>
        );
    }
}

export default Session;