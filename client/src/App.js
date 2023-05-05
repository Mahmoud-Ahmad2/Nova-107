import React, { useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { checkUser } from './redux/features/auth/authSlice';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import LoadingHome from './components/LoadingHome';

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUser());
    document.title = 'Nova | Home';
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingHome />
      )
        : (
          <div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}

    </div>
  );
};

export default App;
