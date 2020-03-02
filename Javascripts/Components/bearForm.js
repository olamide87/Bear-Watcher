import utils from "../helpers/utils.js";




const bearBuilder = () => {
//const persons = bearData.getDeadPersons();
let domstring = '';
Bear.forEach((bears) => {
domstring += '<form>'
domstring += '<div class="form-group">';
domstring += '<label for="exampleInputEmail1">Bear Name</label>';
domstring += '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">';
domstring += '<small id="emailHelp" class="form-text text-muted"></small>';
domstring += '</div>';
domstring += '<div class="form-group">';
domstring += '<label for="exampleInputPassword1">Image Url</label>';
domstring += '<input type="password" class="form-control" id="exampleInputPassword1">';
domstring += '</div>';
domstring += '<button type="submit" class="btn btn-primary">Submit</button>';
domstring += '</form>';
  });
utils.printToDom('bear-form', domstring)
}

    


export default { bearBuilder }
