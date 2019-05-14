// import React, { Component } from 'react'
// import SimpleWebRTC from 'SimpleWebRTC'




// export default class VideoCall extends Component {
  
//   componentDidMount(){
//     const webrtc = new SimpleWebRTC({
//       // the id/element dom element that will hold "our" video
//       localVideoEl: 'local-video',
//       // the id/element dom element that will hold remote videos
//       remoteVideosEl: 'remote-videos',
//       // immediately ask for camera access
//       autoRequestMedia: true,
//       debug: false,
//       detectSpeakingEvents: true,
//       autoAdjustMic: false,
//     });
//     webrtc.on('localStream', () => {
//       // localImageEl.hide();
//       // localVideoEl.show();
//     });

    
//   }
  
//   render() {
//     return (
//       <div>
//         {/* <img  id="local-image" class="ui large image" src="images/image.png"> */}
//         <video id="local-video" class="ui large image"  autoplay></video>
//         <h4 class="ui center aligned header" style="margin:0;">
//           Local Camera
//         </h4>
//       </div>
//     )
//   }
// }
