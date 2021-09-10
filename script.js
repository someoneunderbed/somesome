let sec1 = document.querySelector(".section-one");
let sec2 = document.querySelector(".section-two");
let sec3 = document.querySelector(".section-three");
// Math.floor(Math.random() *

// First Things Here *********************************

function DataOne() {
  const url = fetch("https://api.sampleapis.com/presidents/presidents").then(
    (res) => {
      const response = res.json();
      return response;
    }
  );
  // console.log(url);
  url
    .then((ab) => {
      // console.log(ab);
      ab.map((item) => {
        const a = item;
        //   console.log(a);
        return new Promise((resolve, reject) => {
          setTimeout((aba) => {
            let elem = document.createElement("div");
            elem.innerHTML = `<img src=${a.photo} /> <h1>${a.name}</h1> <h3>${a.yearsInOffice}</h3> <p>${a.vicePresidents}</p>`;
            sec1.append(elem);
            resolve(aba);
          }, 4000);
        });
      });
    })
    .catch((e) => {
      console.error(e);
    });
}

// Second Things Here *********************************

function DataTwo() {
  const url2 = fetch("https://api.sampleapis.com/switch/games").then((res) => {
    const response = res.json();
    return response;
  });
  // console.log(url2);
  url2
    .then((ba) => {
      // console.log(ba);
      ba.map((item) => {
        const b = item;
        //   console.log(b);
        return new Promise((resolve, reject) => {
          setTimeout((aba2) => {
            let elem2 = document.createElement("div");
            elem2.innerHTML = `<h1>${b.name}</h1> <h1>${b.developers}</h1> <h3>${b.genre}</h3> <h4>${b.publishers}</h4> <p>${b.releaseDates.Europe}</p>`;
            sec2.append(elem2);
            resolve(aba2);
          }, 2000);
        });
      });
    })
    .catch((e) => {
      console.error(e);
    });
}

// Third Things Here *********************************

function DataThree() {
  const url3 = fetch("https://api.sampleapis.com/wines/reds").then((res) => {
    const response = res.json();
    return response;
  });
  // console.log(url2);
  url3
    .then((bba) => {
      // console.log(bba);
      bba.map((item) => {
        const c = item;
        //   console.log(c);
        return new Promise((resolve, reject) => {
          setTimeout((aba3) => {
            let elem3 = document.createElement("div");
            elem3.innerHTML = `<img src=${c.image} /> <h1>${c.wine}</h1> <h3>${c.rating.average}</h3> <p>${c.location}</p>`;
            sec3.append(elem3);
            resolve(aba3);
          }, 5000);
        });
      });
    })
    .catch((e) => {
      console.error(e);
    });
}

async function myData() {
  let a = await DataOne();
  console.log(a);
  let b = await DataTwo();
  console.log(b);
  let c = await DataThree();
  console.log(c);
}
myData();
