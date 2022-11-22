import {Routes, Route} from "react-router-dom";
import './App.css';
import Notfound from './pages/NoFound/Notfound'
import Settings from "./pages/Settings/Settings";
import Layout from "./components/Layout/Layout";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import Homepage from "./pages/Home/Home";
import PostsContainer from "./components/Posts/PostsContainer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='home' element={<Homepage/>}/>
                    <Route path='post' element={<PostsContainer />}/>
                    <Route path='dialogs/' element={<DialogsContainer />}/>
                </Route>
                <Route path='/' element={<Layout/>}>
                    <Route path='settings' element={<Settings/>}/>
                    <Route path='friends' element={<Friends/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='groups' element={<Groups/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

/*/*<Route path='dialogs/' element={<Dialogs messages={props?.state?.messagesPage?.messages || {}}
                                                             dialogs={props?.state?.messagesPage?.dialogs || {}}
                                                             dispatch={props.dispatch}
                                                             newMessageText={props?.state?.messagesPage?.newMessageText || {}}*/
