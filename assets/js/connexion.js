// Validation de formulaire
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

// let errorName = document.getElementById("errorName")
// let errorEmail = document.getElementById('errorEmail')
// let errorPassword = document.getElementById('errorPassword')

let submitButtonConnexion = document.getElementById('connexion')
let submitButtonAnnuler = document.getElementById('annuler')

submitButtonConnexion.addEventListener('click', (e) => {

     e.preventDefault()

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


})