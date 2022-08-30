import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
                height="100vh"
                projectID="33a006a6-20b6-42ca-93d6-cd1066088617"
                userName="javascriptmastery"
                userSecret="123123"
                renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}

        />
    );
}
export default App;