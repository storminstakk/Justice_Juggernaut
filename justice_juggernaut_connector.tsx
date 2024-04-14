import justiceJuggernautSources, { JurisdictionSources, DataSource } from './justice_juggernaut_sources';

// Function to retrieve data sources for a given jurisdiction
const getDataSourcesForJurisdiction = (jurisdiction: string): DataSource[] | undefined => {
    // Normalize jurisdiction name (e.g., convert to lowercase)
    const normalizedJurisdiction = jurisdiction.toLowerCase();

    // Retrieve data sources for the specified jurisdiction from the sources object
    const sources: JurisdictionSources = justiceJuggernautSources;
    const jurisdictionSources = sources[normalizedJurisdiction];

    if (!jurisdictionSources) {
        console.error(`No data sources found for jurisdiction: ${jurisdiction}`);
        return undefined;
    }

    // Extract data sources based on the jurisdiction type (object or array)
    if (Array.isArray(jurisdictionSources)) {
        // Advanced sources are directly provided as an array
        return jurisdictionSources;
    } else {
        // Regular jurisdiction sources are nested within an object
        const sourcesArray: DataSource[] = [];

        // Iterate over object keys to retrieve data sources
        Object.keys(jurisdictionSources).forEach((key) => {
            const dataSource = jurisdictionSources[key];
            if (Array.isArray(dataSource)) {
                // Handle advanced sources within the nested object
                sourcesArray.push(...dataSource);
            } else {
                // Handle regular data sources within the nested object
                sourcesArray.push(dataSource as DataSource);
            }
        });

        return sourcesArray;
    }
};

// Function to retrieve all data sources from the entire collection
const getAllDataSources = (): DataSource[] => {
    const allSources: DataSource[] = [];

    // Iterate over each jurisdiction in the sources object
    Object.keys(justiceJuggernautSources).forEach((jurisdiction) => {
        const jurisdictionSources = justiceJuggernautSources[jurisdiction];

        if (Array.isArray(jurisdictionSources)) {
            // Add advanced sources directly to the collection
            allSources.push(...jurisdictionSources);
        } else {
            // Add regular and advanced sources from the nested object
            Object.keys(jurisdictionSources).forEach((key) => {
                const dataSource = jurisdictionSources[key];
                if (Array.isArray(dataSource)) {
                    // Handle advanced sources within the nested object
                    allSources.push(...dataSource);
                } else {
                    // Handle regular data sources within the nested object
                    allSources.push(dataSource as DataSource);
                }
            });
        }
    });

    return allSources;
};

// Export functions for external usage
export { getDataSourcesForJurisdiction, getAllDataSources };
