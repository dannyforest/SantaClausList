<!-- SantaList.vue -->
<template>
    <div class="santa-list container">
        <div class="header text-center">
            <h2 class="mb-4">🎅 Santa's List 🎄</h2>
            <p class="lead">Ho ho ho! Check out who's been naughty or nice this year!</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ul class="list-group festive-list">
                    <li class="list-group-item header-item">
                        <div class="row fw-bold">
                            <div class="col-4">Kid</div>
                            <div class="col-4">Gift Dreamed</div>
                            <div class="col-4">Nice or Naughty?</div>
                        </div>
                    </li>
                    <li v-for="(kid, index) in kidList" :key="index" class="list-group-item festive-item">
                        <div class="row">
                            <div class="col-4">{{ kid.name }}</div>
                            <div class="col-4">{{ kid.request }}</div>
                            <div class="col-4" :class="{ 'text-success': kid.wasNice, 'text-danger': !kid.wasNice }">
                                {{ kid.wasNice ? "Nice 😇" : "Naughty 😈" }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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

<style scoped></style>
