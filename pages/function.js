function getName (name) {
    if (name === 'Ronald Firbank') {
        return 1
    }
    if (name === 'Rick Astley') {
        return 2
    }
    if (name === 'Tony Soprano') {
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