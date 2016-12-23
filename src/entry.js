var Vue = require('vue');
var iView = require('iview');
var VueRouter = require('vue-router');
var jQuery = require('jquery');
require('iview/dist/styles/iview.css');

window.$ = jQuery;
window.jQuery = jQuery;

Vue.use(VueRouter);
Vue.use(iView);

var router = new VueRouter({
    history: true,
    hashbang: false
});
require("./router.js")(router);
router.start(require('views/root'), 'body');