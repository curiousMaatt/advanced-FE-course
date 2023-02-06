
let entered_num = 0;

function inputCheck(event) {
    entered_num = parseFloat(event.target.value);
}

function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }
  
    return false;
}

function checkNum(num){
    const min_film = 1;
    const max_film = 6;

    if(!isFloat(num)){
        if(num == 0){
            return "You have to enter number of film";
        }
        else if( num < min_film || num > max_film ){
            return "There is no such film";
        } else {
            return num;
        }
    }
    else {
        return "Number of film can't be float";
    }
}

async function getCharactersFromEpisode() {
    let filtered_val = checkNum(entered_num);
    input_field.value = "";

    if(typeof filtered_val == "number"){

        // films in swapi are in the backwards order
        // - At the begining original trylogy (episdoe 4,5,6)
        // then prequels (1,2,3). So I want to show in right
        // order.

        let num_of_film;

        if(filtered_val < 4){
            num_of_film = filtered_val + 3;
        }
        else { /* films  No 4, 5, 6*/
            num_of_film = filtered_val - 3;
        }

        let adress_for_film = `https://swapi.dev/api/films/${num_of_film}/`;

        try {
            const requestFilm = await fetch(adress_for_film);
            const responseFilm = await requestFilm.json();

            const title = await responseFilm.title; // get title of the film
            const charactersHttpArr = await responseFilm.characters; // arr of links to characters 

            // creating basic template of section with title, if It hasn't been created before
            // if It has then It will just change the value of title
            await createTitleTemplate(title);

            // if slider was preveously created It will be deleted
            removeSlider();

            charactersHttpArr.forEach( async(val) => {
                const request = await fetch(val);
                const response = await request.json();

                // check 
                // console.log({name: response.name, birth_year: response.birth_year, gender: response.gender});
                
                // create a slide with characters paremeters
                await createCharactersSlider(response.name, response.birth_year, response.gender);
            });
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }

    } else{
        console.log(filtered_val);
    }
}

function createTitleTemplate(title) {
    // checking
    const check_existence = document.querySelector(".film_section");

    if (check_existence !== null) {
        // Element exist

        const heading = document.querySelector(".film_section_heading");
        heading.innerHTML = title;
    } 
    else {
        // Element doesn't exist"
        
        const section = document.createElement("section");
        section.classList.add("film_section");

        const page_template = `
            <h1 class="film_section_heading">${title}</h1>
            <p class="film_section_subheading">CHARACTERS</p>
            <div class="film_section_slider"></div>
        `;
        /*<div class="film_section_slider"></div>*/
        document.body.append(section);
        section.innerHTML = page_template;
    }
}

function createCharactersSlider(name, year, gender) {

        // checking
        // const check_existence = document.querySelector(".");
        // if (check_existence !== null) {
        //     // Element exist
        // } 
        // else {
        //     // Element doesn't exist"
        // }

    const section = document.querySelector(".film_section_slider");

    const page_template = `
        <div class="person">
            <div class="person_info_line"> 
                <p>Name:</p>
                <p>${name}</p>
            </div>

            <div class="person_info_line"> 
                <p>Year of Born:</p>
                <p>${year}</p>
            </div>

            <div class="person_info_line"> 
                <p>Gender:</p>
                <p>${gender}</p>
            </div>
        </div>
    `;

    section.innerHTML += page_template;
}

function removeSlider() {
    let elements = document.querySelectorAll(".person_info_line");
    let wrappers = document.querySelectorAll(".person");

    elements.forEach( (el) => {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    });

    wrappers.forEach( (wrapper) => {
        wrapper.remove();
    });
}

// slick slider 
$('.film_section_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
});

async function getPlanets() {
    try {
        const request = await fetch("https://swapi.dev/api/planets/");
        const response = await request.json();

        const planetsArr = await response.results;
        // console.log(planetsArr); // for checking
        // checking
        const check_existence = document.querySelector(".planets_list");

        if (check_existence !== null) {
            // Element exist  --> tell It has been already created

            alert("Planets were created");
        } 
        else {
            // Element doesn't exist --> create 

            const main_section = document.querySelector(".planet_section");
            const section = document.createElement("div");
            section.classList.add("planets_list");
            main_section.append(section);

            planetsArr.forEach( async(val) => {
                const cell = document.createElement("a");
                cell.classList.add("cell");
                section.append(cell);
                cell.innerHTML = val.name;

                const link = findLinksForPlanet(val.name);
                cell.href = link;
                cell.target = "_blank"; // link will be opened in new window
                // console.log(val);
            });
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}

function findLinksForPlanet(planet_name) {
    const links_to_planets = {
        "Tatooine": "https://starwars.fandom.com/wiki/Tatooine",
        "Alderaan": "https://starwars.fandom.com/wiki/Alderaan",
        "Yavin IV": "https://starwars.fandom.com/wiki/Yavin_4/Legends",
        "Hoth": "https://starwars.fandom.com/wiki/Hoth",
        "Dagobah": "https://starwars.fandom.com/wiki/Dagobah",
        "Bespin": "https://starwars.fandom.com/wiki/Bespin",
        "Endor": "https://starwars.fandom.com/wiki/Endor",
        "Naboo": "https://starwars.fandom.com/wiki/Naboo",
        "Coruscant": "https://starwars.fandom.com/wiki/Coruscant",
        "Kamino": "https://starwars.fandom.com/wiki/Kamino"
    }

    let keys_arr = Object.keys(links_to_planets); 
    let values_arr = Object.values(links_to_planets);

    let number = 0;
    //searching number of the right link
    keys_arr.forEach( (val, index) => {
        if(val == planet_name) {
            number = index;
        }
    });

    const link = values_arr[number];
    return link;
}

const btn_info = document.querySelector(".btn_info_characters");
const input_field = document.querySelector(".input_field");
const btn_info_planets = document.querySelector(".btn_info_planets");

input_field.addEventListener("input", inputCheck);
btn_info.addEventListener("click", getCharactersFromEpisode);
btn_info_planets.addEventListener("click", getPlanets);

