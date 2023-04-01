<template>
    <div class="flex flex-wrap justify-center items-center p-3">
        <div class="flex flex-wrap justify-center gap-3">
            <BookCard
                v-for="book in books"
                :key="book.id"
                :id="book.id"
                :title="book.title"
                :image="book.image"
                :author="book.author"
                :owner="book.owner"
                :price="book.price"
                :description="book.description"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BookCard from "../components/BookCard.vue";


// ..............import files ends here.....................

const books = ref([]);

axios.get("/api/books").then(response=>{
    books.value=response.data.data;
}).catch(error=>{
    console.error(error);
});



</script>

