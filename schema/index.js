import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql'
import userType from './types/userType.js'
import {pgdb} from '../database/pgdb.js'
import userMutationType from './mutations/userMutations.js'


// pgdb(pgPool).getUser(2); 

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    fields : {
        user: {
            type: userType,
            description: 'The user given by a specified ID',
            args: {
                userid: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: (obj, args, {pgPool}) => {
                return pgdb(pgPool).getUser(args.userid)
            }
        }
    }
})

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: () => {
        AddUser: userMutationType
    }
})

const offerSchema = new GraphQLSchema({
    query: RootQueryType,
    //mutation:
})

export default offerSchema