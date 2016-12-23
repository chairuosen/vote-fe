<style lang="less" rel="stylesheet/less">
    .loading{
        text-align:center;
        padding:10px 0;
        font-size:14px;
        color:#888;
    }
    .error{
        text-align:center;
        padding:10px 0;
        font-size:14px;
        color:red;
    }
</style>
<template>
    <div>
        <div class="loading" v-if="loading && !errorMsg">
            加载中。。。
        </div>
        <div class="error" v-if="errorMsg">
            {{errorMsg}}
        </div>
        <div v-if="!loading && !errorMsg" class="wrapper">
            <div v-show="isSuccess">
                提交成功
            </div>
            <div v-show="!isSuccess">
                <i-col span="24" v-for="g in questionGroups"  style="margin-bottom:10px;">
                    <one-answer :group.sync="g" :index="$index"></one-answer>
                </i-col>
                <i-col span="24">
                    <i-button @click="submit" type="success" long>提交</i-button>
                </i-col>
            </div>
        </div>
    </div>
</template>
<script>
    var api = require('lib/api');
    var Answer = require('lib/klass').Answer;

    module.exports = {
        data: function () {
            return {
                id:null,
                errorMsg:null,
                loading:true,
                isSuccess:false,
                questionGroups:[]
            }
        },
        methods: {
            fetch:function (id) {
                var vm = this;
                vm.loading = true;
                return api.getQuestionsById(id).then(function (arr) {
                    vm.loading = false;
                    vm.questionGroups = arr.map(function (q) {
                        return {
                            question:q,
                            answer:new Answer(q),
                            errorMsg:''
                        }
                    });
                }).catch(function (e) {
                    vm.loading = false;
                    vm.errorMsg = e;
                });
            },
            verify:function () {

                var flag = true;

                this.questionGroups.forEach(function (group) {
                    group.errorMsg = "";
                    if(group.question.isRequired){
                        if(!group.answer.value || !group.answer.value.length ){
                            group.errorMsg = "此项必填";
                            flag = false;
                        }
                    }
                });
                return flag;
            },
            submit:function () {
                var vm = this;
                if( vm.verify() ) {
                    api.saveAnswer(vm.id,vm.questionGroups).then(function () {
                        vm.isSuccess = true;
                    }).catch(function (e) {
                        vm.errorMsg = e;
                    });
                }
            }
        },
        components: {
            oneAnswer:require('components/question-answer.vue')
        },
        ready: function () {
            var vm = this;
            var id = vm.id =  vm.$route.params.id;
            if(!id){
                vm.errorMsg = "没有ID";
                return;
            }
            vm.fetch(id)
        }
    }
</script>