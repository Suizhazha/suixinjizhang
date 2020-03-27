<template>
        <svg class="icon">
            <use  v-bind:xlink:href="'#'+name"/>
        </svg>

</template>

<script lang="ts">
    //import icons目录
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../assets/icons', true, /\.svg$/));}
    catch (error) {console.log(error);}

    export default {
        props:['name'],//给Icon添加外部属性
        name: 'Icon'
    };


</script>

<style lang="scss" scoped>
.icon{
    height: 1em;
    width: 1em;
}
</style>