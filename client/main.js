const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const characterBtn = document.getElementById("characterButton")
const movieBtn = document.getElementById("movieButton")
const animalBtn = document.getElementById("animalButton")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getCharacter = () => {
    axios.get("http://localhost:4000/api/character/")
        .then(res => {
            const data = res.data;
            for (let i = 0; data.length > i; i++){
                const newEl = document.createElement('p')
                newEl.textContent = data[i]
                document.body.appendChild(newEl)
            }
        })
};

const getMovie = () => {
    axios.get("http://localhost:4000/api/movie/")
        .then(res => {
            const data = res.data;
            for (let i = 0; data.length > i; i++){
                const El = document.createElement('p')
                El.textContent = data[i]
                document.body.appendChild(El)
            }
        })
};

const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal/")
        .then(res => {
            const data = res.data;
            for (let i = 0; data.length > i; i++){
                const Ele = document.createElement('p')
                Ele.textContent = data[i]
                document.body.appendChild(Ele)
            }
        })
};





// const getCharacter = () => {
//     axios.get("http://localhost:4000/api/character/")
//         .then(res => {
//            const data = res.data;
//             alert(data);
//         })
// };

// -----------------------------------------------------------------------------

// const deleteCharacter = () => {
//     axios.get("http://localhost:4000/api/character/")
//         .then(res => {
//             const data = res.data;
//             for (let i = 0; data.length > i; i++){
//                 const newEl = document.createElement('p')
//                 newEl.textContent = data[i]
//                 document.body.appendChild(newEl)
//             }
//         })
// };



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
characterBtn.addEventListener('click', getCharacter)
movieBtn.addEventListener('click', getMovie)
animalBtn.addEventListener('click', getAnimal)


