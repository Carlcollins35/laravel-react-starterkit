import React, { Component, lazy, Suspense } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="animated fadeIn">
        Dashboard Content
      </div>
    );
  }
}

export default Dashboard;
