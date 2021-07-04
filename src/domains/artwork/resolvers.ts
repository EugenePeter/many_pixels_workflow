export const artist_resolvers = {
    Query: {
        getAllPhotos: async (_: any, __: any, context: any) => {
            const { all_photos } = context;
            try {
                // const result = await db;
                const results = await all_photos("test");
                console.log("all photo results", results);
                return results;
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },
        getAllArtist: async (_: any, __: any, context: any) => {
            const { photos } = context;
            try {
                // const result = await db;
                const yo = await photos("test");
                console.log("yoo", yo);
                // return result;
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },

        getArtistByID: async (parent: any, { user_id }: any, { db }: any) => {
            try {
                const result = await db.getAll(user_id, { index: "user_id" });
                // console.log('result', result);
                return result[0];
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },
    },
};
