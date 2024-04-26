import React from 'react';
import { Link } from 'react-router-dom';
// import Users from './Users';
// import Services from './Services';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Admin Dashboard</h2>
        <ul style={styles.nav}>
          <li style={styles.navItem}>
            <Link to="/">Dashboard</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/users">Users</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/services">Services</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      
      {/* Main Content */}
      <div style={styles.content}>
        <h1>Welcome to Admin Dashboard</h1>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  nav: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '10px',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default AdminDashboard;
