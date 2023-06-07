

//initial data and page visibility setups
let data = []
document.getElementById('gender').style.display = "none"
document.getElementById('race').style.display = "none"
document.getElementById('class').style.display = 'none'
document.getElementById('character').style.display = 'none'



// function to test data (for our uses only)
function dataTest() {
    alert(data)
    
    
}
// Page 1 - edition selection
function displayDescription1e(description){
    document.querySelector('.description').textContent = ' The original 1st edition of D&D was published as a box set in 1974 and features only a handful of the elements for which the game is known today: just three character classes (fighting-man, magic-user, and cleric); four races (human, dwarf, elf, and hobbit); only a few monsters; only three alignments (lawful, neutral, and chaotic).'
}

function comingSoon() {
    alert("Coming soon!")
}

function terminate(description){
    document.querySelector('.description').textContent = '...'
}
function displayDescription2e(description){
    document.querySelector('.description').textContent = 'AD&D had expanded to several rulebooks, including three collections of monsters (Monster Manual, Monster Manual II, Fiend Folio), and two books governing character skills in wilderness and underground settings. Gygax had already planned a second edition for the game, which would also have been an update of the rules, incorporating the material from Unearthed Arcana, Oriental Adventures, and numerous new innovations from Dragon magazine in the Players Handbook and Dungeon Masters Guide and would have consolidated the Monster Manual, Monster Manual II and Fiend Folio into one volume. Initially, the 2nd edition was planned to consolidate the game, but more changes were made during development, while still aiming at backwards compatibility with 1st edition.'
}

function displayDescription3e(description){
    document.querySelector('.description').textContent = ' A major revision of the AD&D rules was released in 2000, the first edition published by Wizards of the Coast, which had acquired TSR in 1997. As the Basic game had been discontinued some years earlier, and the more straightforward title was more marketable, the word "advanced" was dropped and the new edition was named just Dungeons & Dragons, but still officially referred to as 3rd edition (or 3E for short). It also served as the basis of a broader role-playing system designed around 20-sided dice, called the d20 System.'
}

function displayDescription4e(description){
    document.querySelector('.description').textContent = ' On August 15, 2007, Wizards of the Coast announced the development of D&D 4th edition. In December 2007, the book Wizards Presents: Races and Classes, the first preview of 4th Edition, was released. This was followed by a second book in January 2008 named Wizards Presents: Worlds and Monsters. The Players Handbook, Monster Manual, and Dungeon Masters Guide were released in June 2008.'
}

function displayDescription5e(description){
    document.querySelector('.description').textContent = 'The 5th editions Basic Rules, a free PDF containing complete rules for play and a subset of the player and DM content from the core rulebooks, was released on July 3, 2014. The Players Handbook was released on August 19, 2014. The edition returns to having only three core rule books, with the Players Handbook containing most major races and classes. Since 2014, there have been over twenty 5th edition Dungeon & Dragons books published including new rulebooks, campaign guides and adventure modules. In January 2022, the Expansion Gift Set was released which includes reissued versions of Xanathars Guide to Everything (2017) and Tashas Cauldron of Everything (2020), "the two most significant expansions for Dungeons & Dragons Fifth Edition" along with a new sourcebook, Mordenkainen Presents: Monsters of the Multiverse (2022). This sourcebook updates "over 250 monster stat blocks alongside 30 playable races pulled from a variety of sources" such as Volos Guide to Monsters (2016) and Mordenkainens Tome of Foes (2018).'
    
}

function changeImg1e(){
    document.querySelector('.img1').src = "image.png/doors-open-1.png"
}

function returnImg1e(){
    document.querySelector('.img1').src = "image.png/inkeddoors-closed-1.jpg"
}

function genderAppear1e(){
    data.push('Edition: 1e ')
    document.getElementById('editionsPage').style.display = 'none'
    document.getElementById('gender').style.display = 'block'
}

//page 2 - gender selection

function maleDesc() {
    document.querySelector('.genderDesc').textContent = 'Male'
}

function terminateGender(){
    document.querySelector('.genderDesc').textContent = '...'
}

function femaleDesc(){
    document.querySelector('.genderDesc').textContent = 'Female'
}

function binaryDesc() {
    document.querySelector('.genderDesc').textContent = 'Non-Binary'
}

function nonDesc() {
    document.querySelector('.genderDesc').textContent = 'Non-Specified'
}

function raceAppear1e() {
    document.getElementById('gender').style.display = "none"
    document.getElementById('race').style.display = "block"
}

function storeMale(){
    data.push(' Gender: Male')
}

function storeFemale(){
    data.push(' Gender: Female')
}

function storeBinary() {
    data.push(' Gender: Non-Binary')
}

function storeNon() {
    data.push(' Gender: Non-Specified')
}

//page 3 - race selection

function dwarfDesc() {
    document.querySelector('.raceDesc').textContent = 'Dwarf'
}

function terminateRace() {
    document.querySelector('.raceDesc').textContent = '...'
}

function elfDesc() {
    document.querySelector('.raceDesc').textContent = 'Elf'
}

function orcDesc() {
    document.querySelector('.raceDesc').textContent = 'Half-Orc'
}

function halflingDesc() {
    document.querySelector('.raceDesc').textContent = 'Halfling'
}

function classAppear1e() {
    document.getElementById('race').style.display = 'none'
    document.getElementById('class').style.display = 'block'
}

function storeDwarf() {
    data.push(" Race: Dwarf")
}

function storeElf() {
    data.push(' Race: Elf')
}

function storeOrc() {
    data.push(" Race: Half-Orc")
}

function storeHalfling() {
    data.push(' Race: Halfling')
}

//page 4 - class selection  

function clericDesc() {
    document.querySelector('.classDesc').textContent = 'Cleric '
}

function terminateClass() {
    document.querySelector('.classDesc').textContent = '...'
}

function fightingDesc() {
    document.querySelector('.classDesc').textContent = 'Fighting Man '
}

function magicDesc() {
    document.querySelector('.classDesc').textContent = 'Magic User '
}

function paladinDesc() {
    document.querySelector('.classDesc').textContent = 'Paladin '
}

function characterAppear() {
    document.getElementById('class').style.display = 'none'
    document.getElementById('character').style.display = 'block'
}

function storeCleric() {
    data.push(" Class: Cleric")
    localStorage.setItem("data", JSON.stringify(data)) 
}

function storeFighting() {
    data.push(" Class: Fighting Man")
    localStorage.setItem("data", JSON.stringify(data)) 
}

function storeMagic() {
    data.push(" Class: Magic User")
    localStorage.setItem("data", JSON.stringify(data)) 
}

function storePaladin() {
    data.push(" Class: Paladin")
    localStorage.setItem("data", JSON.stringify(data)) 
}

//local storage

const itemSet = (localStorage.getItem('data') !== null);

const dataLoad = JSON.parse(localStorage.getItem('data'))



if (itemSet) {
    if (dataLoad){
        data = dataLoad
        localStorage.clear()
    }
    let text = confirm("Do you want to load data?")
    if (text){
        alert(dataLoad)
        localStorage.clear()
    } else {
        alert("Understood")
        localStorage.clear()
    }

}

//testing event listeners (not relevant)
//document.getElementById('editionsPage').style.display = 'none'
// event listeners 
//document.querySelector(".e1").addEventListener("click", alert('hi'))
//document.querySelector(".e2").addEventListener("click", )
///document.querySelector(".e3").addEventListener("click",)
//document.querySelector(".e4").addEventListener("click", )
//document.querySelector(".e5").addEventListener("click", )