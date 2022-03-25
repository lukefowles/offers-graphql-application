import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType } from "graphql";
import userType from '../types/userType.js'
import {pgdb} from '../../database/pgdb.js'

const userInputType = new GraphQLInputObjectType({
    name: 'userInput',
    fields: {
        userid: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
    }
})

const userMutationType = {
    type: userType,
    args: {
        input: {type: new GraphQLNonNull(userInputType)}
    },
    resolve(obj, { input }, {pgPool} ) {
        return pgdb(pgPool).addNewUser(input);
    }
}

export default userMutationType