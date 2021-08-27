// jsonplaceholder api called  users
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayLoadUsers(data))
    
}
function displayLoadUsers(data){
    const ul = document.getElementById('userelement');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li)
    }
}
// jsonplaceholder api called posts 
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayLoadPost(post))
}
function displayLoadPost(post){
    const section = document.getElementById('posts');
    for(const posts of post){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `<h3>Post Title: ${posts.title}</h3>
        <p>Post Description: ${posts.body}</p>
        `
        section.appendChild(div)
    }
}
//jsonPlaceholder api called addPost method
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My First Title Here',
            body: 'lorem ip sum text',
            userID: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then(res => console.log(res))
}