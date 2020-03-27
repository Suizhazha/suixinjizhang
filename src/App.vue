<template>
    <div>
        <router-view/>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2C3E50;

            &.router-link-exact-active {
                color: #42B983;
            }
        }

        body {
            background: $red;
        }

        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
        }
    }

</style>