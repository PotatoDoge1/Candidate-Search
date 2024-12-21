import { Outlet } from 'react-router-dom';
import Navigator from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navigator />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
