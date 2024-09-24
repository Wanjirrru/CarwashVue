<template>
    <div class="services-view">
      <h2>Our Services</h2>
      <div class="service-cards">
        <div v-for="service in services" :key="service.id" class="service-card">
          <img :src="require(`../assets/${service.image}`)" :alt="service.name">
          <div class="card-content">
            <h3>{{ service.name }}</h3>
            <p>Price: ${{ service.price }} </p>
            <button @click="bookService(service)">Book</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesView',
    data() {
      return {
        services: [
          {
            id: 1,
            name: 'Dashboard Polish',
            price: 30,
            image: 'dashboard-polish.jpg'
          },
          {
            id: 2,
            name: 'Engine Wash',
            price: 60,
            image: 'engine-clean.jpg'
          },
          {
            id: 3,
            name: 'Under Wash',
            price: 50,
            image: 'underwash.jpg'
          },
          {
            id: 3,
            name: 'Tyre shining',
            price: 20,
            image: 'tyre-shine.jpg'
          }
        ]
      }
    },
    methods: {
      bookService(service) {
        console.log(`Booking ${service.name}`);
        alert(`You have booked the ${service.name} for $${service.price}.`);
      }
    }
  }
  </script>
  
  <style scoped>

  
  .service-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .service-card {
    margin: 20px;
    width: calc(33.33% - 20px);
    background-color: #f4f4f4;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .service-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
  }
  
  h3 {
    margin-bottom: 10px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  @media screen and (max-width: 768px) {
    .service-card {
      width: calc(50% - 20px);
    }
  }
  
  @media screen and (max-width: 480px) {
    .service-card {
      width: 100%;
    }
  }
  </style>