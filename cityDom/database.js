// City database creation
const CityDatabase = {}

// City table in database
CityDatabase.cities = []

// Add cities to the city table in the city database
CityDatabase.cities.push(
    {
        name: "Hong Kong",
        yearVisited: "2007",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Hong-Kong_skyline.JPG",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Havana",
        yearVisited: "2017",
        image: "https://c1.staticflickr.com/5/4496/37229144810_837ef346e3_b.jpg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Budapest",
        yearVisited: "2011",
        image: "https://s.iha.com/00135021506/Budapest.jpeg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Tallinn",
        yearVisited: "2012",
        image: "https://c1.staticflickr.com/9/8065/8192222829_2cb07dbbca_b.jpg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Denver",
        yearVisited: "2016",
        image: "https://c1.staticflickr.com/5/4429/37377943205_8fec84fb5d_b.jpg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Kyiv",
        yearVisited: "2006",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Kyiv%2C_Saint-Catherine%27s_Greek_monastery.JPG",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "St. Petersburg",
        yearVisited: "2004",
        image: "https://c1.staticflickr.com/1/266/31786984636_ffc7294276_b.jpg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Brasov",
        yearVisited: "2011",
        image: "https://s.iha.com/00123910756/Brasov-county.jpeg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Salt Lake City",
        yearVisited: "2016",
        image: "https://c1.staticflickr.com/7/6023/5948817712_9bdf3335b5_b.jpg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    },
    {
        name: "Bejing",
        yearVisited: "2007",
        image: "https://s.iha.com/00125864556/Beijing-Beijing.jpeg",
        attractions: [
            {
                att1: "one",
                att2: "two",
                att3: "three",
                att4: "four",
                att5: "five"
            }
        ]
    }
)


// Save database to local storage
localStorage.setItem(
    "CityDatabase",
    JSON.stringify(CityDatabase)
)