import utils from "../helpers/utils.js";




const bearBuilder = () => {
//const persons = bearData.getDeadPersons();
let domstring = '';

domstring += '<form id="bearForm" >'
domstring += '<div class="form-group">';
domstring += '<label for="exampleInputEmail1">Bear Name</label>';
domstring += '<input type="email" class="form-control" id="name" aria-describedby="emailHelp">';
domstring += '<small id="emailHelp" class="form-text text-muted"></small>';
domstring += '</div>';
domstring += '<div class="form-group">';
domstring += '<label for="exampleInputPassword1">Image Url</label>';
domstring += '<input type="password" class="form-control" id="imageUrl">';
domstring += '</div>';
domstring += '<button type="submit" class="btn btn-primary">Submit</button>';
domstring += '</form>';

utils.printToDom('bear-form', domstring)
};

  //const addBear = () => {
      const bearName = document.getElementById('name').value
      const bearImage = document.getElementById('imageUrl').value

  


    


export default { bearBuilder }
