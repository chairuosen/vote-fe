var Promise = require('bluebird');
var util = require('lib/util');

var db = {
    set:function (k,v) {
        return new Promise(function (resolve,reject) {
            var o = {};
            try{
                o = JSON.parse(window.localStorage.store)
            }catch(e){
            }

            o[k] = v;

            try{
                window.localStorage.store = JSON.stringify(o);
            }catch(e){
                reject('Write Error');
            }
            resolve();
        })
    },
    get:function (k) {
        return new Promise(function (resolve,reject) {
            try{
                o = JSON.parse(window.localStorage.store)
            }catch(e){
            }
            resolve(o[k]);
        })
    }
}

module.exports = {
    saveQuestions:function (questions) {
        var id = util.getRandomString();
        return db.set(id,questions).then(function () {
            return id
        });
    },
    getQuestionsById:function (id) {
        return db.get(id);
    },
    saveAnswer:function (questionId,object) {
        // todo
        return Promise.resolve();
    }
}