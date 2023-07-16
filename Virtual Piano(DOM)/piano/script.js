const key2 = document.getElementsByClassName("key2");
const key3 = document.getElementsByClassName("key3");
const key4 = document.getElementsByClassName("key4");
const key5 = document.getElementsByClassName("key5");
const key6 = document.getElementsByClassName("key6");
const key7 = document.getElementsByClassName("key7");
const key8 = document.getElementsByClassName("key8");
const key9 = document.getElementsByClassName("key9");
const key10 = document.getElementsByClassName("key10");
const key11 = document.getElementsByClassName("key11");
const key12 = document.getElementsByClassName("key12");
const key13 = document.getElementsByClassName("key13");
const key14 = document.getElementsByClassName("key14");
const key15 = document.getElementsByClassName("key15");
const key16 = document.getElementsByClassName("key16");
const key17 = document.getElementsByClassName("key17");
const key18 = document.getElementsByClassName("key18");
const key19 = document.getElementsByClassName("key19");
const key20 = document.getElementsByClassName("key20");
const key21 = document.getElementsByClassName("key21");

const black1 = document.getElementsByClassName("black1");
const black2 = document.getElementsByClassName("black2");
const black3 = document.getElementsByClassName("black3");
const black4 = document.getElementsByClassName("black4");
const black5 = document.getElementsByClassName("black5");
const black6 = document.getElementsByClassName("black6");
const black7 = document.getElementsByClassName("black7");
const black8 = document.getElementsByClassName("black14");
const black9 = document.getElementsByClassName("black8");
const black10 = document.getElementsByClassName("black9");
const black11 = document.getElementsByClassName("black10");
const black12 = document.getElementsByClassName("black11");
const black13 = document.getElementsByClassName("black12");
const black14 = document.getElementsByClassName("black13");


const BlackElements1 = document.getElementsByClassName("black1");
const blackOne = BlackElements1[0];

const BlackElements2 = document.getElementsByClassName("black2");
const blackTwo = BlackElements2[0];

const BlackElements3 = document.getElementsByClassName("black3");
const blackThree = BlackElements3[0];

const BlackElements4 = document.getElementsByClassName("black4");
const blackFour = BlackElements4[0];

const BlackElements5 = document.getElementsByClassName("black5");
const blackFive = BlackElements5[0];

const BlackElements6 = document.getElementsByClassName("black6");
const blackSix = BlackElements6[0];

const BlackElements7 = document.getElementsByClassName("black7");
const blackSeven = BlackElements7[0];

const BlackElements8 = document.getElementsByClassName("black8");
const blackEight = BlackElements8[0];

const BlackElements9 = document.getElementsByClassName("black9");
const blackNine = BlackElements9[0];

const BlackElements10 = document.getElementsByClassName("black10");
const blackTen = BlackElements10[0];

const BlackElements11 = document.getElementsByClassName("black11");
const blackEleven = BlackElements11[0];

const BlackElements12 = document.getElementsByClassName("black12");
const blackTwelve = BlackElements12[0];

const BlackElements13 = document.getElementsByClassName("black13");
const blackThirteen = BlackElements13[0];

const BlackElements14 = document.getElementsByClassName("black14");
const blackFourteen = BlackElements14[0];

const BlackElements15 = document.getElementsByClassName("black15");
const blackFifteen = BlackElements15[0];



const keyOneElements1 = document.getElementsByClassName("key1");
const keyOne = keyOneElements1[0];

const keyOneElements2 = document.getElementsByClassName("key2");
const keyTwo = keyOneElements2[0];

const keyOneElements3 = document.getElementsByClassName("key3");
const keyThree = keyOneElements3[0];

const keyOneElements4 = document.getElementsByClassName("key4");
const keyFour = keyOneElements4[0];

const keyOneElements5 = document.getElementsByClassName("key5");
const keyFive = keyOneElements5[0];

const keyOneElements6 = document.getElementsByClassName("key6");
const keySix = keyOneElements6[0];

