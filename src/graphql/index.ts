import { ClientProps } from "@/types";
import { gql, request } from "graphql-request";
import axios from 'axios';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

export const getAbout = async () => {
    const query = gql`
        query About {
            aboutsConnection {
                edges {
                    cursor
                    node {
                        id
                        publishedAt
                        description
                    }
                }
            }
        }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.aboutsConnection.edges;
};

export const getProjects = async () => {
    const query = gql`
        query Project {
            projectsConnection{
                edges {
                    cursor
                    node {
                        id
                        title
                        view
                        github
                        stack
                        createdAt
                        publishedAt
                        description
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.projectsConnection.edges;

};



//     const query = gql`
//         query Reviews {
//             reviewsConnection {
//                 edges {
//                     cursor
//                     node {
//                         id
//                         name
//                         text
//                         rating
//                         country
//                         publishedAt
//                     }
//                 }
//             }
//         }
//     `;

//     const result: any = await request(graphqlAPI, query);
//     return result.reviewsConnection.edges;
// };
