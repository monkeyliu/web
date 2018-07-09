import axios from 'axios'

const addUser =(params)=> new Promise((resolve,reject)=>{
  axios.post('/api/v1/userinfo',{
    id: params.id,
    name:params.name,
    age: params.age,
    sex:params.sex
  }).then((resp) =>{
    resolve(resp.data)
  }).catch((error)=>{
    reject(error)
  })
})
const getUserById =(params)=> new Promise((resolve,reject)=>{
    axios.get('/api/v1/userinfo/',{
      id: params.id
    }).then((resp) =>{
      resolve(resp.data)
    }).catch((error)=>{
      reject(error)
    })
  })
const updateUser =(params)=> new Promise((resolve,reject)=>{
  axios.put('/api/v1/userinfo',{
    id: params.id,
    name:params.name,
    age: params.age,
    sex:params.sex
  }).then((resp) =>{
    resolve(resp.data)
  }).catch((error)=>{
    reject(error)
  })
})

const deleteUser =(params)=> new Promise((resolve,reject)=>{
  axios.delete('/api/v1/userinfo/',{
    id: params.id
  }).then((resp) =>{
    resolve(resp.data)
  }).catch((error)=>{
    reject(error)
  })
})

export {
  getUserById,
  addUser,
  updateUser,
  deleteUser
}
