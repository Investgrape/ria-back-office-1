import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardContent from './components/DashboardContent';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <DashboardContent />
      </MainLayout>
    </Router>
  );
};

export default App;