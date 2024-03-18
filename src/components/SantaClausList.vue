<!-- SantaList.vue -->
<template>
  <div class="santa-list">
      <h2>Santa's List</h2>
      <ul>
          <li v-for="(kid, index) in kidList" :key="index">
              <span>{{ kid.name }}</span>
              <span>{{ kid.request }}</span>
              <span>{{ kid.wasNice ? "Nice" : "Naughty" }}</span>
          </li>
      </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const kidList = ref([]);

onMounted(() => {
  const storedList = localStorage.getItem("santaList");
  if (storedList) {
      kidList.value = JSON.parse(storedList);
  }
});
</script>

<style scoped>
.santa-list {
  max-width: 400px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input[type="text"],
button {
  margin-bottom: 10px;
  padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

span {
  margin-right: 10px;
}
</style>
