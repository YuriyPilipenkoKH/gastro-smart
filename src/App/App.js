import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import LoginPage from 'pages/LoginPage';
import UserPage from 'pages/UserPage';
import RegisterPage from 'pages/RegisterPage';



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