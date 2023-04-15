import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_69 from './pages/HomePage_69';
import BlogsStaticPage_69 from './pages/BlogsStaticPage_69';
import BlogLocalJsonpage_69 from './pages/BlogsLocalJsonPage_69';
import BlogsNodeSeverPage_69 from './pages/BlogsNodeSeverPage_69';

function App_69() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/card_69' element={<BlogsStaticPage_69 />} />
        <Route path='/card2_local_69' element={<BlogLocalJsonpage_69 />} />
        <Route path='/card2_node_69' element={<BlogsNodeSeverPage_69 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App_69;
