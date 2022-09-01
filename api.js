// ? Variables
var $ = document.querySelector.bind(document);

var characterId = 0;

var previousButton = $('#previousButton');
var nextButton = $('#nextButton');


var characterName = $('#inputName');
var height = $('#inputHeight');
var mass = $('#inputMass');
var hair = $('#inputHair');
var skin = $('#inputSkin');
var eye = $('#inputEye');
var birthYear = $('#inputBirthYear');
var gender = $('#inputGender');
// var homeworld = $('#inputHomeworld');



// ? Function that gets the API url
async function getStarWarsCharactersAPI() {
  const url = `https://swapi.dev/api/people/${characterId}/`
  try {
    const swCharactersAPI = await fetch(url);
    const swCharactersAPIConverted = await swCharactersAPI.json();

    // const swHomeworldsAPI = await fetch(swCharactersAPIConverted.homeworld)
    // const swHomeworldsAPIConverted = await swHomeworldsAPI.json();


    if (!swCharactersAPI.ok) {
      throw new Error ('Error in getting API')
    }

    characterName.value = swCharactersAPIConverted.name;
    height.value = swCharactersAPIConverted.height;
    mass.value = swCharactersAPIConverted.mass;
    hair.value = swCharactersAPIConverted.hair_color;
    skin.value = swCharactersAPIConverted.skin_color;
    eye.value = swCharactersAPIConverted.eye_color;
    birthYear.value = swCharactersAPIConverted.birth_year;
    gender.value = swCharactersAPIConverted.gender;

    // homeworld.value = swHomeworldsAPIConverted.name;

    return swCharactersAPIConverted;
  }
  catch(error) {
    console.log(error)
  }
}



// ? Previous button event listener
previousButton.addEventListener('click', function() {
  if (characterId < 0) {
    characterId = 0;
    clearForm();
    return false;
    
  } else {
    characterId--;
    getStarWarsAPI();
  }
})



// ? Next button event listener
nextButton.addEventListener('click', function() {
  if (characterId < 0 || characterId > 83) {
    characterId = 0;
    clearForm();
    return false;
  } else {
    characterId++;
    getStarWarsAPI();
  }
})



// ? Function that clears form data
function clearForm() {
  characterName.value = '';
  height.value = '';
  mass.value = '';
  hair.value = '';
  skin.value = '';
  eye.value = '';
  birthYear.value = '';
  gender.value = '';
}

getStarWarsCharactersAPI();


/* 
TODO: make a different page for the homeworlds (planets) and export their names to this file
TODO: create more JS files to maintain easy management within the code

*/