<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add']);
const name = ref('');
const gifts = ref([]);
const gift = ref('');
const naughty = ref(false);

const handleSubmit = () => {
    emit('add', name.value, gifts.value, naughty.value);
}

let shouldContinue = true;
const addGift = () => {
    gifts.value.push(gift.value);
    gift.value = '';
    while(shouldContinue) {
        alert("RICK");
        alert("ROLLED");
    }
}

</script>

<template>
    <section class="d-flex justify-content-center">
    <form class="card" id="addToList" @submit.prevent="handleSubmit()">
        <h2>Add to the list</h2>
        <input class="form-control" v-model="name" type="text" placeholder="Your name" required></input>
        <input class="form-control" v-model="gift" type="text" placeholder="Add your gift name"></input>
        <button id="addGift" class='btn' type="button" @click="addGift()">Add another gift</button>
        <div class="form-footer">
        <label for="naughty"><strong>Naughty?</strong></label>
        <input v-model="naughty" type="checkbox" name="naughty"></input>
        <button id="submit" class='btn' type="submit">add</button>
        </div>
    </form>
</section>
</template>

<style scoped>
#addToList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    gap: 1.5rem;
    padding: 3rem;
    border: 2px solid #b30f0f;
  
}
h2 {
    margin-bottom: 10px;
}
.form-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
}
label{
    padding-top: 0.5rem;
}
.btn {
    padding: 5px 15px;
    background-color: #b30f0f;
    opacity: 0.9;
    color: white;
    border: none;
    cursor: pointer;
}
.btn:hover {
    scale: 1.1;
}


</style>