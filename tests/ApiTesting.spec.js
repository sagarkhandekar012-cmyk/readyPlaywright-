import {test, expect} from '@playwright/test';

var userid;


test('get api data', async ({ request }) => {
    const getResponse = await request.get('https://reqres.in/api/users?page=2');
    console.log(await getResponse.json());
    expect(getResponse.status()).toBe(200);
})

test.only('post api data', async ({ request }) => {
const postResponse =  await request.post('https://reqres.in/api/users',
    {
        data:{
            name:'sagar',
            job:'qa'
        },
        headers:{ 
                "Accept": "application/json",
        }
    });

console.log(await postResponse.json());
expect(postResponse.status()).toBe(201);

var res=await postResponse.json();
userid=res.id;

});