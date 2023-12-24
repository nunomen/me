<template>
    <nav :class="navClass" :style="navStyle">
      <div v-if="logoUrl" class="logo">
        <img :src="logoUrl" alt="Logo">
      </div>
      <ul v-if="showNav" class="nav-items">
        <slot />
      </ul>
      <button @click="toggleNav" class="nav-toggle-button">
        {{ showNav ? 'Hide' : 'Show' }}
      </button>
    </nav>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  
  export default {
    name: 'DynamicIsland',
    props: {
      logoUrl: {
        type: String,
        required: false,
        default: ''
      },
      initialShow: {
        type: Boolean,
        default: false
      },
      scrollThreshold: {
        type: Number,
        default: 150
      },
      customStyles: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const showNav = ref(props.initialShow);
      const hidden = ref(false);
      let previousY = 0;
  
      const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > previousY && currentY > props.scrollThreshold) {
          hidden.value = true;
        } else {
          hidden.value = false;
        }
        previousY = currentY;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      const toggleNav = () => {
        showNav.value = !showNav.value;
      };
  
      const navClass = computed(() => {
        return [
          'navbar',
          hidden.value ? 'navbar-hidden' : 'navbar-visible',
          showNav.value ? 'navbar-expanded' : 'navbar-collapsed'
        ].join(' ');
      });
  
      const navStyle = computed(() => {
        return {
          ...props.customStyles,
          transition: 'all 0.5s ease'
        };
      });
  
      return { showNav, hidden, toggleNav, navClass, navStyle };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 1rem;
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .logo img {
    height: 40px;
  }
  
  .nav-items {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-toggle-button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
  }
  
  .navbar-hidden {
    top: -100px;
  }
  
  .navbar-expanded {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  </style>
  