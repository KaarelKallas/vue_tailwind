<script setup>

</script>

<template>
    <div class="flex justify-center">
        <div class="md:w-1/3 w-[95%]">
            <span class="text-3xl font-[poppins] font-bold">Registration</span>
            <p class="font-light my-6 font-[roboto]">Fill in the registration data. It will take a couple of minutes.
                                    All you need is a phone number and e-mail</p>
        <div class="flex bg-gray-100 rounded-lg h-14 mb-7">
            <img src="../../images/Vector.svg" class="px-3 h-5 self-center" alt="">
            <p class="self-center text-sm ml-4 font-[poppins]">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
            <div class="mr-4 mt-2 cursor-pointer">&#10005;</div>
        </div>
        <div class="">
            <form action="" class="">
                <div class="flex flex-col border-[1px] py-6 rounded-lg ">
                <span class="ml-7 font-[poppins]">Enter your phone number</span>
                    <div class="py-4 ml-7">
                    <select v-model="selected" type="text" style="background-image: url(./images/arrow.svg)" class="border-b-[1px] font-[roboto] appearance-none pr-6 bg-no-repeat bg-right ">
                        <option>+372</option>
                    </select>
                    <input type="tel" v-model="number" class="border-b-[1px] w-[75%] ml-3 font-[roboto]">

                    </div>

                </div>
                <div class="flex flex-col border-[1px] mt-3 rounded-lg">
                        <p class="ml-7 font-[poppins] mt-6">Enter your email</p>
                    <input type="email" class=" ml-7 border-b-[1px] w-[75%] font-[roboto]">
                     <p class="ml-7 font-[poppins] mt-6">Set a password</p>
                     <div class="flex">
                     <input type="password" class="ml-7 mb-3 border-b-[1px] w-[75%] font-[roboto]">
                     <img src="images/eye.svg" alt="" class="w-7">
                     </div>
                    </div>

                <input class="border-[1px] cursor-pointer bg-blue-500 text-white rounded-md px-5 py-3 mt-5 font-[poppins] font-medium" value="Register Now" type="submit">
            </form>
        </div>

        </div>
    </div>
</template>
