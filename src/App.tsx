import { Outlet } from 'react-router-dom';
import Navigator from './components/Nav';

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
