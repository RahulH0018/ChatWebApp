import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('95f16b91-9dd5-4ed4-afac-213cf292e58b',props.user.username, props.user.secret)
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    );
}

export default ChatsPage;
//import { PrettyChatWindow } from "react-chat-engine-pretty";

//const ChatsPage = (props) => {
  //return (
    //<div style={{ height: "100vh", width: "100vw" }}>
      //<PrettyChatWindow
        //projectId={'8d19d358-d3fa-4663-83d0-dc0cb1831edaD'}
        //username={props.user.username} // adam
        //secret={props.user.secret} // pass1234
        //style={{ height: "100%" }}
      ///>
    //</div>
  //);
//};

//export default ChatsPage;