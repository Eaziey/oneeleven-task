<template>
  <div class="input-group">
    <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
    <input
      required
      :type="type"
      :value="modelValue"
      :name="name"
      placeholder=" "
      autocomplete="off"
      class="input w-full"
      :class="{ 'has-icon': icon }"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <label class="user-label" :class="{ 'label-with-icon': icon }">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<{
  label: string
  modelValue: string
  type?: string
  name?: string
  icon?: object | string | Array<string>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.input-group {
  position: relative;
}

.icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #9e9e9e;
  font-size: 0.9rem;
  pointer-events: none;
  z-index: 1;
}

.input {
  width: 100%;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input.has-icon {
  padding-left: 2.5rem;
}

.user-label {
  position: absolute;
  left: 15px;
  top: 0;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.label-with-icon {
  left: 2.5rem;
}

.input:focus {
  outline: none;
  border: 1.5px solid #1a73e8;
}

.input:focus ~ .user-label,
.input:not(:placeholder-shown) ~ .user-label {
  transform: translateY(-50%) scale(0.8);
  background-color: black;
  padding: 0 0.2em;
  color: #2196f3;
  left: 15px;
}
</style>