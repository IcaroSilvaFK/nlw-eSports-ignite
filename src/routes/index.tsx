import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Layout } from '../layout';
import { Ads } from '../pages/Ads';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/game/:name" element={<Ads />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
