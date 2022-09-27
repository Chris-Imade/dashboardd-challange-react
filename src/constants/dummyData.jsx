import avatar from '../assets/avatar.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.jpg';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9.jpg';

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const workspace = [
    {
        name: "Client Projects",
        id: 1,
        subWorkspaces: [{
            name: "Client Projects",
            id: 1
        },
        {
            name: "Client Projects",
            id: 2
        },
        {
            name: "Client Projects",
            id: 3
        }]
    },
    {
        name: "Daily Todos",
        id: 2,
        subWorkspaces: [
            {
                name: "Portfolio Website",
                id: 1
            },
            {
                name: "Crypto Mobile App",
                id: 2
            },
            {
                name: "Game Design",
                id: 3
            }
        ]
    },
    {
        id: 3,
        name: "Yearly Goals",
        subWorkspaces: [
        {
            name: "Yearly Goals",
            id: 1
        },
        {
            name: "Yearly Goals",
            id: 2
        },
        {
            name: "Yearly Goals",
            id: 3
        }]
    }
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },

];


export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];


export const scheduleData = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      Location: 'Space Center USA',
      StartTime: '2021-01-10T04:00:00.000Z',
      EndTime: '2021-01-10T05:30:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      Location: 'Newyork City',
      StartTime: '2021-01-11T06:30:00.000Z',
      EndTime: '2021-01-11T08:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      Location: 'Space Center USA',
      StartTime: '2021-01-12T04:00:00.000Z',
      EndTime: '2021-01-12T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 4,
      Subject: 'Meteor Showers in 2021',
      Location: 'Space Center USA',
      StartTime: '2021-01-13T07:30:00.000Z',
      EndTime: '2021-01-13T09:00:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      Location: 'Space Center USA',
      StartTime: '2021-01-14T06:30:00.000Z',
      EndTime: '2021-01-14T08:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      Location: 'Bermuda',
      StartTime: '2021-01-14T04:00:00.000Z',
      EndTime: '2021-01-14T05:30:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      Location: 'Himalayas',
      StartTime: '2021-01-15T05:30:00.000Z',
      EndTime: '2021-01-15T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 8,
      Subject: 'Life on Mars',
      Location: 'Space Center USA',
      StartTime: '2021-01-16T03:30:00.000Z',
      EndTime: '2021-01-16T04:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 9,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-18T05:30:00.000Z',
      EndTime: '2021-01-18T07:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 10,
      Subject: 'Wildlife Galleries',
      Location: 'Africa',
      StartTime: '2021-01-20T05:30:00.000Z',
      EndTime: '2021-01-20T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 11,
      Subject: 'Best Photography 2021',
      Location: 'London',
      StartTime: '2021-01-21T04:00:00.000Z',
      EndTime: '2021-01-21T05:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 12,
      Subject: 'Smarter Puppies',
      Location: 'Sweden',
      StartTime: '2021-01-08T04:30:00.000Z',
      EndTime: '2021-01-08T06:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      Location: 'Space Center USA',
      StartTime: '2021-01-06T05:00:00.000Z',
      EndTime: '2021-01-06T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 14,
      Subject: 'Aliens vs Humans',
      Location: 'Research Center of USA',
      StartTime: '2021-01-05T04:30:00.000Z',
      EndTime: '2021-01-05T06:00:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2021-01-19T04:00:00.000Z',
      EndTime: '2021-01-19T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 16,
      Subject: 'Sky Gazers',
      Location: 'Alaska',
      StartTime: '2021-01-22T05:30:00.000Z',
      EndTime: '2021-01-22T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-11T00:00:00.000Z',
      EndTime: '2021-01-11T02:00:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      Location: 'Space Center USA',
      StartTime: '2021-01-11T11:30:00.000Z',
      EndTime: '2021-01-11T13:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      Location: 'San Fransisco',
      StartTime: '2021-01-14T00:30:00.000Z',
      EndTime: '2021-01-14T02:00:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 20,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-14T10:30:00.000Z',
      EndTime: '2021-01-14T12:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 21,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-10T08:30:00.000Z',
      EndTime: '2021-01-10T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 22,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-12T09:00:00.000Z',
      EndTime: '2021-01-12T10:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 23,
      Subject: 'Sky Gazers',
      Location: 'Greenland',
      StartTime: '2021-01-15T09:00:00.000Z',
      EndTime: '2021-01-15T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 24,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2021-01-16T07:00:00.000Z',
      EndTime: '2021-01-16T09:00:00.000Z',
      CategoryColor: '#7fa900',
    },
  ];







  export const employeesData = [
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar3,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
  ];


  export const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry },
  
    { field: 'HireDate',
      headerText: 'Hire Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'ReportsTo',
      headerText: 'Reports To',
      width: '120',
      textAlign: 'Center' },
    { field: 'EmployeeID',
      headerText: 'Employee ID',
      width: '125',
      textAlign: 'Center' },
  ];