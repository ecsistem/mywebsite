import { gql } from "@apollo/client";

export const GET_CERTIFICATIONS = gql `
query certifications {
  certifications(orderBy: creationDate_ASC) {
    name
    id
    organization
    creationDate
    description
    urlImage
  }
}
`;