<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  price: String | Number,
  description: String,
  imgSrc: String,
});

const productImg = 'https://picsum.photos/100';
const isHovered = ref(false);
const onMouseOver = (evt) => {
  isHovered.value = true;
};
const onMouseOut = (evt) => {
  isHovered.value = false;
};
</script>

<template>
  <div
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    :class="{
      'ring-2 ring-orange-500': isHovered,
    }"
    class="rounded-tl-3xl rounded-br-3xl shadow-product shadow-neutral-500/25 w-60 px-5 py-7 flex flex-col gap-3"
  >
    <div
      class="rounded-md overflow-hidden h-64 flex items-center justify-center"
    >
      <img
        class="w-4/5 h-2/3 object-contain"
        :src="imgSrc || productImg"
        alt="this is a random photo "
      />
    </div>
    <div>
      <h5 class="text-xl font-semibold text-neutral-800">
        {{ title }}
      </h5>
    </div>
    <p class="text-xl text-green-800 font-semibold">${{ price }}</p>
  </div>
</template>
