<template>
  <nav class="nav">
    <nuxt-link class="nav-link logo" to="/">ARCANO</nuxt-link>
    <div class="nav-links">
      <nuxt-link class="nav-link" to="/about">¿Quienes Somos?</nuxt-link>
      <nuxt-link class="nav-link" to="/services">Servicios</nuxt-link>
      <nuxt-link class="nav-link" to="/tarotistas">Expertos</nuxt-link>
      <nuxt-link class="nav-link" to="/contact">
        <button class="contact-button">UNETE!</button>
      </nuxt-link>
    </div>
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;  
  padding: 10px 20px;    
  background-color: #f8f9fa 
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.contact-button {
  background-color: #007bff;  
  color: white;  
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #0056b3; 
}
</style>
