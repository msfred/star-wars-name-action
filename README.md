# Star Wars Name

Takes input and returns a Star Wars sounding name.  Uses the following algorithm to generate the Star Wars name.
- Star Wars First Name: 1st 3 letters of last name + 1st 2 letters of firstname
- Star Wars Last Name: 1st 2 letters of mother's maiden name + 1st 3 letters of birth city

## Inputs
- FirstName
- LastName
- BirthCity
- MaidenName

## Outputs
- StarWarsName

## Usage
```
- uses: .github/actions/star-wars-name-action@v1
  with:
    FirstName: George
    LastName: Washington
    BirthCity: Popes Creek
    MaidenName: Ball
```
yields
```
Wasge Bapop
```
