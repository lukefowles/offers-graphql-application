import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt, GraphQLBoolean } from "graphql";

const userOfferType = new GraphQLObjectType({
    name: 'userOfferType',
    fields: {
        userofferid:  {type: GraphQLID},
        userid: {type: GraphQLInt},
        offerid: {type: GraphQLInt},
        isredeemed: {type: GraphQLBoolean}
    }
})

export default userOfferType;