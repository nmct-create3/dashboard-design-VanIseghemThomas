`use strict`
let html_daySelect, graph

//#region -------LISTENERS--------
const ListenToSelectDay = function(){
    html_daySelect.addEventListener('change', function(){
        let val = this.value;
        getVisitorsByDay(val);
    });
}

//#endregion

//#region -------GET FUNCTIONS-------
const getVisitorsByDay = async function(day){
    console.log(day);

    const response = await fetch(`https://iotcloud-nmct.azurewebsites.net/api/visitors/${day}`);
    let data = response.json();
    console.log(data);
}


//#endregion


const init = function(){
    html_daySelect = document.querySelector('.js-select-day');
    ListenToSelectDay();
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Script Geladen!');
    init();
});