import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';

import ProductList from './pages/ProductList';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
