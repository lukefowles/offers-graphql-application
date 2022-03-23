import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";

const userType = new GraphQLObjectType({
    name: 'userType',
    fields: {
        userid: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)}
    }
})

export default userType;