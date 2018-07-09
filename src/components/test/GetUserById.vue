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
          <td colspan="2" :style="{paddingTop:'50px'}">
            <button @click="getUserById">保存</button>
            <button @click="cancelUser">取消</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {getUserById} from '../../axios/crud'

  export default {
    name: 'getuserById',
    componentName: 'GetUserById',
    data() {
      return {
        msgObject: {
          msg: "查询用户",
          msgStyle: {textAlign: "center", marginTop: "10px", marginBottom: "50px", fontSize: "30px"}
        },
        tableStyle:{
          alignLeft:{paddingLeft:'20px',textAlign:'left'},
          alignRight:{textAlign:'right'}
        },
        data:{
          id:""
        }
      }
    },
   
    methods: {
       jumpGetUsers(){
        this.$router.push({path:"/users"})
      },
      getUserById(){
        getUserById(this.data).then(resp => {
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
