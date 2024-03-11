document.addEventListener('DOMContentLoaded', function() {

    const endpoint = 'http://api.github.com/users/lllleao'
    
    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(respostaGit) {

        if (!respostaGit.avatar_url) {
            throw Error(respostaGit)
        }


        const avatar = respostaGit.avatar_url
        const nomeCompleto = respostaGit.name
        const user = respostaGit.login
        const repos = respostaGit.public_repos
        const seguidores = respostaGit.followers
        const sguindo = respostaGit.following
        const github = respostaGit.html_url
        
        document.querySelector('.profile-avatar').src = avatar
        document.querySelector('.profile-name').innerText = nomeCompleto
        document.querySelector('.profile-username').innerText = `@${user}`
        document.querySelector('.number-rep').innerText = repos
        document.querySelector('.number-foll').innerHTML = seguidores
        document.querySelector('.number-follin').innerText = sguindo
        document.querySelector('.profile-link').href = github
    })
    .catch(function(erro) {
        alert('Ocorreu um erro, tente mais tarde.')
    })
})