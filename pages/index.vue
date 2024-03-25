<script setup>
</script>

<template>
    <div class="max-w-xl mx-auto bg-opacity-80 shadow-lg rounded-xl p-6 mb-4 space-y-4 bg-gray-900">

        <div class="flex justify-center py-3">
            <div class="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img src="/me_photo.jpeg" alt="Nuno Mendes" style="object-position: 5% center;"
                    class="object-cover w-full h-full">
            </div>
        </div>

        <p class="text-lg text-white pb-3">
            I love to build things with code. I have a passion for
            building beautiful and functional web applications.

        </p>
        <p class="text-lg text-white pb-3">
            I have experience with a variety of technologies, including
            <span class="text-yellow-500 hover:text-yellow-700 transition duration-300 ease-in-out">JavaScript</span>,
            <span class="text-green-500 hover:text-green-700 transition duration-300 ease-in-out">Vue.js</span>,
            <span class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Python</span>,
            <span class="text-purple-500 hover:text-purple-700 transition duration-300 ease-in-out">PostgreSQL</span>,
            and much more. I'm always looking to learn new things and improve my skills.
        </p>

        <p class="text-lg text-white pb-3">
            I currently work at <span
                class="text-yellow-500 hover:text-yellow-300 transition duration-300 ease-in-out">Breitling</span> as a
            Senior full-stack developer.
        </p>

        <div class="pb-3">
            <p class="text-white text-lg pb-2">
                Some of the highlights of my work include:
            </p>

            <ul class="list-disc list-inside gap-2">
                <li
                    class="pb-2 pl-5 text-white text-opacity-90 hover:text-opacity-100 transition duration-300 ease-in-out transform hover:scale-105">
                    Creating a full-stack application to monitor and control thousands of Power Converters at CERN,
                    leveraging interactive data visualization to enhance operational efficiency and user experience.
                </li>
                <li
                    class="pb-2 pl-5 text-white text-opacity-90 hover:text-opacity-100 transition duration-300 ease-in-out transform hover:scale-105">
                    Creating a data storage engine for Power Converters at CERN, allowing for real-time data analysis or
                    historical data retrieval.
                </li>
            </ul>
        </div>

        <div class="flex justify-center items-center flex-col gap-3">
            <NuxtLink to="/jobs"
                class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300 ease-in-out shadow hover:shadow-md">
                View my work experience
            </NuxtLink>

            <NuxtLink to="/projects"
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300 ease-in-out shadow hover:shadow-md">
                Check out some of my projects
            </NuxtLink>
        </div>
    </div>
</template>
