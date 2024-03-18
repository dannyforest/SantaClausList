<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add']);
const name = ref('');
const giftsList = ref([]);
const naughty = ref(false);

const handleSubmit = () => {
    emit('add',addname.value, giftsList.value, naughty.value);
}

</script>

<template>
    <form id="addToList" @submit.prevent="handleSubmit">
        <h2>Add to the list</h2>
        <input v-model="name" type="text" placeholder="Your name" required></input>
        <input v-model="giftsList" type="text" placeholder="Add your gift name" required></input>
        <div class="form-footer">
        <label for="naughty">Naughty</label>
        <input v-model="naughty" type="checkbox" required name="naughty nuts"></input>
        <button type="submit">add</button>
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
</style>