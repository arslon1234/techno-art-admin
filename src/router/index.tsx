import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import { SignIn, SignUp,MainLayout, Products,Categories } from "@pages";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="main/*" element={<MainLayout/>}>
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          </Route>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default Index;
  