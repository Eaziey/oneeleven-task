<template>
  <div class="min-h-screen bg-blue-200 flex items-center justify-center p-6">
    <div class="bg-black border rounded-2xl p-10 w-full max-w-lg shadow-2xl">
      <h1 class="text-white text-2xl font-bold mb-1">One Eleven API Validator</h1>
      <p class="text-slate-400 text-sm mb-8 leading-relaxed">
        Test sort endpoint against the One Eleven validation server.
      </p>
      <ValidatorForm :loading="loading" @submit="runTest" />
      <ValidatorResult v-if="result" :result="result" :success="success" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import ValidatorForm from './components/Form.vue'
import ValidatorResult from './components/Result.vue'

const result = ref<string | null>(null)
const success = ref<boolean>(false)
const loading = ref<boolean>(false)

async function runTest(email: string, apiUrl: string): Promise<void> {
  loading.value = true
  result.value = null

  const validationUrl =
    `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=${encodeURIComponent(apiUrl)}&email=${encodeURIComponent(email)}`

  try {
    const response = await axios.get(validationUrl);

    success.value = true;
    result.value = JSON.stringify(response.data, null, 2);
  } catch (err) {
    success.value = false;

    if (axios.isAxiosError(err) && err.response) {
      result.value = JSON.stringify(err.response.data, null, 2);
    } else {
      result.value = `Could not reach the validation server.\n\n${(err as Error).message}`;
    }
  }

  loading.value = false
}
</script>