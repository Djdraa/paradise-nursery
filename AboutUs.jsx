import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Paradise Nursery</h1>

      <p style={styles.text}>
        Welcome to <strong>Paradise Nursery</strong>, your trusted online store for beautiful indoor plants.
        Our mission is to bring nature closer to your home by offering a wide variety of plants that improve
        your space, your mood, and your well-being.
      </p>

      <p style={styles.text}>
        We carefully select each plant to ensure quality, freshness, and sustainability. Whether you are a
        beginner or an experienced plant lover, we have the perfect plant for you.
      </p>

      <p style={styles.text}>
        At Paradise Nursery, we believe that plants are more than decoration — they are life, energy,
        and harmony. Our goal is to provide an easy and enjoyable shopping experience with a modern
        and user-friendly interface.
      </p>

      <p style={styles.text}>
        Thank you for choosing us to be part of your green journey 🌿
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
};

export default AboutUs;
