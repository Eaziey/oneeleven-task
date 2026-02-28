const __VLS_props = defineProps();
const emit = defineEmits();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['user-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['user-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
if (__VLS_ctx.icon) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.fontAwesomeIcon | typeof __VLS_components.FontAwesomeIcon} */
    fontAwesomeIcon;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        icon: (__VLS_ctx.icon),
        ...{ class: "icon" },
    }));
    const __VLS_2 = __VLS_1({
        icon: (__VLS_ctx.icon),
        ...{ class: "icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.emit('update:modelValue', $event.target.value);
            // @ts-ignore
            [icon, icon, emit,];
        } },
    required: true,
    type: (__VLS_ctx.type),
    value: (__VLS_ctx.modelValue),
    name: (__VLS_ctx.name),
    placeholder: " ",
    autocomplete: "off",
    ...{ class: "input w-full" },
    ...{ class: ({ 'has-icon': __VLS_ctx.icon }) },
});
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['has-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "user-label" },
    ...{ class: ({ 'label-with-icon': __VLS_ctx.icon }) },
});
/** @type {__VLS_StyleScopedClasses['user-label']} */ ;
/** @type {__VLS_StyleScopedClasses['label-with-icon']} */ ;
(__VLS_ctx.label);
// @ts-ignore
[icon, icon, type, modelValue, name, label,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
