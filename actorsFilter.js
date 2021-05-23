let data = [{
	name: 'Раян Гослінг',
	descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	imgUrl: 'https://24smi.org/public/media/celebrity/2019/04/01/ov7vhfaemmmk-rajan-gosling.jpg',
    actorId: 1
},
{
	name: 'Віктор Логінов',
	descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	imgUrl: 'https://stuki-druki.com/biofoto1/Viktor-Loginov-01.jpg',
    actorId: 2
},
{
	name: 'Крістіан Бейл',
	descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	imgUrl: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/0000288.jpg',
    actorId: 3
}]

function makeButtonsWork(){
    for(i=1;i < data.length + 1; i++){
        // Get the modal
        makeButtonWork(i);
    }
}

function makeButtonWork(i){
    var modal = document.getElementById("myModal"+i);
    var btn = document.getElementById("myBtn"+i);
    var span = document.getElementById("mySpan"+i);
    console.log(i);
    console.log(modal);
    console.log(btn);
    if(modal != null && btn != null){ 
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
}

const generateActorContainer = (name, descriptionShort, descriptionFull, imgUrl, actorId) => `
<div class="container">
    <div class="row">
        <div class="col-3">
            <div class="container rounded mt-3">
                <img src="${imgUrl}" class="img-fluid">
            </div>
        </div>
        <div class="col-9">
            <div class="container bg-secondary p-2 rounded mt-3">
                <h1 class="text-white">${name}</h1>
            </div>
            <div class="container rounded mt-3">
                <p class="text-white">${descriptionShort}</button>
				
                <!-- The Modal -->
                <div id="${'myModal'+actorId}" class="modal">
               
            <!-- Modal content -->
                    <div class="modal-content">
                    <span class="close1" id="${'mySpan'+actorId}">&times;</span>
                    <div class="row">
                        <div class="col-3">
                            <div class="container rounded mt-3">
                                <img src="${imgUrl}" class="img-fluid">
                            </div>
                        </div>
                        <br>
                        <div class="col-9">
                            <div class="container bg-secondary p-2 rounded mt-3">
                                <h1 class="text-white">${name}</h1>
                            </div>
                            <p>${descriptionFull}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-secondary" id="${'myBtn'+actorId}">Читати більше...</button>
        </div>
    </div>
</div>`

let actors = document.getElementById('actors')

let actorsElements = data.map(actorData => generateActorContainer(actorData.name, actorData.descriptionShort, actorData.descriptionFull, actorData.imgUrl, actorData.actorId)).join('<br>')

actors.innerHTML = actorsElements
makeButtonsWork();
const input = document.getElementsByName('actors')[0]

input.addEventListener('input', (event) => {
	let actorsElements = data
	.filter(act => act.name.toLowerCase().includes(event.target.value.toLowerCase()))
	.map(actorData => generateActorContainer(actorData.name, actorData.descriptionShort, actorData.descriptionFull, actorData.imgUrl, actorData.actorId)).join('<br>')

    actors.innerHTML = actorsElements
    makeButtonsWork();
}
)
