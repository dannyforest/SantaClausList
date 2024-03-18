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
const addGift = () => {
    gifts.value.push(gift.value);
    gift.value = '';
}

</script>

<template>
    <form id="addToList" @submit.prevent="handleSubmit()">
        <h2>Add to the list</h2>
        <input v-model="name" type="text" placeholder="Your name" required></input>
        <input v-model="gift" type="text" placeholder="Add your gift name"></input>
        <button id="addGift" class='btn' type="button" @click="addGift()">Add another gift</button>
        <div class="form-footer">
        <label for="naughty">Naughty?</label>
        <input v-model="naughty" type="checkbox" required name="naughty"></input>
        <button id="submit" class='btn' type="submit">add</button>
        </div>
    </form>
</template>

<style scoped>
#addToList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    gap: 10px;
    padding: 20px;
    border: 1px solid #b30f0f;
}
h2 {
    margin-bottom: 10px;
}
.form-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
label{
    padding-top: 5px;
}
.btn {
    padding: 5px 15px;
    margin: 5px;
    background-color: #b30f0f;
    color: white;
    border: none;
    cursor: pointer;
}
</style>