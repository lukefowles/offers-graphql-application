import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import userOfferType from './userOfferType.js'
import {pgdb} from '../../database/pgdb.js'

const userType = new GraphQLObjectType({
    name: 'userType',
    fields: {
        userid: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        userOffers: {
            type: new GraphQLList(userOfferType),
            resolve(obj, args, {pgPool}) {
                return pgdb(pgPool).getUserOffers(obj.userid)
            }}
    }
})

export default userType;