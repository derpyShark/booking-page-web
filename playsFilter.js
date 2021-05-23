let data = [{
	name: 'Кайдаш Втопився',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	imgUrl: 'https://navsi200.com/media/images/1000458-i_009.original.jpg',
    playURL: 'play.html'
},
{
	name: 'Муфаса Зірвався',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	imgUrl: 'https://cdna.artstation.com/p/assets/images/images/024/203/698/large/jamison-murdock-e5859797-0f92-4043-8568-2889524dbe76.jpg?1581629786',
    playURL: '#'
},
{
	name: 'Він Зламався',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	imgUrl: 'https://static.wikia.nocookie.net/irobot/images/7/77/Char_25546.jpg/revision/latest/scale-to-width-down/250?cb=20120107182555',
    playURL: '#'
}]

const generateActorContainer = (name, description,  imgUrl, playURL) => `
<div class="container">
    <div class="row">
        <div class="col-3">
            <div class="container rounded mt-3">
                <a href="${playURL}" class="stretched-link"><img src="${imgUrl}" class="img-fluid"></a>
            </div>
        </div>
        <div class="col-9">
            <div class="container bg-secondary p-2 rounded mt-3">
                <h1 class="text-white">${name}</h1>
            </div>
            <div class="container rounded mt-3">
                <p class="text-white">${description}</p>
            </div>
            <div class="container rounded mt-3">
                <a class="btn btn-lg btn-warning text-dark" href="${playURL}" role="button" id="buy-button">Детальніше</a>
            </div>
        </div>
    </div>
</div>
`

let actors = document.getElementById('plays')

let actorsElements = data.map(playData => generateActorContainer(playData.name, playData.description, playData.imgUrl, playData.playURL)).join('<br>')

actors.innerHTML = actorsElements

const input = document.getElementsByName('plays')[0]

input.addEventListener('input', (event) => {
	let actorsElements = data
	.filter(act => act.name.toLowerCase().includes(event.target.value.toLowerCase()))
	.map(playData => generateActorContainer(playData.name, playData.description, playData.imgUrl, playData.playURL)).join('<br>')

    actors.innerHTML = actorsElements
}
)
