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
      { ime: 'Portugal', rang: 8, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Gana', rang: 60, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Urugvaj', rang: 13, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 },
      { ime: 'Južna Koreja', rang: 29, poeni: 0, datiGolovi: 0, primljeniGolovi: 0, pobede: 0, neresene: 0, porazi: 0 }
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
    console.log('');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][0], grupe[grupa][1]);
      utakmicaGrupa(grupe[grupa][2], grupe[grupa][3]);
      console.log('');
    }

    console.log('Grupna faza - II kolo:');
    console.log('');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][1], grupe[grupa][2]);
      utakmicaGrupa(grupe[grupa][3], grupe[grupa][0]);
      console.log('');
    }

    console.log('Grupna faza - III kolo:');
    console.log('');

    for (const grupa in grupe) {
      console.log(' ', grupa);
      utakmicaGrupa(grupe[grupa][1], grupe[grupa][3]);
      utakmicaGrupa(grupe[grupa][0], grupe[grupa][2]);
      console.log('');
    }

  }
  grupnaFazaUtakmice();

  function konacneTabele() {

    console.log('Kraj grupne faze:')
    console.log('');

    for (const grupa in grupe) {

      grupe[grupa].sort(function (a, b) {

        if (a.poeni < b.poeni) {
          return 1;
        }
        else if (a.poeni > b.poeni) {
          return -1;
        }
        else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) > Number(b.datiGolovi - b.primljeniGolovi)) {
          return -1;
        }
        else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) < Number(b.datiGolovi - b.primljeniGolovi)) {
          return 1;
        } else if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) === Number(b.datiGolovi - b.primljeniGolovi) && a.datiGolovi > b.datiGolovi) {
          return -1;
        } if (a.poeni === b.poeni && Number(a.datiGolovi - a.primljeniGolovi) === Number(b.datiGolovi - b.primljeniGolovi) && a.datiGolovi < b.datiGolovi) {
          return 1;
        }
      });

      console.log(' ', grupa);

      grupe[grupa].forEach(tim => {

        const brojKaraktera = (tim.ime + tim.rang + tim.pobede + tim.neresene + tim.porazi + tim.datiGolovi + tim.primljeniGolovi + tim.poeni).length;
        const razmak = ' ';
        console.log('       ', tim.ime, '(', tim.rang, ')', razmak.repeat(30 - brojKaraktera), tim.pobede, tim.neresene, tim.porazi, ' ', tim.datiGolovi, ':', tim.primljeniGolovi, '   ', tim.poeni);

      })

    }
  }

  konacneTabele(grupe);


  function utakmicaNokautPobednk(tim1, tim2) {

    tim1.golovi = getRandomNum(0, 5);
    tim2.golovi = getRandomNum(0, 5);

    let pobednik

    if (tim1.golovi > tim2.golovi) {

      pobednik = tim1

    } else if (tim1.golovi < tim2.golovi) {

      pobednik = tim2

    } else if (tim1.golovi === tim2.golovi && tim1.rang > tim2.rang) {

      tim1.golovi = tim1.golovi += 1;
      pobednik = tim1

    } else if (tim1.golovi === tim2.golovi && tim1.rang < tim2.rang) {

      tim2.golovi = tim2.golovi += 1;
      pobednik = tim2

    } else {

      pobednik = tim1

    }

    console.log('');
    console.log('   ', tim1.ime, tim1.golovi, ':', tim2.golovi, tim2.ime);

    return pobednik
  };

  const pobednik16 = [];
  const pobednik8 = [];
  const pobednikPolu = [];
  const pobednikFinala = [];

  function nokaut16Faza() {
    for (const grupa in grupe) {
      grupe[grupa].splice(-2);
    }

    console.log('');
    console.log('1/16 Finala:')
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa A'][0], (grupe['Grupa B'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa B'][0], (grupe['Grupa A'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa C'][0], (grupe['Grupa D'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa D'][0], (grupe['Grupa C'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa E'][0], (grupe['Grupa F'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa F'][0], (grupe['Grupa E'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa G'][0], (grupe['Grupa H'][1])));
    pobednik16.push(utakmicaNokautPobednk(grupe['Grupa H'][0], (grupe['Grupa G'][1])));
    console.log('');

  }
  nokaut16Faza();

  function nokaut8Faza() {

    console.log[''];
    console.log('1/8 Finala:')
    pobednik8.push(utakmicaNokautPobednk(pobednik16[0], pobednik16[1]));
    pobednik8.push(utakmicaNokautPobednk(pobednik16[2], pobednik16[3]));
    pobednik8.push(utakmicaNokautPobednk(pobednik16[4], pobednik16[5]));
    pobednik8.push(utakmicaNokautPobednk(pobednik16[6], pobednik16[7]));
    console.log('');

  }
  nokaut8Faza();

  function polufinale() {

    console.log[''];
    console.log('Polufinale:')
    pobednikPolu.push(utakmicaNokautPobednk(pobednik8[0], pobednik8[1]));
    pobednikPolu.push(utakmicaNokautPobednk(pobednik8[2], pobednik8[3]));
    console.log('');
  }
  polufinale()

  function finale() {

    console.log[''];
    console.log('Finale:')
    pobednikFinala.push(utakmicaNokautPobednk(pobednikPolu[0], pobednikPolu[1]));
    console.log('');
    console.log('Pobednik:')
    console.log('!!!', pobednikFinala[0].ime.toUpperCase(), '!!!');
    console.log('');
  }
  finale();

}
main();