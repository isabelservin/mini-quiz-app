//Team 1 - JustJavaScript
let rami = 88
let natoya = 92
let max = 68
let lynn = 100

let team1 = [rami, natoya, max, lynn]

//Team 2 - We Are Ruby
let sasha = 82
let mohammed = 98
let jennifer = 94
let denise = 92

let team2= [sasha, mohammed, jennifer, denise]

//calculate average scores for each team
const calcAvg = (team) => {
    let score = 0
    let numExplorers = 0
    team.forEach((explorer) => {
        score += explorer
        numExplorers += 1
    })
    return score / numExplorers
}

let avgTeam1 = calcAvg(team1)
let avgTeam2 = calcAvg(team2)

//Math.round() round to the nearest int
console.log(`Average scores for JustJavaScript: ${Math.round(avgTeam1)}`)
console.log(`Average scores for We Are Ruby: ${Math.round(avgTeam2)}`)

//calculate number of explorers passing the quiz >= 70
const calcPassingExplorers = (team) => {
    let numPassing = 0
    team.forEach((explorer) => {
        if(explorer >= 70) {
            numPassing += 1
        }
    })
    return numPassing
}

let passingTeam1 = calcPassingExplorers(team1)
let passingTeam2 = calcPassingExplorers(team2)

console.log(`Number of explorers passing on team JustJavaScript: ${passingTeam1}`)
console.log(`Number of explorers passing on team We Are Ruby: ${passingTeam2}`)