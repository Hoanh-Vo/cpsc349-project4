export function getUserbyID (id) {
  if (id === 1 || id === 'ProfAvery') {
    return {
      id: 1,
      username: 'ProfAvery',
      email: 'kavery@fullerton.edu',
      password: 'password'
    }
  } else if (id === 2 || id === 'KevinAWortman') {
    return {
      id: 2,
      username: 'KevinAWortman',
      email: 'kwortman@fullerton.edu',
      password: 'qwerty'
    }
  } else if (id === 3 || id === 'Beth_CSUF') {
    return {
      id: 3,
      username: 'Beth_CSUF',
      email: 'beth.harnick.shapiro@fullerton.edu',
      password: 'secret'
    }
  }

  return null
}
