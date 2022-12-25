import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
        </Route>
    )
)


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
