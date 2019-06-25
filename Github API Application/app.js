//Init Github

const github = new Github();
const ui = new UI();
//search input 
const searchUser = document.getElementById('searchUser');

//Search input event listener

searchUser.addEventListener('keyup', e =>{
    //get inputtext
    const userText = e.target.value;
    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            //check the user data
            // console.log(data)
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found','alert alert-danger')
            }else{
                //show profle
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    }else{
        ui.clearProfile();
    }
});

