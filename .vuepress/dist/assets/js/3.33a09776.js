(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,n,e){},203:function(t,n,e){"use strict";var o=e(159);e.n(o).a},207:function(t,n,e){"use strict";e.r(n);var o={name:"Counter",data:function(){return{count:0,amount:1}},methods:{increment:function(){this.count+=this.amount},decrement:function(){this.count-=this.amount},reset:function(){this.count=0}}},u=(e(203),e(28)),c=Object(u.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"counter"},[e("p",{staticClass:"counter-count"},[t._v(t._s(t.count))]),t._v(" "),e("div",{staticClass:"counter-actions"},[e("button",{staticClass:"counter-button",on:{click:t.increment}},[t._v("Add")]),t._v(" "),e("button",{staticClass:"counter-button",on:{click:t.decrement}},[t._v("Subtract")]),t._v(" "),e("button",{staticClass:"counter-button",on:{click:t.reset}},[t._v("Reset")])]),t._v(" "),e("div",[e("label",{staticClass:"counter-label",attrs:{for:"change-amount"}},[t._v("Change Amount:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],staticClass:"counter-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:function(n){n.target.composing||(t.amount=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})])])}),[],!1,null,null,null);n.default=c.exports}}]);