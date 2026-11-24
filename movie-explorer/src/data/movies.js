export const GENRES = [
  { id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" }, { id: 80, name: "Crime" }, { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" }, { id: 27, name: "Horror" }, { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" }, { id: 878, name: "Sci-Fi" }, { id: 53, name: "Thriller" },
];
const g = (id) => GENRES.find((x) => x.id === id);

// [id, title, year, genreIds, rating, votes, runtime, director, cast[], tagline, overview]
const RAW = [
  [1, "The Shawshank Redemption", 1994, [18, 80], 9.3, 2900000, 142, "Frank Darabont", ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], "Fear can hold you prisoner. Hope can set you free.", "A banker wrongly jailed for murder befriends a fellow inmate and slowly builds a life of quiet resistance inside prison walls."],
  [2, "The Godfather", 1972, [18, 80], 9.2, 2000000, 175, "Francis Ford Coppola", ["Marlon Brando", "Al Pacino", "James Caan"], "An offer you can't refuse.", "The aging head of a crime dynasty hands control of the family to his reluctant youngest son."],
  [3, "The Dark Knight", 2008, [28, 80, 18], 9.0, 2900000, 152, "Christopher Nolan", ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "Why so serious?", "Batman faces a chaotic criminal mastermind who pushes Gotham's heroes to their limits."],
  [4, "Inception", 2010, [28, 878, 53], 8.8, 2600000, 148, "Christopher Nolan", ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], "Your mind is the scene of the crime.", "A skilled thief who steals secrets from dreams is offered one last job: planting an idea in a target's mind."],
  [5, "Interstellar", 2014, [12, 18, 878], 8.7, 2200000, 169, "Christopher Nolan", ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], "Mankind was born on Earth. It was never meant to die here.", "As Earth fails, a group of explorers travels through a wormhole in search of a new home for humanity."],
  [6, "Pulp Fiction", 1994, [80, 53], 8.9, 2300000, 154, "Quentin Tarantino", ["John Travolta", "Samuel L. Jackson", "Uma Thurman"], "Just because you are a character doesn't mean you have character.", "Interwoven stories of hitmen, a boxer and a gangster's wife unfold across Los Angeles."],
  [7, "Forrest Gump", 1994, [35, 18, 10749], 8.8, 2300000, 142, "Robert Zemeckis", ["Tom Hanks", "Robin Wright", "Gary Sinise"], "Life is like a box of chocolates.", "A kind-hearted man with a low IQ drifts through decades of American history, always chasing his childhood love."],
  [8, "The Matrix", 1999, [28, 878], 8.7, 2100000, 136, "Lana & Lilly Wachowski", ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], "Welcome to the real world.", "A hacker discovers reality is a simulation and joins a rebellion against the machines that run it."],
  [9, "Gladiator", 2000, [28, 12, 18], 8.5, 1600000, 155, "Ridley Scott", ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], "What we do in life echoes in eternity.", "A betrayed Roman general becomes a gladiator and seeks revenge on the emperor who destroyed his family."],
  [10, "Parasite", 2019, [35, 53, 18], 8.5, 1000000, 132, "Bong Joon-ho", ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"], "Act like you own the place.", "A poor family schemes its way into the lives of a wealthy household, with unexpected consequences."],
  [11, "Spirited Away", 2001, [16, 14, 12], 8.6, 850000, 125, "Hayao Miyazaki", ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"], "A world of spirits awaits.", "A young girl wanders into a world of spirits and must work in a bathhouse to free her parents."],
  [12, "Toy Story", 1995, [16, 35, 12], 8.3, 1100000, 81, "John Lasseter", ["Tom Hanks", "Tim Allen", "Don Rickles"], "The adventure takes off.", "A cowboy doll feels threatened when a flashy space ranger toy becomes his owner's new favourite."],
  [13, "The Lion King", 1994, [16, 18, 12], 8.5, 1100000, 88, "Roger Allers & Rob Minkoff", ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"], "The circle of life.", "A young lion prince flees his kingdom after his father's death, then returns to claim his place."],
  [14, "Avengers: Endgame", 2019, [12, 28, 878], 8.4, 1300000, 181, "Anthony & Joe Russo", ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"], "Avengers assemble.", "The surviving heroes attempt a last, desperate plan to undo the damage done by Thanos."],
  [15, "Get Out", 2017, [27, 9648, 53], 7.8, 650000, 104, "Jordan Peele", ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"], "Just because you're invited doesn't mean you're welcome.", "A young man visiting his girlfriend's family estate uncovers a disturbing secret."],
  [16, "The Conjuring", 2013, [27, 9648, 53], 7.5, 570000, 112, "James Wan", ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"], "Based on the true case files of the Warrens.", "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."],
  [17, "Se7en", 1995, [80, 9648, 53], 8.6, 1900000, 127, "David Fincher", ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"], "Seven deadly sins. Seven ways to die.", "Two detectives hunt a serial killer who stages his crimes around the seven deadly sins."],
  [18, "La La Land", 2016, [35, 18, 10749], 8.0, 600000, 128, "Damien Chazelle", ["Ryan Gosling", "Emma Stone", "John Legend"], "Here's to the fools who dream.", "A jazz pianist and an aspiring actress fall in love while chasing their dreams in Los Angeles."],
  [19, "Titanic", 1997, [18, 10749], 7.9, 1300000, 195, "James Cameron", ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"], "Nothing on Earth could come between them.", "A young couple from different social classes fall in love aboard the doomed ocean liner."],
  [20, "The Lord of the Rings: The Fellowship of the Ring", 2001, [12, 14, 28], 8.9, 2000000, 178, "Peter Jackson", ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], "One ring to rule them all.", "A hobbit and eight companions set out to destroy a powerful ring and save Middle-earth."],
  [21, "Dangal", 2016, [18, 28], 8.3, 200000, 161, "Nitesh Tiwari", ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"], "Wrestling is not just for men.", "A former wrestler trains his daughters to become world-class champions against social expectations."],
  [22, "3 Idiots", 2009, [35, 18], 8.4, 440000, 170, "Rajkumar Hirani", ["Aamir Khan", "R. Madhavan", "Sharman Joshi"], "Follow your passion, success will follow.", "Two friends search for their long-lost college buddy and recall how he challenged the education system."],
  [23, "Baahubali: The Beginning", 2015, [28, 12, 14], 8.0, 130000, 159, "S. S. Rajamouli", ["Prabhas", "Rana Daggubati", "Anushka Shetty"], "An epic begins.", "A young man discovers his royal heritage and sets out to reclaim a kingdom."],
  [24, "Vikram Vedha", 2017, [28, 80, 53], 8.3, 60000, 147, "Pushkar–Gayathri", ["R. Madhavan", "Vijay Sethupathi", "Shraddha Srinath"], "Truth has two sides.", "A police officer hunts a gangster who surrenders and challenges him with riddles about right and wrong."],
];

export const MOVIES = RAW.map(([id, title, year, ids, rating, votes, runtime, director, cast, tagline, overview]) => ({
  id, title, tagline, overview, runtime,
  release_date: String(year),
  genre_ids: ids,
  genres: ids.map(g),
  vote_average: rating,
  vote_count: votes,
  poster_path: null,
  credits: {
    cast: cast.map((name) => ({ name })),
    crew: [{ job: "Director", name: director }],
  },
  videos: { results: [] },
}));
