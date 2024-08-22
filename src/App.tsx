import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/global";
import routesConfig from "./routes";

const router = createBrowserRouter(routesConfig);

function App(): JSX.Element {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}

export default App;
