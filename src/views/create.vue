<style lang="less" rel="stylesheet/less">
    .wrapper{
        padding:0 20px;
    }

    .line{
        height:1px;
        width:100%;
        background-color:#0b97c4;
        margin:10px 0;
    }
    .submit-success{
        text-align:center;
        h2{
            color:green;
            font-size:20px;
        }
    }
</style>

<template>
    <Row v-show="!submited">
        <i-col span="24" v-for="q in questions" class="wrapper" style="margin-bottom:10px;">
            <one-question :question.sync="q" :index="$index"></one-question>
            <i-button type="error" long @click="del(questions,$index)" style="margin-top:20px;">删除这个问题</i-button>
            <div class="line"></div>
        </i-col>
        <i-col span="24" class="wrapper">
            <i-button type="info" long @click="addQuestion()" style="margin-top:20px;">增加一个问题</i-button>
            <i-button type="success" long @click="submit()" style="margin-top:20px;">提交服务器</i-button>
            <div style="color:red">{{errorMsg}}</div>
        </i-col>
    </Row>
    <div class="submit-success wrapper" v-show="submited">
        <h2>提交成功</h2>
        <br>
        <p>
            分享ID为: {{shareId}}<br>
            <br>
            <i-button type="info" @click="go('/question/'+shareId)">直接跳过去</i-button>
        </p>
    </div>
</template>

<script>
    var Question = require('lib/klass').Question;
    var util = require('lib/util');
    var api = require('lib/api');

    module.exports = {
        data: function () {
            return {
                submited:false,
                shareId:null,
                errorMsg:'',
                questions:[new Question()]
            }
        },
        methods: {
            del:function (arr,index) {
                arr.splice(index,1);
            },
            addQuestion:function () {
                this.questions.push(new Question())
            },
            submit:function () {
                var vm = this;
                api.saveQuestions(this.questions).then(function (id) {
                    vm.shareId = id;
                    vm.submited = true;
                }).catch(function (error) {
                    vm.errorMsg = error;
                })
            },
            go:function (url) {
                window.location.href = url;
            }
        },
        components: {
            oneQuestion:require('components/question-create.vue')
        },
        ready: function () {
            var vm = this;
            window.test = function () {
                console.log(util.clone(vm.questions))
            }
        }
    }
</script>