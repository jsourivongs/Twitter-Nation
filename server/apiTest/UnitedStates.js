// TODO: Find the woeid associated with each of these cities, and add the city object into the UnitedState object below (line 56 of this file)
var AK = [] // Alaska
var AL = ['Birmingham'] // Alabama
var AR = [] // Arkansas
var AZ = ['Mesa', 'Phoenix', 'Tucson'] // Arizona
var CA = ['Fresno', 'Long Beach', 'Los Angeles', 'Sacramento', 'San Diego', 'San Francisco', 'San Jose'] // California
var CO = ['Colorado Springs', 'Denver'] // Colorado
var CT = ['New Haven'] // Connecticut
var DE = [] // Delaware
var DC = [] 
var FL = ['Jacksonville', 'Miami', 'Orlando', 'Tallahassee', 'Tampa']; // Florida
var GA = ['Atlanta'] // Georgia
var HI = ['Honolulu'] // Hawaii
var IA = [] // Iowa
var ID = [] // Idaho
var IL = ['Chicago'] // Illinois
var IN = ['Indianapolis'] // Indiana
var KS = [] // Kansas
var KY = ['Louisville'] // Kentucky
var LA = ['Baton Rouge', 'New Orleans'] // Louisiana
var MA = ['Boston'] // Massachusetts
var MD = ['Baltimore'] // Maryland
var ME = [] // Maine
var MI = ['Detroit'] // Michigan
var MN = ['Minneapolis'] // Minnesota
var MO = ['Kansas City', 'St. Louis'] // Missouri
var MS = ['Jackson'] // Mississippi
var MT = [] // Montana
var NC = ['Charlotte', 'Greensboro', 'Raleigh'] // North Carolina
var ND = [] // North Dakota
var NE = ['Omaha'] // Nebraska
var NH = [] // New Hampshire
var NJ = [] // New Jersey
var NM = ['Albuquerque'] // New Mexico
var NV = ['Las Vegas'] // Nevada
var NY = ['New York'] // New York
var OH = ['Cincinnati', 'Cleveland', 'Columbus'] // Ohio
var OK = ['Oklahoma City'] // Oklahoma
var OR = ['Portland'] // Oregon
var PA = ['Harrisburg', 'Philadelphia', 'Pittsburgh'] // Pennsylvania
var RI = ['Providence'] // Rhode Island
var SC = [] // South Carolina
var SD = [] // South Dakota
var TN = ['Memphis', 'Nashville'] // Tennessee
var TX = ['Austin', 'Dallas-Ft. Worth', 'El Paso', 'Houston', 'San Antonio'] // Texas
var UT = ['Salt Lake City'] // Utah
var VA = ['Norfolk', 'Richmond', 'Virginia Beach'] // Virginia
var VT = [] // Vermont
var WA = ['Seattle'] // Washington
var WI = ['Milwaukee'] // Wisconsin
var WV = [] // West Virginia
var WY = [] // Wyoming



var UnitedStates = {
  name: 'United States',
  woeid: 23424977,
  states: [
    {
      code: 'AR',
      cities: []
    },
    {
      code: 'CA',
      cities: [
        {
          name: 'Fresno',
          woeid: 2407517
        },
        {
          name: 'Long Beach',
          woeid: 2441472
        },
        {
          name: 'Los Angeles',
          woeid: 2442047
        },
        {
          name: 'Sacramento',
          woeid: 2486340
        },
        {
          name: 'San Diego',
          woeid: 2487889
        },
        {
          name: 'San Francisco',
          woeid: 2487956
        },
        {
          name: 'SanJose',
          woeid: 2488042
        }
      ]
    },
    {
      code: 'FL',
      cities: [
        {
          name: 'Jacksonville',
          woeid: 2428344
        },
        {
          name: 'Miami',
          woeid: 2450022
        },
        {
          name: 'Orlando',
          woeid: 2466256
        },
        {
          name: 'Tallahassee',
          woeid: 2503713
        },
        {
          name: 'Tampa',
          woeid: 2503863
        }
      ]
    }
  ]
}
