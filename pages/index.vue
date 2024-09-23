 <template>
   <Bloque1 />
  <hr>
  <MidleBar />
  <hr>
  <Bloque2 />
 </template>
<script>
import Bloque1 from '~/components/Bloque1.vue';
import Bloque2 from '~/components/Bloque2.vue';
import MidleBar from '~/components/MidleBar.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  name: "CustomComponent"
};
</script>

<style scoped>
/* Estilos generales */
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

/* Estilos para la sección izquierda */
.left {
  flex: 1;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin: 10px 0;
}

p span {
  color : blue
}
.small-images {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.small-images img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

/* Estilos del switcher */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  margin-bottom: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(14px);
}

/* Estilos para la sección derecha */
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Responsivo para tablet */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .left, .right {
    flex: none;
    width: 90%;
    padding: 10px;
  }

  .small-images img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }
}

/* Responsivo para móvil */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }

  .left, .right {
    width: 100%;
    padding: 5px;
  }

  .small-images {
    justify-content: center;
  }

  .small-images img {
    width: 30px;
    height: 30px;
  }

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 12px;
  }

  .switch {
    width: 28px;
    height: 16px;
  }

  .slider:before {
    width: 12px;
    height: 12px;
  }
}
</style>
