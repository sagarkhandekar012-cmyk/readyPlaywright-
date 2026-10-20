import {test, expect} from '@playwright/test';

var userid;

/*get request there and here we are refring the get request to get the data from the
 api and then we are storing the id in the variable and then we are using that variable
  in the put and delete request to update and delete the data from the api.*/


test('get api data', async ({ request }) => {
    const getResponse = await request.get('https://reqres.in/api/users?page=2');
    console.log(await getResponse.json());
    expect(getResponse.status()).toBe(200);
});


/*post request there we are posting data on the server using api */

test('post api data', async ({ request }) => {
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


/*put request there we are updating the data on the server using api and we are using the
id from the post request to update the data on the server using api.*/


test('put api data', async ({ request }) => {
    const putResponse = await request.put('https://reqres.in/api/users/'+userid,
    { 
data:{
    name:'sagar',
    job:'qa'
},
headers:{ 
        "Accept": "application/json",
}
    });
    console.log(await putResponse.json());
    expect(putResponse.status()).toBe(200);
});

/*delete request there we are deleting the data on the server using api
 and we are using the id from the
 post request to delete the data on the server using api.*/

test('delete api data', async ({ request }) => {
const deleteResponse = await request.delete('https://reqres.in/api/users/'+userid); 
expect(deleteResponse.status()).toBe(204);

});
