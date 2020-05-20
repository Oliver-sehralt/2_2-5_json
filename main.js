const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];

  const sortByName = () => {
    let a = singers.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (b.name > a.name) {
            return -1;
        } else {
            return 0;
        }
    });
    displayData(a);
    console.log(a);
};


const singer = document.getElementById("singer");

const displayData = (singers) => {
    singer.innerHTML = "";
    singers.forEach(item => {
        singer.innerHTML += `
            <div>
                <p>Name: ${item.name}</p>
                <p>Age: ${item.country}</p>
                <p>Period start: ${item.period_active.start}</p>
                <p>Period end: ${item.period_active.end}</p>
                <p>Genre: ${item.genre}</p>
            </div>
        `;
    });
};

displayData(singers);

const sortByCountry = () => {
    let b = singers.sort((a, b) => {
        if (a.country > b.contry) {
            return 1;
        } else if (b.country > a.country) {
            return -1;
        } else {
            return 0;
        }
    });
    displayData(b);
    console.log(b);
};

const sortByGenre = () => {
    let c = singers.sort((a, b) => {
        if (a.genre > b.genre) {
            return 1;
        } else if (b.genre > a.genre) {
            return -1;
        } else {
            return 0;
        }
    });
    displayData(c);
    console.log(c);
};