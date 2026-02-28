<template>
  <div class="bg-black">
    <div class="flex flex-col gap-6">

      <FloatingInput
        v-model="email"
        label="E-mail"
        type="email"
        name="email"
        :icon="['fas', 'envelope']"
      />

      <FloatingInput
        v-model="apiUrl"
        label="API Endpoint URL"
        type="url"
        name="apiUrl"
        :icon="['fas', 'link']"
      />

      <button
        @click="handleSubmit"
        :disabled="loading"
        class="w-full border bg-blue-500 border-blue-500 rounded-2xl bg-none px-4 py-4 text-base font-semibold text-white hover:bg-blue-200 hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
      >
        <svg
          v-if="loading"
          class="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
        {{ loading ? 'Testing...' : 'Run Validation' }}
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FloatingInput from './FloatingInput.vue'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  submit: [email: string, apiUrl: string]
}>()

const email = ref<string>('')
const apiUrl = ref<string>('')

function handleSubmit(): void {
  if (!email.value || !apiUrl.value) {
    alert('Please fill in both fields.')
    return
  }
  emit('submit', email.value, apiUrl.value)
}
</script>