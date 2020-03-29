<template>
    <div>
        <div class="layout-wrapper">
            <div class="content" :class="contentClass">

            <slot/> <!--引入插槽-->
            </div>
            <Nav/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Layout'
    };
</script>

<style lang="scss" scoped>
    .layout-wrapper{

        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1;//尽量将所有高度都给content,剩下高度给nav-wrapper
    }
</style>