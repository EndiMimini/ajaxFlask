
async function getUsers(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79b259d46dmsh337faa7a2a5976cp12c080jsn465f0c118b4d',
            'X-RapidAPI-Host': 'naruto-database.p.rapidapi.com'
        }
    };
    
    fetch('https://naruto-database.p.rapidapi.com/clan', options)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]['Available Clan Details'])
            var users = document.getElementById('users');
            for( let i = 0; i < data['0']['Available Clan Details'].length; i++){
                let row = document.createElement('tr');
                
                let email = document.createElement('td');
                email.innerHTML = data['0']['Available Clan Details'][i];
                row.appendChild(email);
                users.appendChild(row);
            }
        })
        .catch(err => console.error(err));

}
getUsers();
