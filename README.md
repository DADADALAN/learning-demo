# learning-demo
学习笔记及demo

## knockout
1. text、with、attr、value、submit、foreach、click、style、event、visible、if、html、css绑定用法
2. applyBindings绑定、observable及observableArray监控
3. 注册组件（默认异步加载）
```javascript
ko.component.register("name", {
    viewModel: function(params){ this.text: params.text },
    template: `<div data-bind="text: text"></div>`
})
```
* 调用：
```html
<!-- ko component: { name: "name", params: { text: ""} } --><!-- /ko -->
```