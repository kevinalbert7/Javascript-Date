// ## 01 - Aujourd'hui

// - Créer une fonction `whatDayIsToday`
// - La fonction devra afficher "Aujourd'hui nous sommes xxx" avec le nom du jour à la place de xxx

// var dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
// var today = new Date()
// console.log("today is : ", today)

// function whatDayIsToday(){
//     return [today.getDay()]
        
// } 

// whatDayIsToday(xxx)
// console.log("Aujourd'hui nous sommes " + whatDayIsToday(xxx))

function whatDayIsToday(){
    var today = new Date()
    var day = today.getDay()
    var dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    console.log("Aujourd'hui nous sommes " + dayOfWeek[day])

}
whatDayIsToday()



// ## 02 - Mois courant

// - Créer une fonction `whatMonthIsIt`
// - La fonction devra afficher "Nous sommes au mois de xxx" avec le nom du mois à la place de xxx


function whatMonthIsIt(){
    var today = new Date()
    var month = today.getMonth()
    var monthOfYear = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
    console.log("Nous sommes le mois de " + monthOfYear[month])
}
whatMonthIsIt()


// ## 03- Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console


function formatDate(){
    var today = new Date()
    var day = today.getDay() 
    var month = today.getMonth() 
    var year = today.getFullYear()
        console.log(`${today.getDay()} / ${today.getMonth()} / ${today.getFullYear()}`)
}

formatDate()

// ## 04 - Age

// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format aaaa-mm-jj (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console

function calculateAge(){
    var birth = new Date("1988-09-17")
    var today = new Date()
    console.log("today is : ", today)
    var age = (birth - age).
    console.log("mon age est : ", age)
}

calculateAge()