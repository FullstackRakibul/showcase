<template>
    <div>
        <!-- Account Page start -->
        <!-- account wrapper -->
        <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            <!-- sidebar -->
            <div class="col-span-3">
                <div class="px-4 py-3 shadow flex items-center gap-4 border border-primary-color rounded">
                    <div class="flex-shrink-0">
                        <img
                            src="https://media.licdn.com/dms/image/C5603AQHChu_lpiwPYA/profile-displayphoto-shrink_800_800/0/1655310876472?e=2147483647&v=beta&t=hCsTo5RZd7pTG_Y1dvmWF5zAJJLSrrtw19fh26TGtvw"
                            alt="profile"
                            class="rounded-full w-14 h-14 border border-primary-color p-1 object-cover"
                        />
                    </div>
                    <div class="flex-grow">
                        <p class="text-gray-600">Hello,</p>
                        <h4 class="text-gray-800 font-medium">Rakibul Hasan</h4>
                    </div>
                </div>

                <div
                    class="border border-primary-color mt-6 bg-white shadow rounded p-4 divide-y divide-primary-color space-y-4 text-gray-600"
                >
                    <div class="space-y-1 pl-8">
                        <a
                            href="#"
                            class="relative text-primary block font-medium text-secondary-color capitalize transition"
                        >
                            <span class="absolute -left-8 top-0 text-base ">
                                <i class="fa-regular fa-address-card"></i>
                            </span>
                            Manage account
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            Profile information
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            Manage addresses
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            Change password
                        </a>
                    </div>

                    <div class="space-y-1 pl-8 pt-4">
                        <a
                            href="#"
                            class="relative hover:text-primary block font-medium capitalize transition text-secondary-color"
                        >
                            <span class="absolute -left-8 top-0 text-base">
                                <i class="fa-solid fa-box-archive"></i>
                            </span>
                            My order history
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            My returns
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            My Cancellations
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            My reviews
                        </a>
                    </div>

                    <div class="space-y-1 pl-8 pt-4">
                        <a
                            href="#"
                            class="relative hover:text-primary block font-medium capitalize transition text-secondary-color"
                        >
                            <span class="absolute -left-8 top-0 text-base">
                                <i class="fa-regular fa-credit-card"></i>
                            </span>
                            Payment methods
                        </a>
                        <a
                            href="#"
                            class="relative hover:text-primary block capitalize transition"
                        >
                            voucher
                        </a>
                    </div>

                    <div class="space-y-1 pl-8 pt-4">
                        <a
                            href="#"
                            class="relative hover:text-primary block font-medium capitalize transition text-secondary-color"
                        >
                            <span class="absolute -left-8 top-0 text-base">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                            My wishlist
                        </a>
                    </div>

                    <div class="space-y-1 pl-8 pt-4">
                        <a
                            href="#"
                            class="relative hover:text-primary block font-medium capitalize transition text-secondary-color"
                        >
                            <span class="absolute -left-8 top-0 text-base">
                                <i
                                    class="fa-regular fa-arrow-right-from-bracket"
                                ></i>
                            </span>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
            <!-- ./sidebar -->

            <!-- info -->
            <div class="col-span-9 grid grid-cols-3 gap-4">
                <div class="shadow rounded bg-primary-color px-4 pt-6 pb-8">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-white text-lg">
                            Personal Profile
                        </h3>
                        <a href="#" class="text-primary text-secondary-color">Edit</a>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-white font-medium">Rakibul Hasan</h4>
                        <p class="text-white">rakibul.cse.47@gmail.com@mail.com</p>
                        <p class="text-white">01625781547</p>
                    </div>
                </div>

                <div class="shadow rounded bg-white border border-primary-color px-4 pt-6 pb-8">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-gray-800 text-lg">
                            Shipping address
                        </h3>
                        <a href="#" class="text-primary">Edit</a>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-gray-700 font-medium">John Doe</h4>
                        <p class="text-gray-800">Medan, North Sumatera</p>
                        <p class="text-gray-800">20371</p>
                        <p class="text-gray-800">0811 8877 988</p>
                    </div>
                </div>

                <div class="shadow rounded bg-primary-color px-4 pt-6 pb-8">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-white text-lg">
                            Billing address
                        </h3>
                        <a href="#" class="text-secondary-color text-white">Edit</a>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-white font-medium">John Doe</h4>
                        <p class="text-white">Medan, North Sumatera</p>
                        <p class="text-white">20317</p>
                        <p class="text-white">0811 8877 988</p>
                    </div>
                </div>
            </div>
            <!-- ./info -->
        </div>
        <!-- ./account wrapper -->



        <!-- Acoount Page ends -->
    </div>
</template>
