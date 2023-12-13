import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CycleTimeCOA from '../pages/CycleTimeCOA';
import ClaimShipping from '../pages/ClaimShipping';
import PendingInvoice from '../pages/PendingInvoice';
import NotFound from '../pages/404';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Layout() {
  const [currentPage, setCurrentPage] = useState('Cycle Time COA');

  const handleNavigation = (pageName: string) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Cycle Time COA':
        return <CycleTimeCOA />;
      case 'Claim Shipping':
        return <ClaimShipping />;
      case 'Pending Invoice':
        return <PendingInvoice />;
      default:
        return <NotFound />;
    }
  };

  return (
    <Router>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar onNavigate={handleNavigation} />
        </div>
        <div className="col-span-7">{renderPage()}</div>
      </div>
    </Router>
  );
}
