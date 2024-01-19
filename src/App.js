import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NavBar from './components/common/NavBar';
import Home from './components/common/Home';
import UsersWithRQ from './components/featured/UsersWithRQ';
import UserWithRQ from './components/featured/UserWithRQ';
import UsersWithoutRQ from './components/featured/UsersWithoutRQ';
import PaginatedRQ from './components/featured/PaginatedRQ';
import InfiniteRQ from './components/featured/InfiniteRQ';
import ParallelRQ from './components/featured/ParallelRQ';
import DynamicParallelRQ from './components/featured/DynamicParallelRQ';
import DependentRQ from './components/featured/DependentRQ';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/users' element={<UsersWithoutRQ />} />
            <Route path='/users-rq/:userId' element={<UserWithRQ />} />
            <Route path='/users-rq' element={<UsersWithRQ />} />
            <Route path='/paginated-rq' element={<PaginatedRQ />} />
            <Route path='/infinite-rq' element={<InfiniteRQ />} />
            <Route path='/parallel-rq' element={<ParallelRQ />} />
            <Route
              path='/dynamic-parallel-rq'
              element={<DynamicParallelRQ />}
            />
            <Route path='/dependent-rq' element={<DependentRQ />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
