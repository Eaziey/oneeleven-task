<template>
  <div class="mt-8">
    <hr class="border-slate-700 mb-6" />
    <p
      :class="success ? 'text-emerald-400' : 'text-red-400'"
      class="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
    >
      <font-awesome-icon :icon="success ? ['fas', 'circle-check'] : ['fas', 'circle-xmark']" />
      {{ success ? 'Validation Response' : 'Error Response' }}
    </p>
    <pre class="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-200 text-xs font-mono leading-relaxed whitespace-pre-wrap break-all">{{ result }}</pre>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  result: string
  success: boolean
}>()
</script>