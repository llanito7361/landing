<template>
    <div class="search-container">
      <div class="search-input">
        <input
          v-model="searchQuery"
          @input="filterSuggestions"
          placeholder="Buscar..."
        />
        <div class="dropdown" v-if="filteredSuggestions.length">
          <ul>
            <li v-for="suggestion in filteredSuggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
              {{ suggestion }}
            </li>
          </ul>
        </div>
        <div class="separator"></div>
        <button class="search-icon" @click="executeSearch">
          🔍
        </button>
      </div>
      <div class="search-tags">
        <div
          v-for="(tag, index) in displayedTags"
          :key="index"
          class="tag-item"
        >
          {{ tag }}
          <button @click="removeTag(index)" class="remove-tag">x</button>
        </div>
      </div>
      <button class="search-btn" @click="executeSearch">Buscar</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'SearchComponent',
    setup() {
      const searchQuery = ref('');
      const suggestions = ref(['rondas', 'pendulo', 'amor', 'mundo', 'felicidad']);
      const displayedTags = ref(['rondas', 'pendulo', 'amor']);
      const filteredSuggestions = ref([]);
  
      const filterSuggestions = () => {
        filteredSuggestions.value = suggestions.value.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      };
  
      const selectSuggestion = (suggestion) => {
        if (!displayedTags.value.includes(suggestion)) {
          displayedTags.value.push(suggestion);
        }
        searchQuery.value = '';
        filteredSuggestions.value = [];
      };
  
      const removeTag = (index) => {
        displayedTags.value.splice(index, 1);
      };
  
      const executeSearch = () => {
        alert('Buscando con los filtros: ' + displayedTags.value.join(', '));
      };
  
      return {
        searchQuery,
        displayedTags,
        filteredSuggestions,
        filterSuggestions,
        selectSuggestion,
        removeTag,
        executeSearch,
      };
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .search-input {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
  }
  
  .search-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 1000;
  }
  
  .dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown li {
    padding: 8px;
    cursor: pointer;
  }
  
  .dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  .separator {
    width: 1px;
    height: 28px;
    background-color: #ccc;
    margin: 0 8px;
  }
  
  .search-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    outline: none;
  }
  
  .search-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;
  }
  
  .tag-item {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    background-color: #e1e1e1;
    border-radius: 16px;
    font-size: 14px;
  }
  
  .remove-tag {
    background: none;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    font-size: 12px;
    outline: none;
  }
  
  .search-btn {
    align-self: flex-start;
    padding: 8px 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-btn:hover {
    background-color: #218838;
  }
  </style>
  