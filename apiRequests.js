async function getData() {
    const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log("Response = ", response);
    const data  = await response.json();
    console.log("Response Data = ", data);
}

// getData();

async function postData() {
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        title: 'My_Name',
        body:' Punjab',
        userId: 1018
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },

    });
    console.log("Post Data Response = ", response);
    const Data  = await response.json();
    console.log("Posted Data = ", Data);
}

postData();