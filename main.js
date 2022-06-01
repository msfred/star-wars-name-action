import core from '@actions/core'

const run = () => {
    const firstName = core.getInput('FirstName')
    const lastName = core.getInput('LastName')
    const birthTown = core.getInput('BirthTown')
    const maidenName = core.getInput('MaidenName')

    const name = `${lastName.slice(0,3)}${firstName.slice(0,2).toLowerCase()} ${maidenName.slice(0,2)}${birthTown.slice(0,3).toLowerCase()}`
    core.setOutput('StarWarsName', name)
}

run()
