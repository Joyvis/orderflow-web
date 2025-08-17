import React from "react";
import ListUsers from "./features/users/ListUsers";

const App = (): React.JSX.Element => {
  return (
    // REPLACE WITH SHADCN COMPONENTS IN THE FUTURE
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar placeholder */}
      <header className="h-16 bg-white shadow flex items-center px-6">
        {/* Future: Navbar content */}
        <span className="text-xl font-bold">Orderflow</span>
      </header>
      <div className="flex flex-1">
        {/* Sidebar/Menu placeholder */}
        <aside className="w-64 bg-white border-r transition-all duration-300 ease-in-out">
          {/* Future: Sidebar/Menu content (Users, Accounts, etc) */}
          <nav className="p-4">
            <ul>
              <li className="mb-2 font-semibold text-gray-700">Users</li>
              <li className="mb-2 text-gray-600">Accounts</li>
              {/* Add more menu items as needed */}
            </ul>
          </nav>
        </aside>
        {/* Main content area with reserved space that can expand if sidebar is hidden */}
        <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
          <ListUsers />
        </main>
      </div>
    </div>
  );
};

export default App;