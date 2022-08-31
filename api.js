async function getStarWarsAPI() {
  try {
    const swAPI = await fetch('https://swapi.dev/api/people/1/');
    const swAPIConverted = await swAPI.json();
    if (!swAPI.ok) {
      throw new Error ('Error in getting API')
    }

    var $ = document.querySelector.bind(document);

    var name = $('#inputName');
    var height = $('#inputHeight');
    var mass = $('#inputMass');
    var hair = $('#inputHair');
    var skin = $('#inputSkin');
    var eye = $('#inputEye');
    var birthYear = $('#inputBirthYear');
    var gender = $('#inputGender');

    name.value = swAPIConverted.name;
    height.value = swAPIConverted.height;
    mass.value = swAPIConverted.mass;
    hair.value = swAPIConverted.hair_color;
    skin.value = swAPIConverted.skin_color;
    eye.value = swAPIConverted.eye_color;
    birthYear.value = swAPIConverted.birth_year;
    gender.value = swAPIConverted.gender;

    return swAPIConverted;
  }
  catch(error) {
    console.log(error)
  }
}