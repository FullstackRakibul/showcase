<template>
    <div>
        <div class="container mx-auto">
            <div class="card">
                <!-- product Image -->
                <img
                    class="w-full h-full object-cover"
                    :src="props.image"
                    alt="Product Image"
                />
                <!-- product details -->
                <div class="py-5 px-2 flex flex-col gap-2">
                    <!-- product tile-->
                    <router-link :to="{ name: 'singlebook', params: { id } }">
                        <h2 class="product-title" title="{{ props.title }}">
                            {{ props.title }}
                        </h2>
                    </router-link>
                    <div class="flex items-center gap-2">
                        <span class="badge">{{ props.author }} </span>
                        <span class="badge">{{ props.owner }} </span>
                    </div>
                    <!-- product price -->
                    <div class="product-price">
                        <span class="price">৳ {{ props.price }}</span>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-sm line-through opacity-50">
                                ৳ 500
                            </span>
                            <span class="discount-badge"> save 20%</span>
                        </div>
                        <!-- product rating -->
                        <span class="flex item-center mt-1">
                            <img src="../../assets/star.png" alt="" />
                            <img src="../../assets/star.png" alt="" />
                            <img src="../../assets/star.png" alt="" />
                            <img src="../../assets/star.png" alt="" />
                            <img src="../../assets/star.png" alt="" />
                            <span class="text-xs ml-2 text-gray-500">
                                156 Reviews
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// ..............import files ends here.....................

const props = defineProps({
    id: Number,
    title: String,
    image: String,
    author: String,
    owner: String,
    price: String,
    description: String,
});
</script>
