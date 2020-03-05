import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";


const riverBuilder = () => {
    const allBears = bearData.getBears();
    
  let domstring = '';
  allBears.forEach((bears) => {
  domstring += '<div class="card m-5 col-3" style="width: 18rem;">';
  domstring += `<img src= "${bears.imageUrl}" class="card-img-top" alt="...">`;
  domstring += '<div class="card-body">';
  domstring += `<p class="card-text text-center">"${bears.name}".</p>`;
  domstring += '</div>';
  domstring += '</div>';
  });
  utils.printToDom('river', domstring)
}


export default { riverBuilder };