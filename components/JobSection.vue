<script setup lang="ts">
import { type PropType } from 'vue';

// Update the structure of each task to include a title
interface Task {
    title: string;
    description: string;
    technologies: string[];
}

// Define the props with types, making endDate optional
defineProps({
    title: String,
    company: String,
    role: String,
    startDate: String,
    endDate: {
        type: String,
        default: null,
        optional: true,
    },
    imageUrl: {
        type: String,
        default: null,
        optional: true,
    },
    location: String,
    url: {
        type: String,
        default: null,
        optional: true,
    },
    tasks: {
        type: Array as PropType<Task[]>,
        default: () => [],
    },
});

const formatDate = (date: string): string => {
    console
    if (date === null) return 'Present';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
};
</script>

<template>
    <div class="max-w-xl mx-auto bg-opacity-80 shadow-lg rounded-xl p-6 mb-4 space-y-4 bg-gray-900">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2">
                <h2 class="text-xl font-semibold text-purple-600">{{ title }}</h2>
                <h3 class="text-lg text-purple-500">{{ company }} - {{ role }}</h3>
                <p class="text-sm text-gray-400"><strong>{{ formatDate(startDate) }} -
                        {{ formatDate(endDate) }}</strong>
                </p>
                <p class="text-sm text-gray-400">{{ location }}</p>
                <a v-if="url" :href="url" target="_blank"
                    class="text-purple-300 hover:text-purple-400 transition duration-300 ease-in-out">{{ url }}</a>
            </div>
            <img v-if="imageUrl" :src="imageUrl" alt="Company Logo" class="bg-white w-20 h-20 rounded-full object-cover self-center">
        </div>
        <div class="space-y-2">
            <div v-for="(task, index) in tasks" :key="index" class="pt-4">
                <h4 class="text-lg font-medium text-white">{{ task.title }}</h4>
                <p class="text-gray-300 text-justify">{{ task.description }}</p>
                <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="(technology, index) in task.technologies" :key="index"
                        class="bg-purple-700 text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {{ technology }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
