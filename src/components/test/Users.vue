<template>
  <div v-bind:style="{border:'1px dashed #000'}">
    <div :style="msgObject.msgStyle">
      {{msgObject.msg}}
    </div>
    <hr>
    <div :style="curdStyle">
      <button @click="jumpAddUser">新增用户</button>
      <button @click="jumpUpdateUser">更新</button>
      <button @click="jumpdeleteUser">删除</button>
      <button @click="jumpgetUserById">查询</button>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'users',
    componentName: 'Users',
    data() {
      return {
        msgObject: {
          msg: "测试",
          msgStyle: {textAlign: "center", marginTop: "10px", marginBottom: "50px", fontSize: "30px"}
        },
        curdStyle: {paddingTop: "20px"},
        curdTableStyle: {width: '100%'},
        users: []
      }
    },
  
    methods: {
      jumpgetUserById() {
       this.$router.push({path:"/getuserById"})
      },
      jumpdeleteUser() {
        this.$router.push({path:"/deleteuser"})
      },
      jumpAddUser(){
        this.$router.push({path:"/adduser"})
      },
      jumpUpdateUser(id){
        this.$router.push({path:"/updateuser"})
      }
    }
  }
</script>
