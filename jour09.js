// ## 01 - Aujourd'hui

// - Créer une fonction `whatDayIsToday`
// - La fonction devra afficher "Aujourd'hui nous sommes xxx" avec le nom du jour à la place de xxx
console.log("01")

const whatDayIsToday = () => {
    const date = new Date()
    const day = date.getDay()
    const dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

    console.log(`Aujourd'hui nous sommes ${dayOfWeek[day]}`)
}

whatDayIsToday()

// function whatDayIsToday() {
//     var today = new Date()
//     var day = today.getDay()
//     var dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    
//     console.log("Aujourd'hui nous sommes " + dayOfWeek[day])
// console.log(`Aujourd'hui nous sommes ${day}`)
// }

// whatDayIsToday()

console.log("")
// ## 02 - Mois courant

// - Créer une fonction `whatMonthIsIt`
// - La fonction devra afficher "Nous sommes au mois de xxx" avec le nom du mois à la place de xxx
console.log("02")

const whatMonthIsIt = () => {
    
}






// function whatMonthIsIt() {
//     var today = new Date()
//     var month = today.getMonth()
//     var monthOfYear = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
    
//     console.log("Nous sommes le mois d'" + monthOfYear[month])
// }
// whatMonthIsIt()


console.log("")
// ## 03- Format
console.log("03")

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console


// function formatDate() {
//     var today = new Date()
//     var todayFr = today.toLocaleDateString()
 
//     console.log("Nous sommes le : ", todayFr)
// }

// formatDate()


console.log("")
// ## 04 - Age
console.log("04")


// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format aaaa-mm-jj (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console

// function calculateAge() {
//     var today = new Date()
    
//     console.log("Nous sommes le : ", today)
//     var birth = new Date("1988-09-17")
//     console.log("ma date de naissance est le : ", birth)
//     var age = new Date(today) - new Date(birth)





//     var dayBirth = 17
//     var monthBirth = 09
//     var yearBirth = 1988 
    


//     var age = (new Date() - new Date("1988-09-17")) - date.getTime()
    
//     console.log("mon age est : ", age)
// }
// calculateAge()
// console.log("")
// console.log("")

// function calculateAge(date) { 
//     var today = new Date()
//     console.log("today  is : ", today)
//     var diff = Date.now() - date.getTime();
//     var age = new Date(diff); 
//     return age.getFullYear() - 1970
//     return Math.abs(age.getUTCFullYear() - 1970);
// }
// console.log(calculateAge(new Date(1988, 09, 17)))

//## ⭐ Bonus

// - A l'aide du package `moment` 
// et en regardant sa [documentation](https://momentjs.com/) sur internet, refaites tous les exercices
