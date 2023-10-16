import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';



function App() {
  return (
    <Container >
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route  index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
     </Route>
    </Routes>
    {/* {loading && Loader} */}
    </Container>
  );
}

export default App;