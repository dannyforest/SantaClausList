<script setup>

import SantaClausList from "@/components/SantaClausList.vue";
import AddToList from "@/components/AddToList.vue";
const add = () => {
  console.log("add");
};
</script>

<template>

  <SantaClausList />
  <AddToList @add="add()"/>

</template>
