// Validation de formulaire
let nameInput  = document.getElementById('nom')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let passwordConfirmedInput = document.getElementById('password-confirmed')

// let errorName = document.getElementById("errorName")
// let errorEmail = document.getElementById('errorEmail')
// let errorPassword = document.getElementById('errorPassword')

let submitButton = document.getElementById('inscription')

submitButton.addEventListener('click', (e) => {

     e.preventDefault()

     // Prenom et Nom
     const nameRegex = /^(?!\s*$)[A-Za-z\s]+$/ // Regex pour la chaine de caractére nom
     if(nameInput.value.length < 3) {
          
          nameInput.value = `le champ ${nameInput.name} doit dépassser 3 caractères`
          nameInput.style.color = "red"

     } else if(!nameRegex.test(nameInput.value)) {
          nameInput.textContent = `Le champ ${nameInput.name} ne doit contenir que des lettres.`
        nameInput.style.color = "red"
     } else {

        //   nameInput.style.borderRight = "4px solid green"
          nameInput.value = ""
     }

     // Adresse Email
     const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/ // Regex pour la chaine de caractére email
     if(!emailRegex.test(emailInput.value)) {
          emailInput.value = `L'adresse e-mail fournie n'est pas valide.`
          emailInput.style.color = "red"
     } else {
        //   emailInput.style.borderRight = "4px solid green"
          emailInput.value = ""
     }

     // Mot de passe
     if(passwordInput.value.length < 4){
          passwordInput.value = `le champ ${passwordInput.name} doit dépassser 4 caractères`
          passwordInput.style.color = "red"
     }else {

        //   passwordInput.style.borderRight = "4px solid green"
          passwordInput.value = ""
     }

    //  Confirmation de mot de passe
    if(passwordConfirmedInput.value === passwordInput.value){
        passwordConfirmedInput.value = ""
    }else {
        passwordConfirmedInput.value = `le champ ${passwordConfirmedInput.name} ne correspond pas `
          passwordConfirmedInput.style.color = "red"
    }


})