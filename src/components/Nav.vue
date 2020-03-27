<template>
    <div class="nav">

        <router-link to="/Labels">
            <Icon name="label"/>
            标签
        </router-link>
        |
        <router-link to="/Money">
            <Icon name="money"/>
            记账
        </router-link>
        |
        <router-link to="/Statistics">
            <Icon name="statistics"/>
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    import Icon from '@/components/Icon.vue';
    export default {
        name: 'Nav',
        components: {Icon}
    };
</script>

//加上scoped,.nav只会影响当前template内nav的样式
//能加上scoped就加，可以用简单的class名同时不跟其他div 冲突
<style lang="scss" scoped>
    .nav {
        border: 1px solid red
    }
</style>