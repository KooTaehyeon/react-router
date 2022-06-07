import { Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route
            path={'/'}
            exact
            element={<Navigate replace to='/welcome' />}
          />
          <Route path={'/welcome'} element={<Welcome />} />
          <Route path={'/products'} element={<Products />} exact />
          <Route path={'/products/:productId'} element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
