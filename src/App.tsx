import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        {/* Your main content here */}
      </div>
    </BrowserRouter>
  );
}

export default App