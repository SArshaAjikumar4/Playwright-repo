import { test,expect} from '@playwright/test'
import { ok } from 'node:assert'
import { request } from 'node:http'


test('Get request to fetch users',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.ok()).toBeTruthy()
    //convet api to json code to see the user 1 details5

    const result=await response.json()
    console.log(result)



})

test('POST request to create user',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
      data:{
        name:'Deepak',
        email:'deepak@123@gmail.com'
    }   
    })
    

    expect(response.status()).toBe(201)
//for validation of response
    const result=await response.json()
        console.log(result)


})
//patch request ....partial detail upadte cheyan
test('Patch request: update user partially',async({request})=>{
        const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',{
            data:{
                email:'upadeted@gmail.com'
            }
        })
        expect (response.status()).toBe(200)
        



})

test('PUT request for user to update fully',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                "id": 1,
    "name": "Arsha",
    "username": "arsha123",
    "email": "arsha@gmail.com",
    "address": {
      "street": "12 street",
      "suite": "Apt. 345",
      "city": "chengannur",
      "zipcode": "509609",
      "geo": {
        "lat": "-37.9090",
        "lng": "81.345"
      }
    },
    "phone": "7689790567",
    "website": "hello.org",
    "company": {
      "name": "ABC company",
      "catchPhrase": "Multi-layered client user-server neural-net",
      "bs": "harness real-time e-markets website"
    }
            }
        }
    )
            expect (response.status()).toBe(200)

})

test.only('DELETE request: for user to delete',async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/1')
    expect (response.status()).toBe(200)
})