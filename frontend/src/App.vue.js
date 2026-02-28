import { ref } from 'vue';
import axios from 'axios';
import ValidatorForm from './components/Form.vue';
import ValidatorResult from './components/Result.vue';
const result = ref(null);
const success = ref(false);
const loading = ref(false);
async function runTest(email, apiUrl) {
    loading.value = true;
    result.value = null;
    const validationUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=${encodeURIComponent(apiUrl)}&email=${encodeURIComponent(email)}`;
    try {
        const response = await axios.get(validationUrl);
        success.value = true;
        result.value = JSON.stringify(response.data, null, 2);
    }
    catch (err) {
        success.value = false;
        if (axios.isAxiosError(err) && err.response) {
            result.value = JSON.stringify(err.response.data, null, 2);
        }
        else {
            result.value = `Could not reach the validation server.\n\n${err.message}`;
        }
    }
    loading.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen bg-blue-200 flex items-center justify-center p-6" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-200']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-black border rounded-2xl p-10 w-full max-w-lg shadow-2xl" },
});
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-white text-2xl font-bold mb-1" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-slate-400 text-sm mb-8 leading-relaxed" },
});
/** @type {__VLS_StyleScopedClasses['text-slate-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
const __VLS_0 = ValidatorForm;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onSubmit': {} },
    loading: (__VLS_ctx.loading),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onSubmit': {} },
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ submit: {} },
    { onSubmit: (__VLS_ctx.runTest) });
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.result) {
    const __VLS_7 = ValidatorResult;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        result: (__VLS_ctx.result),
        success: (__VLS_ctx.success),
    }));
    const __VLS_9 = __VLS_8({
        result: (__VLS_ctx.result),
        success: (__VLS_ctx.success),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
}
// @ts-ignore
[loading, runTest, result, result, success,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
