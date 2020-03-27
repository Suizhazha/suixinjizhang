<template>
    <!-- <div class="nav"> -->
    <!-- 不如直接用nav标签  -->
<nav>
        <router-link to="/Labels" class="item" active-class="selected">
            <Icon name="label"/>
            标签
        </router-link>

        <router-link to="/Money" class="item" active-class="selected">
            <Icon name="money"/>
            记账
        </router-link>

        <router-link to="/Statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
</nav>
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
    nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        flex-direction: row;
        > .item {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon {
                width: 32px;
                height: 32px;
            }
        }
        > .item.selected{
            color: orangered;
        }
    }
</style>