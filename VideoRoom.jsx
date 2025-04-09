import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

function VideoRoom() {
  let {roomId} = useParams()
const myMeeting = async(element)=>{
  const appID=448797626 ;
  const serverSecret= '9ff9e8edc91290e1435601552169ced5';
  const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret, roomId, Date.now().toString(), "pragati");
  const zp = ZegoUIKitPrebuilt.create(token);

  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:`http://localhost:5173/room/${roomId}`,
      },
    ],
    scenario: {
     mode: ZegoUIKitPrebuilt.OneONoneCall,
    },
  });
};

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom