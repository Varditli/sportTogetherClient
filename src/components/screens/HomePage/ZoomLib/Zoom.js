import { ZoomMtg } from '@zoomus/websdk';
import GridItem from '../../../Grid/GridItem';


export default function Zoom() {
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
ZoomMtg.setZoomJSLib('http://localhost:9999/custom/path/to/lib/', '/av')

// setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
var signature = 'http://localhost:3001'
var apiKey = 'JWT_API_KEY'
var meetingNumber = 123456789
var role = 0
var leaveUrl = 'http://localhost:9999'
var userName = 'WebSDK'
var userEmail = ''
var passWord = ''

ZoomMtg.init({
  leaveUrl: leaveUrl,
  isSupportAV: true,
  success: (success) => {
    console.log(success)

    ZoomMtg.join({
      signature: signature,
      meetingNumber: meetingNumber,
      userName: userName,
      apiKey: apiKey,
      userEmail: userEmail,
      passWord: passWord,
      success: (success) => {
        console.log(success)
      },
      error: (error) => {
        console.log(error)
      }
    })

  },
  error: (error) => {
    console.log(error)
  }
})

  return(
    <div>
      <GridItem>
      
      </GridItem>
    </div>
  )
}
  
