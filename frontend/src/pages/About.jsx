import React from 'react';

const AboutUsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.content}>
        {/* <Carousel></Carousel> */}
        <p>Welcome to Planet Surf website! We are passionate about helping you discover new destinations and create unforgettable travel experiences.</p>
        <p>Our team of travel enthusiasts curates the best travel tips, recommendations, and itineraries to inspire and guide you on your journey. Whether you're planning a relaxing beach vacation, an adventurous trek through the mountains, or a cultural exploration in a vibrant city, we're here to make your travel dreams a reality.</p>
        <p>At our core, we believe that travel has the power to enrich lives, broaden perspectives, and create lasting memories. We strive to share our love for travel and empower you to explore the world with confidence and excitement.</p>
        <p>Thank you for choosing us as your trusted travel companion. Let's embark on this incredible journey together!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
  },
};

export default AboutUsPage;
