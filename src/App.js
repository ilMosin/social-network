import {Routes, Route} from "react-router-dom";
import './App.css';
import Notfound from './pages/NoFound/Notfound'
import PostPage from "./pages/PostPage/PostPage";
import Settings from "./pages/Settings/Settings";
import Layout from "./components/Layout/Layout";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import Dialogs from "./pages/Dialogs/DIalogs";
import Homepage from "./pages/Home/Home";

function App(props) {
    console.log('props',props)
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Layout />}>
                    <Route path='home' element={<Homepage />} />
                    <Route path='post' element={<PostPage posts={props?.state?.postPage?.posts || {}}
                                                          dispatch={props.dispatch}
                                                          newPostText={props?.state?.postPage?.newPostText || {}}
                    />}/>
                    <Route path='dialogs/' element={<Dialogs messages={props?.state?.messagesPage?.messages || {}}
                                                             dialogs={props?.state?.messagesPage?.dialogs || {}}
                                                             dispatch={props.dispatch}
                                                             newMessageText={props?.state?.messagesPage?.newMessageText || {}}

                    />} />
                </Route>
                <Route path='/' element={ <Layout /> }>
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
