// https://kr.vuejs.org/v2/guide/custom-directive.html

Vue.directive("focus", {
  inserted: function (el) {
    el.focus();
  },
});
