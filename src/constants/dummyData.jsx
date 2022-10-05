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
import assets from './assets';

export const firstTier = [
  {
      id: 1,
      routeName: "Dashboard",
      routePath: "dashboard",
      routeIcon: assets.dashboardIcon
  },
  {
      id: 2,
      routeName: "Messages",
      routePath: "messages",
      routeIcon: assets.messageTabIcon
  },
  {
      id: 3,
      routeName: "Team Members",
      routePath: "team-members",
      routeIcon: assets.teamMembers
  },
  {
      id: 4,
      routeName: "Calender",
      routePath: "calendar",
      routeIcon: assets.calendarTabIcon
  },
  {
      id: 5,
      routeName: "Settings",
      routeIcon: assets.settingIcon
  }
];


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
            id: 1,
            path: "workspace/client-projects"
        },
        {
            name: "Research Projects",
            id: 2,
            path: "workspace/client-projects/research-project"
        },
        {
            name: "Public Offers",
            id: 3,
            path: "workspace/client-projects/public-offers"
        }]
    },
    {
        name: "Daily Todos",
        id: 2,
        subWorkspaces: [
            {
                name: "Portfolio Website",
                id: 1,
                path: "workspace/daily-todos/portfolio-website"
            },
            {
                name: "Crypto Mobile App",
                id: 2,
                path: "workspace/daily-todos/crypto-mobile-app"
            },
            {
                name: "Game Design",
                id: 3,
                path: "workspace/daily-todos/game-design"
            }
        ]
    },
    {
        id: 3,
        name: "Yearly Goals",
        subWorkspaces: [
        {
            name: "Two Year's Goals",
            id: 1,
            path: "workspace/yearly-goals/two-years-goals"
        },
        {
            name: "Four Year's Goals",
            id: 2,
            path: "workspace/yearly-goals/four-years-goals"
        },
        {
            name: "Four Year's Goals",
            id: 3,
            path: "workspace/yearly-goals/six-years-goals"
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


  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29007',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 9',
      Title: 'Task - 29011',
      Status: 'Validate',
      Summary: 'Validate the issues reported by the customer.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Validation,Fix',
      Estimate: 1,
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
      Id: 'Task 10',
      Title: 'Task - 29015',
      Status: 'Open',
      Summary: 'Show the retrieved data from the server in grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Database,SQL',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 11',
      Title: 'Task - 29016',
      Status: 'InProgress',
      Summary: 'Fix cannot open user’s default database SQL error.',
      Priority: 'Critical',
      Type: 'Bug',
      Tags: 'Database,Sql2008',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 12',
      Title: 'Task - 29017',
      Status: 'Review',
      Summary: 'Fix the issues reported in data binding.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Databinding',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
      Id: 'Task 13',
      Title: 'Task - 29018',
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Grid,Sql',
      Estimate: 2,
      Assignee: 'Andrew Fuller',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
      Id: 'Task 14',
      Title: 'Task - 29019',
      Status: 'Validate',
      Summary: 'Validate databinding issues.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Margaret hamilt',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29020',
      Status: 'Close',
      Summary: 'Analyze grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Analyze',
      Estimate: 2.5,
      Assignee: 'Margaret hamilt',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 16',
      Title: 'Task - 29021',
      Status: 'Close',
      Summary: 'Stored procedure for initial data binding of the grid.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Databinding',
      Estimate: 1.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-release, e-steven-walker',
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29022',
      Status: 'Close',
      Summary: 'Analyze stored procedures.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Procedures',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 7,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 18',
      Title: 'Task - 29023',
      Status: 'Validate',
      Summary: 'Validate editing issues.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Editing',
      Estimate: 1,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-critical, e-nancy-davloio',
    },
    {
      Id: 'Task 19',
      Title: 'Task - 29024',
      Status: 'Review',
      Summary: 'Test editing functionality.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Editing,Test',
      Estimate: 0.5,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-nancy-davloio',
    },
    {
      Id: 'Task 20',
      Title: 'Task - 29025',
      Status: 'Open',
      Summary: 'Enhance editing functionality.',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Editing',
      Estimate: 3.5,
      Assignee: 'Andrew Fuller',
      RankId: 5,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-andrew-fuller',
    },
    {
      Id: 'Task 21',
      Title: 'Task - 29026',
      Status: 'InProgress',
      Summary: 'Improve the performance of the editing functionality.',
      Type: 'Epic',
      Priority: 'High',
      Tags: 'Performance',
      Estimate: 6,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#e91e64',
      ClassName: 'e-epic, e-high, e-nancy-davloio',
    },
    {
      Id: 'Task 22',
      Title: 'Task - 29027',
      Status: 'Open',
      Summary: 'Arrange web meeting with the customer to show editing demo.',
      Type: 'Others',
      Priority: 'High',
      Tags: 'Meeting,Editing',
      Estimate: 5.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-high, e-steven-walker',
    },
    {
      Id: 'Task 23',
      Title: 'Task - 29029',
      Status: 'Review',
      Summary: 'Fix the editing issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Editing,Fix',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 6,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-janet-leverling',
    },
    {
      Id: 'Task 24',
      Title: 'Task - 29030',
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-steven-walker',
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29031',
      Status: 'Testing',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
  ];


  export const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: true },
  ];

