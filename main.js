import core from '@actions/core'

const run = async () => {
    const firstName = core.getInput('FirstName')
    const lastName = core.getInput('LastName')
    const birthTown = core.getInput('BirthTown')
    const maidenName = core.getInput('MaidenName')

    const name = `${lastName.slice(0, 3)}${firstName.slice(0, 2).toLowerCase()} ${maidenName.slice(0, 2)}${birthTown.slice(0, 3).toLowerCase()}`
    core.setOutput('StarWarsName', name)

    // Add GitHub Summary Log Entry
    await core.summary
        .addHeading('Star Wars Name Generator')
        .addTable([
            [{ data: 'First name', header: true }, { data: 'Last name', header: true }, { data: 'Birth town', header: true }, { data: "Mother''s Maiden Name", header: true }]
            [firstName, lastName, birthTown, maidenName]
        ])
        .addHeading(name, 2)
        .write()
}

run()
