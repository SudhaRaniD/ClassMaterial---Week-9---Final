import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
 import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './index.css';

import App from './App';
import Week9_01_FirstComponent from './classMaterial/week9/Week9_01_FirstComponent';
import Week9_02_Parent from './classMaterial/week9/Week9_02_Parent';
import Week9_03_Form from './classMaterial/week9/Week9_03_Form';
import Week10_01_PropProject from './classMaterial/week10/Week10_01_PropProject'
import Project30_Parent from './classProjects/Project30_Parent';
import Project31_Form from './classProjects/Project31_Form';
import Week9_HW_FramerMotion from './homeWork/week9/Week9_HW_FramerMotion';
import Week10_HW_PlaceHolder from './homeWork/week10/Week10_HW_PlaceHolder';

ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/classMaterial/week9_01" element={<Week9_01_FirstComponent />} />
        <Route path="/classMaterial/week9_02" element={<Week9_02_Parent />} />
        <Route path="/classMaterial/week9_03" element={<Week9_03_Form />} />
        <Route path="/classProjects/project30" element={<Project30_Parent />} />
        <Route path="/classProjects/project31" element={<Project31_Form />} />
        <Route path="/classProjects/project32" element={<Project30_Parent />} />
        <Route path="/classProjects/project33" element={<Project30_Parent />} />
        <Route path="/classProjects/project34" element={<Project30_Parent />} />
        <Route path="/classProjects/project35" element={<Project30_Parent />} />
        <Route path="/homeWork/week9" element={<Week9_HW_FramerMotion />} />
        <Route path="/homeWork/week10" element={<Week10_HW_PlaceHolder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
