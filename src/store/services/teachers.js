// src/store/services/users.js
import feathersClient, {BaseModel, makeServicePlugin} from '../../feathers-client'

class Teacher extends BaseModel {
    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Teacher'

    constructor(data, options) {
        super(data, options)
    }

    // Define default properties here
    static instanceDefaults() {
        return {}
    }
}

const servicePath = 'teachers'
const servicePlugin = makeServicePlugin({
    Model: Teacher,
    service: feathersClient.service(servicePath),
    servicePath
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
})

export default servicePlugin