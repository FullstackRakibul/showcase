<template>
    <div>
        <div class="relative">
            <img
                src="https://t3.ftcdn.net/jpg/03/21/97/42/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg"
                alt="Banner Image"
                class="w-full h-96 object-cover"
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                class="absolute inset-0 flex flex-col justify-center items-center text-white"
            >
                <h1 class="text-2xl md:text-6xl font-semi-bold mb-4">
                    About Page
                </h1>
                <p class="text-xl md:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vitae massa ac lectus scelerisque consequat.
                </p>
            </div>

        </div>
        <div class="container m-3 p-3 flex flex-wrap gap-3 justify-center items-center ">
            <router-link to="/login">
                <Button>
                    log in page
                </Button>
            </router-link>
            <router-link to="/registration">
                <Button>
                    register page
                </Button>
            </router-link>
            <router-link to="/account">
                <Button>
                    account page
                </Button>
            </router-link>
            <router-link to="/products">
                <Button>
                    Products Design 
                </Button>
            </router-link>
            <router-link to="/ehome">
                <Button>
                    E Home Page 
                </Button>
            </router-link>


        </div>

        <div class="container mx-auto py-8 p-28 ">
            
            <div
                class="flex flex-col md:flex-row items-center justify-between mb-8"
            >
                <img
                    src="https://static.toiimg.com/thumb/msid-80131937,imgsize-288694,width-400,resizemode-4/80131937.jpg"
                    alt="About Us Image"
                    class="w-full md:w-1/3 mx-auto mb-4 md:mb-0"
                />
                <p class="text-lg text-gray-600 md:ml-8 md:w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vitae massa ac lectus scelerisque consequat.
                    Phasellus eu ipsum sit amet tortor malesuada pellentesque in
                    et lorem. Proin tristique magna quis nisi bibendum, nec
                    pulvinar magna bibendum. Mauris nec venenatis elit.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                </p>
            </div>
            <h2 class="text-4xl text-primary-color font-bold mb-4 ">Our Mission</h2>
            <p class="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae massa ac lectus scelerisque consequat.
                Phasellus eu ipsum sit amet tortor malesuada pellentesque in et
                lorem. Proin tristique magna quis nisi bibendum, nec pulvinar
                magna bibendum. Mauris nec venenatis elit. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
            </p>
            <h2 class="text-4xl text-primary-color font-bold mb-4">Our Team</h2>
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="w-full md:w-1/3 text-center mb-8 md:mb-0">
                    <img
                        src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/217535369_107923338231862_7413397135120397402_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3CY7B2xbcu8AX-wZd7h&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfCZGjN8skBsuEIDQSViD7zEJB70V4SgL3EI0sigR5Q0hg&oe=641A3749"
                        alt="Team Member 1"
                        class="mx-auto mb-4 rounded-full h-32"
                    />
                    <h3 class="text-lg font-bold mb-2">Rabbitic</h3>
                    <p class="text-gray-600 mb-2">CEO</p>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="w-full md:w-1/3 text-center mb-8 md:mb-0">
                    <img
                        src="https://media.licdn.com/dms/image/C5603AQHChu_lpiwPYA/profile-displayphoto-shrink_800_800/0/1655310876472?e=2147483647&v=beta&t=hCsTo5RZd7pTG_Y1dvmWF5zAJJLSrrtw19fh26TGtvw"
                        alt="Team Member 2"
                        class="mx-auto mb-4 rounded-full h-32"
                    />
                    <h3 class="text-lg font-bold mb-2">Rakibul Hasan</h3>
                    <p class="text-gray-600 mb-2">CTO</p>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="w-full md:w-1/3 text-center">
                    <img
                        src="../../assets/fullstack-rakibul-main-logo.svg"
                        alt="Team Member 3"
                        class="mx-auto mb-4 rounded-full h-32"
                    />
                    <h3 class="text-lg font-bold mb-2">Full-StackRakibul</h3>
                    <p class="text-gray-600 mb-2">COO</p>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../components/Button.vue";

</script>
