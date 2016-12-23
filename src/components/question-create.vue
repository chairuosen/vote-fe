<style lang="less" rel="stylesheet/less" scoped>
    .question-wrapper{

    }
    .group{
        margin:10px 0;
        h4{
            color:#777;
            font-size:16px;
            margin-bottom:10px;
        }
    }
</style>
<template>
    <div class="question-wrapper">
        <div class="group">
            <h4>问题 {{index+1}}</h4>
            <i-input :value.sync="question.text" placeholder="请输入..."></i-input>
        </div>
        <div class="group">
            <h4>类型</h4>
            <Radio-group :model.sync="question.selectType" type="button">
                <Radio value="single">
                    单选
                </Radio>
                <Radio value="multi">
                    多选
                </Radio>
            </Radio-group>
        </div>
        <div class="group">
            <h4>选项</h4>
            <Row v-for="o in question.options" :gutter="10" style="margin-bottom:10px;">
                <i-col span="10">
                    <i-input :value.sync="o.id" placeholder="值"></i-input>
                </i-col>
                <i-col span="10">
                    <i-input :value.sync="o.text" placeholder="文本"></i-input>
                </i-col>
                <i-col span="4">
                    <i-button @click="del(question.options,$index)">删</i-button>
                </i-col>
            </Row>
            <i-button @click="addOption(question.options);" >增加一条</i-button>
        </div>
        <div class="group">
            <h4>其他</h4>
            <Checkbox :checked.sync="question.isRequired">必填</Checkbox>
            <Checkbox :checked.sync="question.withInput">可自由回答</Checkbox>
        </div>
    </div>
</template>
<script>
    var Option = require('lib/klass').Option;
    module.exports = {
        props:{
            question:{
                type:Object,
                required:true,
                twoWay:true
            },
            index:true
        },
        data: function () {
            return {}
        },
        methods: {
            del:function (arr,index) {
                arr.splice(index,1);
            },
            addOption:function (options) {
                options.push(new Option());
            }
        },
        components: {},
        ready: function () {
//            console.log(this.question);
        }
    }
</script>