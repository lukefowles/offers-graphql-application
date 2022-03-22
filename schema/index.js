import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql'
import userType from './types/userType.js'


const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    fields : {
        user: {
            type: userType,
            description: 'The user given by a specified ID',
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: () => {
                return {
                    id: 1,
                    name: 'Jack',
                    email: 'Jack@jackmail.com'
                }
            }
        }
    }
})

const offerSchema = new GraphQLSchema({
    query: RootQueryType,
    //mutation:
})

export default offerSchema