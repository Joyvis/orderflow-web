import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListResource from '@/pages/ListResource';
// import EditUser from './features/users/EditUser';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListResource resourceType="users" />} />
            <Route
              path="/users"
              element={<ListResource resourceType="users" />}
            />
            {/* <Route
              path="/users/create"
              element={<CreateUser onCreate={() => {}} />}
            />
            <Route
              path="/users/:id"
              element={<EditUser onUpdate={() => {}} />}
            /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </QueryClientProvider>
  );
};

export default App;
