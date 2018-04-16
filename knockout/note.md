# knockout
1. 注册组件（默认异步加载）
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

