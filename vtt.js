var Deasciifier = require("deasciifier");
var deascii = new Deasciifier();

; (function () {

    var Vtt = {};

    var events = [
        "onchange",
        "onkeyup",
        "onpaste"
    ];

    Vtt.install = function (Vue, options) {
        Vue.directive('vtt', {
            bind: function (el, binding, vnode) {
                attachListener(el, binding.value)
            },
            update: function (el, binding, vnode, old) {
                attachListener(el,binding.value)
            }
        })
    }


    function attachListener(el, userConfig) {
        events.map(function (evt) {
            el[evt] = null
            if (userConfig[evt]) {
                el[evt] = function (e) {
                    e.target.value = deascii.deasciify(e.target.value)
                }
            }
        })
    }

    if (typeof exports == "object") {
        module.exports = Vtt
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return Vtt
        })
    } else if (window.Vue) {
        window.Vtt = Vtt
    }

})();