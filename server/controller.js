module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A friend is a present you give yourself", "A pleasant surprise is waiting for you.", "Adventure can be real happiness.", "An inch of time is an inch of gold.", "Believe it can be done.", "Failure is the chance to do better next time."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getCharacter: (req, res) => {
        const characters = ["Nick", "Jess", "Schmidt", "Cici"];
      
        res.status(200).send(characters);
    },

    getMovie: (req, res) => {
        const movies = ["Lion King", "Maze Runner", "Mummy"];
      
        res.status(200).send(movies);
    },

    getAnimal: (req, res) => {
        const animals = ["Lion", "Zebra", "Alligator"];
      
        res.status(200).send(animals);
    }




    // deleteCharacter: (req, res) => {
    //     const characters = ["Nick", "Jess", "Schmidt", "Cici"];
    //     for(let i = 0; i < characters.length; i++){
    //           characters.splice(i, 1);
    //           return res.status(200).send(characters);
    //         }
    // },

    
}

