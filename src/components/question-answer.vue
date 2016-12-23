<style lang="less" rel="stylesheet/less">
    .answer-group{
        margin:20px 0;
        h2{
            color:#444;
            font-size:20px;
            margin-bottom:10px;
        }
    }
</style>
<template>
    <div class="answer-group">
        <h2>{{group.question.text}}</h2>
        <div v-if="group.question.selectType == 'single'">
            <Radio-group :model.sync="group.answer.value">
                <Radio v-for="o in group.question.options" :value="o.id">{{o.text}}</Radio>
            </Radio-group>
        </div>

        <div v-if="group.question.selectType == 'multi'">
            <Checkbox-group :model.sync="group.answer.value">
                <Checkbox v-for="o in group.question.options" :value="o.id">{{o.text}}</Checkbox>
            </Checkbox-group>
        </div>

        <div v-if="group.question.withInput" style="margin-top:10px;">
            其他答案: <i-input :value.sync="group.answer.text"></i-input>
        </div>

    </div>
</template>
<script>
    var util = require('lib/util');


    module.exports = {
        props:{
            group:{
                type:Object,
                required:true,
                twoWay:true
            },
            index:true
        },
        data: function () {
            return {}
        },
        methods: {},
        components: {},
        ready: function () {
            console.log(util.clone(this.group));
        }
    }
</script>