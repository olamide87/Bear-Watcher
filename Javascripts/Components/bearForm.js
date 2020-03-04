import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";
import riverBuilder from "../Components/river.js"
import river from "../Components/river.js";





const bearBuilder = () => {
//const persons = bearData.getDeadPersons();
let domstring = '';

domstring += '<form id="bearForm" >'
domstring += '<div class="form-group">';
domstring += '<label for="">Bear Name</label>';
domstring += '<input type="" class="form-control" id="name" aria-describedby="emailHelp">';
domstring += '<small id="emailHelp" class="form-text text-muted"></small>';
domstring += '</div>';
domstring += '<div class="form-group">';
domstring += '<label for="image">Image Url</label>';
domstring += '<input type="" class="form-control" id="imageUrl">';
domstring += '</div>';
domstring += '<button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>';
domstring += '</form>';

utils.printToDom('bear-form', domstring)
};

  const addBear = () => {
      const bearName = document.getElementById('name').value
      const bearImage = document.getElementById('imageUrl').value
      bearData.setSelectedBears({name:bearName, imageUrl:bearImage});
      river.riverBuilder();
      

  };
    
  const eventListener = () => {
    document.getElementById('submit-btn').addEventListener('click',addBear);
  }
  

  


    


export default { bearBuilder }
