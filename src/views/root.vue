<style lang="less" rel="stylesheet/less">
    *{
        margin:0;
        padding:0;
        font-family:sans-serif;
    }
    img{
        border:none;
    }
    li{
        list-style:none;
    }


    .main-header{
        text-align:center;
        border-bottom:1px solid #0b97c4;
        h1{
            color:#444;
            font-size:20px;
            line-height:40px;
            font-weight:bold;
        }
    }

</style>
<template>
    <header class="main-header">
        <h1>{{title}}</h1>
    </header>
    <router-view></router-view>
</template>

<script>
    module.exports = {
        replace: false,
        data:function () {
            return {
                title:''
            }
        },
        ready:function () {
            window.$rootScope = this;
        }
    };
</script>