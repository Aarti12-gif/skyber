import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import AgriInputPurchase from  './components/agri-input-purchase-request'
import AgriPurchase from  './components/agri-purchase-managagement'
import AgriInputMaster from  './components/agri-input-master-maintenance'
import SupplierMaster from  './components/supplier-master-maintenance'

const styles = {
  height: '100%',
};

const App = () => (
  <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={150}
      resizerStyle={styles}
    >
      <nav class="navbar navbar-dark bg-dark">
        <div><Link to="/agri-purchase">Agri-Purchase Management</Link></div>
        <hr class="mt-2 mb-3" />
        <div><Link to="/agri-input-master">Agri-Input Master Maintenance</Link></div>
        <hr class="mt-2 mb-3" />
        <div><Link to="/supplier-master">Supplier Master Maintenance</Link></div>
        <hr class="mt-2 mb-3" />
        <div><Link to="/">Agri-Input Purchase Requests</Link></div>
      </nav>
      <div>
        <Route exact path="/" component={AgriInputPurchase} />
        <Route exact path="/agri-purchase" component={AgriPurchase} />
        <Route exact path="/agri-input-master" component={AgriInputMaster} />
        <Route exact path="/supplier-master" component={SupplierMaster} />
      </div>
    </SplitPane>
  </Router>
);



export default App;
