class Github{
    constructor(){
        this.client_id = 'afced1b7e25ac9c2c939';//this github api keys
        this.client_secret = 'dca50a50afa915c66c1f7ae43cc93af960664145';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);//querysrtring is followed by a question mark , 
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
    
}