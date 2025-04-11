// create interface
export interface UserInformation {
    name: string;
    age: number;
    email: string;
    address: {
        city: string;
        state: string;
        country: string;
    };
}
export const USERDATA:UserInformation[] = [
    {
    
            name: "John Doe",
            age: 30,
            email: "john.doe@example.com",
            address: {
                city: "New York",
                state: "NY",
                country: "USA",
            },
        },
    
    {
   
            name: "Jane Smith",
            age: 25,
            email: "jane.smith@example.com",
            address: {
                city: "Los Angeles",
                state: "CA",
                country: "USA",
            },
        
    },
    {
        
            name: "Michael Johnson",
            age: 35,
            email: "michael.johnson@example.com",
            address: {
                city: "Chicago",
                state: "IL",
                country: "USA",
            },
    },
    {
            name: "Emily Davis",
            age: 28,
            email: "emily.davis@example.com",
            address: {
                city: "Houston",
                state: "TX",
                country: "USA",
            },
        },
    {
            name: "David Wilson",
            age: 40,
            email: "david.wilson@example.com",
            address: {
                city: "Phoenix",
                state: "AZ",
                country: "USA",
            },
    },
];
