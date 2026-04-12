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

        <div class="text-lg text-white pb-3 flex justify-center flex-col gap-5">
            <p>👨🏼‍💻 Full Stack Software Engineer</p>

            <p>💻 Passionate about building beautiful web applications</p>

            <p>🌍 From Lisbon, Portugal 🇵🇹</p>

            <p>🏠 Living in Nyon, Switzerland 🇨🇭</p>

            <p>💼 Currently Backend Team Lead at <span
                    class="text-yellow-500 hover:text-yellow-300 transition duration-300 ease-in-out">Breitling</span>
                ⏱️</p>

            <p>🚀 Leading an 8-person backend team building Breitling's global e-commerce platform across 140+ countries</p>

            <p>🤹🏼 Proficient in:</p>

            <div class="bg-black rounded-md p-3 ms-2">
                <span
                    class="text-yellow-500 hover:text-yellow-700 transition duration-300 ease-in-out">JavaScript</span>,
                <span class="text-green-500 hover:text-green-700 transition duration-300 ease-in-out">Vue.js</span>,
                <span class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Python</span>,
                <span
                    class="text-purple-500 hover:text-purple-700 transition duration-300 ease-in-out">PostgreSQL</span>,
                and <span class="text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out">much
                    more</span>! I'm always looking to learn new things and improve my skills.
            </div>
        </div>

        <div class="pb-3">
            <p class="text-white text-lg pb-3">
                ⭐️ Some of the highlights of my career include:
            </p>

            <div class="gap-5 flex flex-col">
                <div
                    class="border-2 border-yellow-600 bg-yellow-300 rounded-md mx-3 p-2 text-center text-orange-900 text-opacity-90 transition duration-300 ease-in-out shadow-lg transform hover:shadow-orange-800 hover:scale-110"
                >
                    Leading backend development for Breitling's global e-commerce platform, scaling APIs, integrations, and message-driven systems that support customers in more than 140 countries.
                </div>
                <div
                    class="border-2 border-yellow-600 bg-yellow-300 rounded-md mx-3 p-2 text-center text-orange-900 text-opacity-90 transition duration-300 ease-in-out shadow-lg transform hover:shadow-orange-800 hover:scale-110"
                >
                    Built Scribe, a cross-platform open-source desktop app and CLI that installs skills once and makes them available across 34+ AI coding agents.
                </div>
                <div
                    class="border-2 border-yellow-600 bg-yellow-300 rounded-md mx-3 p-2 text-center text-orange-900 text-opacity-90 transition duration-300 ease-in-out shadow-lg transform hover:shadow-orange-800 hover:scale-110"
                >
                    Created a full-stack application to monitor and control thousands of Power Converters at CERN,
                    leveraging interactive data visualization to enhance operational efficiency and user experience.
                </div>
                <div
                    class="border-2 border-yellow-600 bg-yellow-300 rounded-md mx-3 p-2 text-center text-orange-900 text-opacity-90 transition duration-300 ease-in-out shadow-lg transform hover:shadow-orange-800 hover:scale-110"
                >
                    Created a data storage engine for Power Converter Acquisition logs at CERN, allowing for real-time data analysis or
                    historical data retrieval.
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center flex-col gap-3">
            <NuxtLink to="/jobs"
                class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300 ease-in-out shadow hover:shadow-md w-80 text-center">
                💼 View my work experience
            </NuxtLink>

            <NuxtLink to="/projects"
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300 ease-in-out shadow hover:shadow-md w-80 text-center">
                🛠️ Check out some of my projects
            </NuxtLink>

            <a href="resume.pdf" download
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300 ease-in-out shadow hover:shadow-md w-80 text-center">
                📄 Download my CV
            </a>
        </div>
    </div>
</template>
