<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
    @import "assets/style/reset.scss";
    @import "assets/style/helper.scss";

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2C3E50;

            &.router-link-exact-active {
                color: #42B983;
            }
        }

        #app {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #333333;
            font-family: $font-hei;
            line-height: 1.5;
            font-size: 16px;
        }

    }

</style>