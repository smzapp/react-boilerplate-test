import './App.css';
import { useSelector } from 'react-redux';
import MainRoutes from './routes/MainRoutes';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(MainRoutes);
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
