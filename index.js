const main = () => {

  /* Grupe */
  const grupe = {
    'Grupa A': [
      { ime: 'Katar', rang: 51, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Ekvador', rang: 46, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Senegal', rang: 20, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Holandija', rang: 10, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],
    'Grupa B': [
      { ime: 'Engleska', rang: 5, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Iran', rang: 21, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'SAD', rang: 15, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Ukrajina', rang: 27, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],
    'Grupa C': [
      { ime: 'Argentina', rang: 4, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Saudijska Arabija', rang: 49, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Meksiko', rang: 9, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Poljska', rang: 26, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],
    'Grupa D': [
      { ime: 'Francuska', rang: 3, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Peru', rang: 22, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Danska', rang: 11, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Tunis', rang: 35, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],

    'Grupa E': [
      { ime: 'Španija', rang: 7, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Novi Zeland', rang: 101, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Nemačka', rang: 12, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Japan', rang: 23, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],

    'Grupa F': [
      { ime: 'Belgija', rang: 2, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Kanada', rang: 38, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Maroko', rang: 24, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Hrvatska', rang: 16, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],

    'Grupa G': [
      { ime: 'Brazil', rang: 1, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Srbija', rang: 25, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Švajcarska', rang: 14, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Kamerun', rang: 37, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ],

    'Grupa H': [
      { ime: 'Portugal', rang: 8 , poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Gana', rang: 60 , poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Urugvaj', rang: 13 , poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Južna Koreja', rang: 29 , poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
    ]
  }


  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* Grupna faza */

  function utakmicaGrupa(tim1, tim2) {

    tim1.golovi = getRandomNum(0, 5);
    tim2.golovi = getRandomNum(0, 5);

    tim1.datiGolovi = tim1.datiGolovi += tim1.golovi;
    tim1.primljeniGolovi = tim1.primljeniGolovi += tim2.golovi;
    tim2.datiGolovi = tim2.datiGolovi += tim2.golovi;
    tim2.primljeniGolovi = tim2.primljeniGolovi += tim1.golovi;

    if (tim1.golovi > tim2.golovi) {

      tim1.pobede = tim1.pobede += 1;
      tim2.porazi = tim2.porazi += 1;

      tim1.poeni = tim1.poeni += 3;

    } else if (tim2.golovi > tim1.golovi) {



      tim1.porazi = tim1.porazi += 1;
      tim2.pobede = tim2.pobede += 1;

      tim2.poeni = tim2.poeni += 3;

    } else {



      tim1.neresene = tim1.neresene += 1;
      tim2.neresene = tim2.neresene += 1;

      tim1.poeni = tim1.poeni += 1;
      tim2.poeni = tim2.poeni += 1;
    }

    console.log('   ', tim1.ime, tim1.golovi, ':', tim2.golovi, tim2.ime);
  }

  function grupnaFazaUtakmice() {

    console.log('Grupna faza - I kolo:');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][0], grupe[grupa][1]);
      utakmicaGrupa(grupe[grupa][2], grupe[grupa][3]);
    }

    console.log('Grupna faza - II kolo:');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][1], grupe[grupa][2]);
      utakmicaGrupa(grupe[grupa][3], grupe[grupa][0]);
    }

    console.log('Grupna faza - III kolo:');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][1], grupe[grupa][3]);
      utakmicaGrupa(grupe[grupa][0], grupe[grupa][2]);
    }

  }
  grupnaFazaUtakmice();

  function konacneTabele() {

    console.log('Kraj grupne faze:')
    for (const grupa in grupe) { 

      grupe[grupa].sort(function(a, b) {
          
        if (a.poeni < b.poeni) {
          return 1;
        }
        else if (a.poeni > b.poeni) {
          return -1;
        }
        else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) > Number(b.datiGolovi - b.primljeniGolovi)){
          return -1;
        }
        else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) < Number(b.datiGolovi - b.primljeniGolovi)) {
          return 1;
        } else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) === Number(b.datiGolovi - b.primljeniGolovi) && a.datiGolovi > b.datiGolovi){
         return -1;
        } if  (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) === Number(b.datiGolovi - b.primljeniGolovi) && a.datiGolovi < b.datiGolovi) {
          return 1;
        }
      });

      console.log(' ', grupa);
      grupe[grupa].forEach(tim => console.log('       ',tim.ime, '(' , tim.rang, ')','            ', tim.pobede, tim.neresene, tim.porazi,'   ', tim.datiGolovi,':', tim.primljeniGolovi,'   ', tim.poeni));
    }
  }

  konacneTabele(grupe);

}
main();