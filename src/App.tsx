import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import './App.css';


export default function App(): JSX.Element {
  return (
    <div className='app-ctn'>
      <Router>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
