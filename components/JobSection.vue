<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

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
    location: String,
    url: String,
    tasks: {
        type: Array as PropType<Task[]>,
        default: () => [],
    },
});

// Computed property to handle date formatting, enhanced with TypeScript
const formatDate = (date: string): string => {
    console
    if (date === null) return 'Present';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
};
</script>

<template>
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-4 space-y-4">
        <h2 class="text-xl font-semibold text-blue-800">{{ title }}</h2>
        <h3 class="text-lg text-blue-600">{{ company }} - {{ role }}</h3>
        <p class="text-sm text-gray-500"><strong>{{ formatDate(startDate) }} - {{ formatDate(endDate) }}</strong></p>
        <p class="text-sm text-gray-500">{{ location }}</p>
        <a :href="url" target="_blank"
            class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">{{ url }}</a>
        <div class="space-y-2">
            <div v-for="(task, index) in tasks" :key="index" class="pt-4">
                <h4 class="text-lg font-medium">{{ task.title }}</h4>
                <p class="text-gray-700">{{ task.description }}</p>
                <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="(technology, index) in task.technologies" :key="index"
                        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {{ technology }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
