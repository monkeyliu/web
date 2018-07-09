<template>
  <div v-bind:style="{border:'1px dashed #000'}">
    <div v-bind:style="msgObject.msgStyle">
      {{msgObject.msg}}
    </div>
    <hr>
    <div >
      <table v-bind:style="{width:'100%'}">
        <tr>
          <td :style="tableStyle.alignRight">用户id:</td>
          <td :style="tableStyle.alignLeft"><input v-model="data.id" type="text"/></td>
        </tr>
        <tr>
          <td :style="tableStyle.alignRight">用户姓名:</td>
          <td :style="tableStyle.alignLeft"><input v-model="data.name" type="text"/></td>
        </tr>
        <tr>
          <td :style="tableStyle.alignRight">用户年龄:</td>
          <td :style="tableStyle.alignLeft"><input v-model="data.age" type="text"/></td>
        </tr>
        <tr>
          <td :style="tableStyle.alignRight">用户性别:</td>
          <td :style="tableStyle.alignLeft"><input v-model="data.sex"  type="text"/></td>
        </tr>
        <tr>
          <td colspan="2" :style="{paddingTop:'50px'}">
            <button @click="addUser">保存</button>
            <button @click="cancelUser">取消</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {addUser} from '../../axios/crud'

  export default {
    name: 'adduser',
    componentName: 'AddUser',
    data() {
      return {
        msgObject: {
          msg: "新增用户",
          msgStyle: {textAlign: "center", marginTop: "10px", marginBottom: "50px", fontSize: "30px"}
        },
        tableStyle:{
          alignLeft:{paddingLeft:'20px',textAlign:'left'},
          alignRight:{textAlign:'right'}
        },
        data:{
          id:"",
          name:"",
          age:"",
          sex:""
        }
      }
    },
    mounted: function () {
    },
    methods: {
      jumpGetUsers(){
        this.$router.push({path:"/users"})
      },
      addUser(){
        addUser(this.data).then(resp => {
          alert(" 【add data is】: "+JSON.stringify(this.data))
          this.jumpGetUsers()
        }).catch(error => console.log('error', error))
      },
      cancelUser(){
        this.jumpGetUsers()
      }
    }
  }
</script>
