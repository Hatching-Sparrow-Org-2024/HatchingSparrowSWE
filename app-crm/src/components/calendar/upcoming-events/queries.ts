import gql from "graphql-tag";

//This GraphQL query retrieves upcoming events based on specific filters, sorting, and paging criteria. 
//It's structured to work with Apollo Client, a popular GraphQL client in JavaScript applications.

export const CALENDAR_UPCOMING_EVENTS_QUERY = gql
`
    query UpcomingEvents(
        $filter: EventFilter!
        $sorting: [EventSort!]
        $paging: OffsetPaging!
    ) {
        events(filter: $filter, sorting: $sorting, paging: $paging) {
            nodes {
                id
                title
                color
                startDate
                endDate
            }
            totalCount
        }
    }
`;