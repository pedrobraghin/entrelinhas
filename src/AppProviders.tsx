import { QueryProvider } from "./contexts/QueryProvider";
import { UserProvider } from "./contexts/UserContext";
import { BlogProvider } from "./contexts/BlogContext";
import App from "./App";

export function AppProviders() {
  return (
    <QueryProvider>
      <BlogProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </BlogProvider>
    </QueryProvider>
  );
}
