import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './LayOut/Main';
import AlomVai from './Pages/AlomVai';
import FerdousVai from './Pages/FerdousVai';
import RabiVai from './Pages/RabiVai';
import SamairaApo from './Pages/SamairaApo';
import ShuvankorVai from './Pages/ShuvankorVai';
import Naeem from './Pages/Naeem';

const Root = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [

        {
            path: '/',
            element: <AlomVai/>
        },
        {
            path: '/ferdous',
            element: <FerdousVai/>
        },
        {
            path: '/rabi',
            element: <RabiVai/>
        },
        {
            path: '/samaira',
            element: <SamairaApo/>
        },
        {
            path: '/shuvankor',
            element: <ShuvankorVai/>
        },
        {
            path: '/naeem',
            element: <Naeem/>
        }
      ]
    },
  ]);
export default Root;