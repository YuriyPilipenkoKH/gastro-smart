import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from '../components/Container/Container';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

const Home = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

function App() {
  return (
    <Container >
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route  index element={<Home />} />

      <Route path="/register"
            element={<PublicRoute
                     redirectTo="/profile"
                    component={<RegisterPage />} />
                     }/>  
      <Route path="/login"
            element={ <PublicRoute
                      redirectTo="/profile"
                    component={<LoginPage />} />
                     } />
      <Route  path="/profile"
              element={ <PrivateRoute
                        redirectTo="/login"
                        component={<UserPage />} />
                      } />

      <Route path="*" element={<Navigate to="/" />} />
     </Route>
    </Routes>
    {/* {loading && Loader} */}
    </Container>
  );
}

export default App;