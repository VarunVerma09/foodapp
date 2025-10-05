import React from 'react';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [dispatch]);
  return (
    <div>
     <Home/>
    </div>
  );
}

export default App;
