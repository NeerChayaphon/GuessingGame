
import './App.css';

import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './Page/Home';
import Login from './Page/Login';
import ErrorPage from './Page/ErrorPage';
import UserContextProvider from './context/userContext';

function App() {
  return (
    <UserContextProvider> 
     <Router>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<ErrorPage />}/>
       </Routes>
     </Router>
     </UserContextProvider>
  );
}

export default App;


  // const requestOptions = {
  //   method: 'GET',
  //   headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEiLCJOYW1lIjoiVGVzdCBVc2VyIiwiZXhwIjoxNjQ1Mjg2ODQxfQ.u3tOB3za5DVyj7ZcqPy-JNGj_a-54YWdqxe614s07Ok'}
  // }
  // const {data} = useFetch('http://localhost:8080/showAnswer',requestOptions)
  // if (data) {
  //   console.log(data)
  // }