<template>
    <Layout class-prefix="layout">

        <Types/>
        <Tags/>
        <Notes/>
        <NumberPad/>

    </Layout>
</template>


<script lang="ts">

    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';
    export default {
        name: 'Money',
        components: {Tags, Notes, Types, NumberPad},
    };
</script>

<style lang="scss" scoped>
    @import "./src/assets/style/helper.scss";

    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .numberPad {
        .output {
            @extend %clearFix;

            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
            text-align: right;
        }
        .buttons {
            @extend %clearFix;
            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;
                &.ok {
                    height: 64*2px;
                    float: right;
                }
                &.zero {
                    width: 25*2%;
                }
                $bg: #f2f2f2;
                &:nth-child(1) {
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }
                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }
                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }

    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }

    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }

    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                list-style: none;
                background: #d9d9d9;
                $h: 24px;
                //一行li时,可以让height=line-height
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }
        > .new {
            padding-top: 16px;
            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }



    }
</style>

