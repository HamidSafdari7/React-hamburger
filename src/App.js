import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BurgerBuilder from './components/BurgerBuilder ';
import Layout from './pages/dashboard/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout />
          }
        >
          <Route index element={<BurgerBuilder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
