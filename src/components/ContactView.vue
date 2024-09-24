<template>
    <div class="contact-view">
      <h2>Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="formData.subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
      
      <p v-if="successMessage">{{ successMessage }}</p>
      
      <p v-if="errorMessage">{{ errorMessage }}</p>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        successMessage: '',
        errorMessage: ''
      }
    },
    methods: {
      handleSubmit() {

        console.log(this.formData);
        
        Object.keys(this.formData).forEach(key => {
          this.formData[key] = '';
        });
        
        this.successMessage = 'Thanks for reaching out! Your message has been sent. We will get back to you shortly!';
        setTimeout(() => {
          this.successMessage = '';
        }, 5000); 
        
        this.errorMessage = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-view {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #50edff;
  }
  
  .success-message {
    color: green;
  }
  
  .error-message {
    color: red;
  }
  </style>