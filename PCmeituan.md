# 美团PC

##默认模板实现：


##首页一：


##首页二：


##产品列表页面实现：


##切换城市页面实现：

###1、2级联动

element-ui里面没有2级联动，就自己封装了一个。

他们用的同一个组件，通过父组件传数据过去显示不同的数据。

在操作上，进行了优化处理。当用户已经点击了子组件的情况下，点击其他地方时会自动隐藏其下拉框。
在`main.js`里利用全局指令`Vue.directive`下的钩子函数`bind`每次只绑定到元素时只触发一次的特性，定义了一个全局自定义指令。通过`document.addEventListener('click', binding.value, false)`绑定到`document` 身上。当点击的时候触发一次该事件。

但是，如果不处理子组件点击的冒泡事件的话。就会连续触发这2个事件`true fasle`，的状态会在一瞬间进行更换。就达不到显示的效果。  这里就需要通过给这个子组件`click`传入事件`e`使用`e.stopPropagation()`取消冒泡。

因为用的是同一个组件，所以显示隐藏的状态需交给父组件进行通信。
这里就需要创建自定义事件了，子组件通过`$emit`来触发并传递状态值，让父组件进行处理。
当然，还需要判断一下，当子组件一为`true`时，子组件二就为`false`。来保证两者不会一同出现。
 
 ------------ 不这样做的话，因他们是使用用一个子组件，会统一显示和隐藏，状态会保持一致。

显示框里的数据，就比较简单了，也是通过自定义事件。来管理的。
获取在子组件中点击`item`值传递给父父组件进行更改替换。


###2、通过首字母找到相应地址
    
简单来说，就是通过`a`标签的`href`有锚点特性来实现的。 给`dd`标签绑定是每个值的`item` 对应下面的每个`dl`的`item`进行锚点跳转。

里面的数据的话 就是通过`forEach`进行遍历的

    ```
    var obj = {};      // 创建一个空对象进行储存
    data.forEach(item => {
      if (!obj[item.firstChar.toUpperCase()]) { /* 判断数组里有没有这个数据，没有创建一个空数组储存 */
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);  // 把当前的item push到数组里去
    });
    console.log(obj); // 打印是获取的每一个对象
    this.cityGroup = obj;  // 把obj保存到data钩子函数中的cityGroup。
    ```