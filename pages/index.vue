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
            I am software engineer from Portugal 🇵🇹 and currently live in Nyon, Switzerland. 🇨🇭
        </p>

        <p class="text-lg text-white pb-3">
            I have a passion for building beautiful and functional web applications.
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

        <div class="flex justify-center items-center gap-5 pt-4">
            <!-- GitHub -->
            <a href="https://github.com/littlebrat" target="_blank" rel="noopener noreferrer" class="group">
                <svg class="w-8 h-8 text-gray-400 group-hover:text-white transition duration-300 ease-in-out"
                    fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.666-.3-5.467-1.333-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .32.22.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/nuno-laurent" target="_blank" rel="noopener noreferrer" class="group">
                <svg class="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition duration-300 ease-in-out"
                    fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            </a>
            <!-- Email -->
            <!-- Email -->
            <a href="mailto:nuno.men@outlook.com" target="_blank" rel="noopener noreferrer" class="group">
                <svg class="w-8 h-8 text-gray-300 group-hover:text-white transition duration-300 ease-in-out"
                    fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </a>

        </div>
    </div>
</template>