const keyOneElements7 = document.getElementsByClassName("key7");
const keySeven = keyOneElements7[0];

const keyOneElements8 = document.getElementsByClassName("key8");
const keyEight = keyOneElements8[0];

const keyOneElements9 = document.getElementsByClassName("key9");
const keyNine = keyOneElements9[0];

const keyOneElements10 = document.getElementsByClassName("key10");
const keyTen = keyOneElements10[0];

const keyOneElements11 = document.getElementsByClassName("key11");
const keyEleven = keyOneElements11[0];

const keyOneElements12 = document.getElementsByClassName("key12");
const keyTwelve = keyOneElements12[0];

const keyOneElements13 = document.getElementsByClassName("key13");
const keyThirteen = keyOneElements13[0];

const keyOneElements14 = document.getElementsByClassName("key14");
const keyFourteen = keyOneElements14[0];

const keyOneElements15 = document.getElementsByClassName("key15");
const keyFifteen = keyOneElements15[0];

const keyOneElements16 = document.getElementsByClassName("key16");
const keySixteen = keyOneElements16[0];

const keyOneElements17 = document.getElementsByClassName("key17");
const keySeventeen = keyOneElements17[0];

const keyOneElements18 = document.getElementsByClassName("key18");
const keyEighteen = keyOneElements18[0];

const keyOneElements19 = document.getElementsByClassName("key19");
const keyNineteen = keyOneElements19[0];

const keyOneElements20 = document.getElementsByClassName("key20");
const keyTwenty = keyOneElements20[0];

const keyOneElements21 = document.getElementsByClassName("key21");
const keyTwentyOne = keyOneElements21[0];


function generateRandomColor() {
  // Generate random values for red, green, and blue channels
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Create the color string in hexadecimal format
  var color = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
  return color;
}

let keyboard = (element, sound) => {
    return element.addEventListener("click", () => {
        var audio = new Audio(sound);
      audio.play();
      let randomColor = generateRandomColor();
      console.log(randomColor);
      element.style.backgroundColor = randomColor;
      const delay = 500; // 3 seconds
      setTimeout(() => {
        element.style.backgroundColor = "";
      }, delay);  
    } )
}

keyboard(keyOne, "C3.mp3");
keyboard(keyTwo, "D3.mp3");
keyboard(keyThree, "E3.mp3");
keyboard(keyFour, "F3.mp3");
keyboard(keyFive, "G3.mp3");
keyboard(keySix, "A3.mp3");
keyboard(keySeven, "B3.mp3");
keyboard(keyEight, "C4.mp3");
keyboard(keyNine, "D4.mp3");
keyboard(keyTen, "E4.mp3");
keyboard(keyEleven, "F4.mp3");
keyboard(keyTwelve, "G4.mp3");
keyboard(keyThirteen, "A4.mp3");
keyboard(keyFourteen, "B4.mp3");
keyboard(keyFifteen, "C5.mp3");
keyboard(keySixteen, "D5.mp3");
keyboard(keySeventeen, "E5.mp3");
keyboard(keyEighteen, "F5.mp3");
keyboard(keyNineteen, "G5.mp3");
keyboard(keyTwenty, "A5.mp3");
keyboard(keyTwentyOne, "B5.mp3");
keyboard(blackOne, "DB3.mp3");
keyboard(blackTwo, "EB3.mp3");
keyboard(blackThree, "GB3.mp3");
keyboard(blackFour, "AB3.mp3");
keyboard(blackFive, "BB3.mp3");
keyboard(blackSix, "DB4.mp3");
keyboard(blackSeven, "EB4.mp3");
keyboard(blackEight, "GB4.mp3");
keyboard(blackNine, "AB4.mp3");
keyboard(blackTen, "BB4.mp3");
keyboard(blackEleven, "DB5.mp3");
keyboard(blackTwelve, "EB5.mp3");
keyboard(blackThirteen, "GB5.mp3");
keyboard(blackFourteen, "AB5.mp3");
keyboard(blackFifteen, "BB5.mp3");


