import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login';
import Post from './pages/post/post';
import { ViewPost } from './pages/post/view-post';


function App() {
  return (
    <div className='bg-gray-200 h-fill max-w-screen-xl mx-auto my-auto'>

      {/* <div className='fixed h-screen right-1'>
        <iframe
          src="https://web.powerva.microsoft.com/environments/Default-c0bcea5f-7af1-494d-a33f-85f77a416f2c/bots/Default_testBot/webchat?__version__=2"
          className='w-100 h-96 z-50 bg-white bottom-0 absolute right-0'></iframe>
      </div> */}

      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/posts' element={<Post />} />
            <Route path={'/posts/:id'} element={<ViewPost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
