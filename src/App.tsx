import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from 'components/LogIn';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import ContextWrapper from 'context';
import './App.css';


export default function App(): JSX.Element {
  return (
    <div className='app-ctn'>
      <ContextWrapper>
        <Router>
          <Sidebar />
          <Routes>
            <Route
              path='/'
              element={<Main />} />
          </Routes>
          <LogIn />
          <Footer />
        </Router>
      </ContextWrapper>
    </div>
  );
}
