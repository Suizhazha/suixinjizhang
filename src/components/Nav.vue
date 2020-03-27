<template>

    <div class="nav">

        <router-link to="/Labels">
            <svg>
                <use xlink:href="#label"/>
            </svg>
            标签</router-link>
        |
        <router-link to="/Money">记账</router-link>
        |
        <router-link to="/Statistics">统计</router-link>
    </div>

</template>

<script lang="ts">
    import x from '@/assets/icons/label.svg';

    console.log(x);

    export default {
        name: 'Nav'
    };
</script>

//加上scoped,.nav只会影响当前template内nav的样式
//能加上scoped就加，可以用简单的class名同时不跟其他div 冲突
<style lang="scss" scoped>
    .nav {
        border: 1px solid red
    }
</style>