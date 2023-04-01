<template>
    <div>
        <div class="p-2 m-2 border border-primary-color rounded-sm">
            <div v-for="category in data"
            :key="category"
            >

                <div class="flex flex-wrap flex-row gap-2">
                    <span>{{ category.name }} : ID = {{ category.id }} </span>
                </div>
                <div class="ml-5 rounded-md bg-gray-300 p-2 flex flex-wrap gap-2">
                    <span >Subcategories</span> 
                    <span> : </span>
                    <span
                    v-for="subcategory in data" 
                    :key="subcategory"
                    >
                    <span class="text-primary"
                    v-if="subcategory.parent_id==category.id"
                    >{{ subcategory.name }} ,</span>
                    </span>
                </div>
            </div>

        </div>


    </div>
</template>


<script setup>

import { ref } from 'vue';


// ..............import files ends here.....................



const data= ref([]);

axios.get("/api/categories").then(response=>{
    data.value=response.data.data;
}).catch(error=>{
    console.error(error);
});


</script>


