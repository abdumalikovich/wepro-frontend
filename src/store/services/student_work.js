// src/store/services/StudentWorks.js
import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client'

class StudentWork extends BaseModel {
    constructor(data, options) {
        super(data, options)
    }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'StudentWork'

    // Define default properties here
    static instanceDefaults() {
        return {}
    }
}

const servicePath = 'student_works'
const servicePlugin = makeServicePlugin({
    Model: StudentWork,
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