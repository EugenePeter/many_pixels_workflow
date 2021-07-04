import { gql } from "apollo-server-express";

declare global {
    namespace NodeJS {
        interface Global {
            test: any;
        }
    }
}

// TYPES
export const artist_type_Defs = gql`
    type Artist {
        first_name: String!
        age: Int!
        id: ID!
        user_id: ID!
        user_name: String
        address: String
        email: String
        gender: String
        last_name: String
        nationality: String
    }

    type Urls {
        raw: String
        full: String
        regular: String
        small: String
        thumb: String
    }

    type User {
        id: String
        updated_at: String
        username: String
        name: String
        first_name: String
        last_name: String
        twitter_username: String
        portfolio_url: String
        bio: String
        location: String
        # links: Object
        # profile_image: Object
        instagram_username: String
        total_collections: Int
        total_likes: Int
        total_photos: Int
        accepted_tos: Boolean
        for_hire: Boolean
        # social: Object
    }

    # type Exif {
    #     make: String
    #     model: String
    #     exposure_time: String
    #     aperture: String
    #     focal_length: String
    #     iso: Int
    # }

    type Location {
        title: String
        name: String
        city: String
        country: String
        # position: Object
    }

    type Photos {
        id: String
        created_at: String
        updated_at: String
        promoted_at: String
        width: Int
        height: Int
        color: String
        blur_hash: String
        description: String
        alt_description: String
        urls: Urls
        user: User
        # categories: Array
        likes: Boolean
        liked_by_user: Boolean
        # current_user_collections: [],
        sponsorship: String
        exif: String
        location: Location
        views: Int
        downloads: Int
    }

    # QUERIES
    extend type Query {
        getAllArtist: [Artist]!
        getAllPhotos: [Photos]!
        getArtistByID(user_id: String): Artist
    }
`;
