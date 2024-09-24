<template>
  <div id="app" class="full-height">
    <header>
      <div class="header-container">
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" alt="Carwash Logo" class="logo">
        </div>
        <nav class="navigation">
          <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <FooterView />
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    FooterView
  }
}
</script>

<style>
#app.full-height {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header-container {
  background-color: white;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo-wrapper {
  flex-shrink: 0;
}

.logo {
  width: 250px; 
  height: auto;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-links {
  list-style-type: none;
  padding-left: 550px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px; 
}

.nav-links li {
  margin-left: 20px;
}

nav a {
  color: rgb(23, 179, 251);
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
  padding-bottom: 5px;
}

nav a:hover {
  color: #66d9ef; 
  border-bottom-color: #3498db; 
}

nav a.router-link-exact-active {
  color: #3498db;
  border-bottom-color: #42b983; 
}

nav a:hover.router-link-exact-active {
  color: #66d9ef; 
}

main.flex-grow {
  flex-grow: 1;
  overflow-y: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>