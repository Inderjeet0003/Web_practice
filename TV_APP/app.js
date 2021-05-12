const form = document.getElementById('form');
const ul = document.querySelector('ul');


const getTVShows = async(searchText) => {


    const url = `http://api.tvmaze.com/search/shows?q=${searchText}`;

    const fetchedData = await axios.get(url);
    console.log(fetchedData)
    console.log(fetchedData.data)

    for (let item of fetchedData.data) {
        console.log(item.show.image.medium)

        if (item.show.image) {
            const img = document.createElement('img');
            img.src = item.show.image.medium;
            img.style.margin = '20px';
            ul.append(img);

        }

    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(form.elements[0].value);
    const searchText = form.elements[0].value;

    getTVShows(searchText);

    form.elements[0].value = "";

})