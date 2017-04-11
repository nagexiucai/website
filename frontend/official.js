// https://github.com/nagexiucai/website

var show = new Vue({
  el:'#show',
  data:{
    message:'那个秀才'
  }
})

var menu = new Vue({
  el:'#menu',
  data:{
    message:'this is a tip',
    items:[
      {text:'流言', id:'note'},
      {text:'愚乐', id:'game'},
      {text:'首夜', id:'home'}
    ],
    show:true
  },
  methods:{
    reverseMessage:function(){
      show.message = show.message.split("").reverse().join("");
    }
  }
})

var logo = new Vue({
  el:'#logo',
  data:{
    seen:true
  }
})

var friend = new Vue({
  el:'#friend',
  data:{
    things:'things'
  }
})

Vue.component('list-item', {
  props:['item'],
  template:'<li v-bind:id=item.id>{{item.text}}</li>'
})
var the4classics = new Vue({
  el:'#the4classics',
  data:{
    srcList:[
      {text:'西游', id:'xiyou'},
      {text:'三国', id:'sanguo'},
      {text:'水浒', id:'shuihu'},
      {text:'红楼', id:'honglou'}
    ]
  }
})