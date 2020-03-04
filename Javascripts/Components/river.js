import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";


const riverBuilder = () => {
    const allBears = bearData.getBears();
    
  let domstring = '';
  allBears.forEach((bears) => {
  domstring += '<div class="card" style="width: 18rem;">';
  domstring += `<img src= "${bears.imageUrl}" class="card-img-top" alt="...">`;
  domstring += '<div class="card-body">';
  domstring += `<p class="card-text">"${bears.name}".</p>`;
  domstring += '</div>';
  domstring += '</div>';
  });
  utils.printToDom('river', domstring)
}


export default { riverBuilder };