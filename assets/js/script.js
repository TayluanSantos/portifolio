
const sobre = document.querySelector("#about")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formulario = document.querySelector("#formulario");

async function getApiGithub(){
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/TayluanSantos`);
        const perfil = await dadosPerfil.json();

        let conteudo = 
        `<img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name} " id="profile-picture">
        <article id="sobre_texto">
            <h1 class="texto texto-destaque">Sobre mim</h1>
            <p class="texto">
                Olá, meu nome é Tayluan, sou formado em Nutrição e encontro-me em processo de transição de carreira. Atualmente estou cursando Análise e Desenvolvimento de Sistemas.
                Adoro a possibilidade de se chegar a diferentes soluções para um determinado problema, por isso sempre estou em busca de aprender novas tecnologias.
            </p>
            <p class="texto">
                Possuo conhecimento em Java, Spring Boot, MySQL , Git , HTML e CSS. E recentemente estou aprendendo um pouco mais sobre Javascript , Typescript , NestJS e React.
                Destaco a facilidade de trabalho em equipe, persistência e atenção ao detalhes como as minhas principais competências.
            </p>
            </p>    
            <div id="sobre_github" class="flex">
                <a target="_blank" href="${perfil.html_url}" class="botao">Github</a>
                <p> ${perfil.followers} Seguidores </p>
                <p> ${perfil.public_repos} Repositórios </p>
            </div>
        </article>
        `
        sobre.innerHTML = conteudo;

    } catch(error){
        console.log(error)
    }
}
formulario.addEventListener("submit",function(event){
    event.preventDefault(); // Não deixa enviar antes da validação
    const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido"
        txtEmail.style.color = "red"
        txtEmail.style.fontSize = "14px"
        campoEmail.focus();
    } else {
        txtEmail.innerHTML = ''
        formulario.submit();
    }
})
getApiGithub();