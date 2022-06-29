function getName (name) {
    if (name === 'Saul Goodman') {
        return 1
    }
    if (name === 'Walter White') {
        return 2
    }
    if (name === 'Gus Fring') {
        return 3
    }
    if (name === 'None') {
        return 'NULL'
    }
}

function getRole(role) {
    if(role === 'Lawyer') {
        return 1
    }
    if(role === 'Engineer') {
        return 2
    }
    if(role === 'Client Relations') {
        return 3
    }
    if(role === 'Distribution') {
        return 4
    }

    
}

module.exports = {
    getName, getRole
}