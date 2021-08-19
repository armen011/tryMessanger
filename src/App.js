import "./App.css";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";
import Hello from "./hello";

function App() {
  return (
    <div>
      hello
      <LiveChatLoaderProvider
        provider="messenger"
        providerKey="112237750634324"
        appID="111222333444555"
        locale="en_US"
      >
        <Messenger />
      </LiveChatLoaderProvider>
    </div>
  );
}

export default App;
