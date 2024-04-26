import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam
        eu tortor condimentum dignissim. Nulla facilisi. Donec convallis nisl
        eget lorem mollis, non rutrum erat consequat. Phasellus non felis eu
        tortor fringilla tempus.
      </p>
      <p style={styles.description}>
        Fusce et elit eros. Vestibulum ac vestibulum turpis. In ut ligula
        consectetur, rhoncus justo non, venenatis mauris. Proin semper semper
        ante, sed facilisis ligula ultrices sit amet.
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '28px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

export default About;
