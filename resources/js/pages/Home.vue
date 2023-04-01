<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import BannerIcon1 from '../../assets/bannerIcon1.svg';
import ProductCard from '../components/cards/ProductCard.vue';
import Container from '../components/Container.vue';

const products = ref([]);

onBeforeMount(() => {
  const fetcher = async () => {
    try {
      const resp = await axios.get('/api/books');
      const data = await resp.data.data;
      products.value = data;
      console.log(data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  fetcher();
});
</script>

<template>
  <div>
    <main class="">
      <div class="p-10 bg-red-300">hello there</div>

      <div class="bg-white overflow-hidden sm:rounded-lg">
        <div class="relative mx-auto py-2 px-1 sm:px-2 lg:px-1">
          <div class="relative">
            <div class="absolute inset-0">
              <img
                class="h-full w-full object-cover"
                src="https://t4.ftcdn.net/jpg/03/25/24/85/360_F_325248543_rFLiTb9wizkPgKx12OYzrdTiSdTIJ3S1.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-gray-500 mix-blend-multiply"
              ></div>
            </div>
            <div class="relative max-w-2xl mx-auto text-center py-10">
              <h1
                class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">Spring Sale</span>
                <span class="block text-indigo-600 xl:inline"
                  >Up to 50% off</span
                >
              </h1>
              <p
                class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Three bannner design  -->

      <Container
        class="border-b-2 flex flex-col md:flex-row leading-relaxed my-20 py-10 gap-10"
      >
        <!-- single sections -->

        <!-- first -->
        <div
          class="text-center flex-1 p-10 flex flex-col items-center justify-center"
        >
          <!-- icon container -->
          <div
            class="w-16 h-16 overflow-hidden hover:scale-110 duration-500 cursor-pointer origin-center transition-transform"
          >
            <img
              class="w-full h-full block object-contain"
              :src="BannerIcon1"
              alt=""
            />
          </div>

          <!-- title -->
          <h3 class="text-xl font-bold mt-8 mb-3">
            Grown Today, Delivered Tomorrow
          </h3>
          <p class="text-md text-neutral-500 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            accusamus, us omnis veritatis animi adipisci corporis?
          </p>
        </div>

        <!-- second -->
        <div
          class="text-center flex-1 p-10 flex flex-col items-center justify-center"
        >
          <!-- icon container -->
          <div
            class="w-16 h-16 overflow-hidden hover:scale-110 duration-500 cursor-pointer origin-center transition-transform"
          >
            <img
              class="w-full h-full block object-contain"
              :src="BannerIcon1"
              alt=""
            />
          </div>

          <!-- title -->
          <h3 class="text-xl font-bold mt-8 mb-3">
            Grown Today, Delivered Tomorrow
          </h3>
          <p class="text-md text-neutral-500">
            Lorem ip, amet aspernatur nisi nesciunt natus omnis veritatis animi
            adipisci corporis?
          </p>
        </div>

        <!-- third -->
        <div
          class="text-center flex-1 p-10 flex flex-col items-center justify-center"
        >
          <!-- icon container -->
          <div
            class="w-16 h-16 overflow-hidden hover:scale-110 duration-500 cursor-pointer origin-center transition-transform"
          >
            <img
              class="w-full h-full block object-contain"
              :src="BannerIcon1"
              alt=""
            />
          </div>

          <!-- title -->
          <h3 class="text-xl font-bold mt-8 mb-3">
            Grown Today, Delivered Tomorrow
          </h3>
          <p class="text-md text-neutral-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            accusamus, amet aspernatur nisi nesciunt natus omnis veritatis animi
            adipisci corporis?
          </p>
        </div>
      </Container>

      <!-- three banner design ends -->
      <!-- Naseem product demo -->

      <!-- products offer section start -->
      <Container
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5"
      >
        <ProductCard
          v-for="product of products"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          :imgSrc="product.image"
        />
      </Container>

      <div class="flex flex-col md:flex-row items-center justify-center py-4">
        <div class="w-full md:w-1/3 text-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411852091i/24280.jpg"
            alt="Product 1"
            class="mx-auto mb-2 h-32"
          />
          <h3 class="text-lg font-bold mb-2">Product 1</h3>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="#"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Buy now</a
          >
        </div>
        <div class="w-full md:w-1/3 text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehqA5B5vyuveNX9LMwMtvZQw9viZO79rsg0lS4H7Myf3ivAKJgcvrpkIaFylNA4rgr0o&usqp=CAU"
            alt="Product 2"
            class="mx-auto mb-2 h-32"
          />
          <h3 class="text-lg font-bold mb-2">Product 2</h3>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="#"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Buy now</a
          >
        </div>
        <div class="w-full md:w-1/3 text-center">
          <img
            src="https://www.oakknoll.com/pictures/102816_5.jpg?v=1374516422"
            alt="Product 3"
            class="mx-auto mb-2 h-32"
          />
          <h3 class="text-lg font-bold mb-2">The Black Swan</h3>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="#"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Buy now</a
          >
        </div>
      </div>

      <!-- products offer section end -->
    </main>
  </div>
</template>
