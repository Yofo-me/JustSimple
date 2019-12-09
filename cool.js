// @name        去除哔哩哔哩右侧边栏
// @author      一个懒癌晚期的幼稚骚年 -- wind-cool
// @description 简简单单不玖好了么。。。
// @link  https://github.com/wind-cool/JustSimple


(function(){
  'use strict';
   var sider = document.getElementById('sidebar-vm');
   var parent_node = sider.parentNode;
   var re = /[http|https]:\/\/live\.bilibili\.com\/\d+(.)*/;
   var address = window.location.href;
  
  // alert(re.test(address));
  
  if(re.test(address)){
    parent_node.removeChild(sider);
  }
  
  
})();