// Add your code here

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name , email})

    })
    .then(res => res.json())
    .then(object => {
        console.log(object);
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        body.append(h1);
        h1.textContent = `${object.id}`;
    
    })
    .catch(error => {
        
        // console.log(error);
        // alert('Unuthorized Access');
        const h2 = document.createElement('h1');
        const body = document.querySelector('body');
        body.append(h2);
        h2.textContent=(error.message);
    });
};



submitData();
