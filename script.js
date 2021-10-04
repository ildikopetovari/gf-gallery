let currentPicture = 0;
let picturesData = [
  data0 = {
    picture: "./images/0 Nagy A'Tuin, a teknőc.jpg",
    title: "Nagy A'Tuin, a teknőc",
    description: "Egy messzi-messzi és meglehetősen használt dimenzióhalmazban Nagy A'Tuin, a teknőc közeledik rajta, a négy óriás elefánt. Az ő hátukon nyugszik a hatalmas Korongvilág, melynek pereméről körös-körül vízesések zuhognak alá, míg odafent a Mennyek babakék kupolája feszül.",
    thumbnailTitle: "A'Tuin"
  },
  data1 = {
    picture: "./images/1 Korongvilág istenei.jpg",
    title: "Korongvilág istenei",
    description:"Vak Ió, aki szüntelenül résen lévén már jó ideje az istenek vezetője, állát az öklére támasztva üldögélt, és a nagy játéktáblát tanulmányozta maga előtt a vörös márványasztalon. A játéktábla a Korongvilág gondos kézzel faragott, négyzethálós térképe volt. Egyik-másik négyzeten csodálatos kidolgozású, élethű játékfigurák álltak.",
    thumbnailTitle: "Istenek"
  },
  data2 = {
    picture: "./images/2 Ankh-Morpork-i csoportkép.jpg",
    title: "Ankh-Morpork-i csoportkép",
    description:"Ankh-Morpork annyira tele van élettel, mint egy vénséges sajt egy forró, nyári napon, olyan hangos, mint egy káromkodás a katedrálisban, olyan fényes, mint egy tengerre ömlött olajfolt, olyan tarka, mint egy osztályon felüli balegyenes harmadnapos nyoma ...",
    thumbnailTitle: "Csoportkép"
  },
  data3 = {
    picture: "./images/3 Az őrség.jpg",
    title: "Városőrség",
    description:"IGAZSÁG! MÉLTÁNYOSSÁG! SZABADSÁG! ÉS EGY KEMÉNY TOJÁS!",
    thumbnailTitle: "Városőrség"
  }
];

function loadPicture(pictureNumber) {    //a képek betöltése a picturesData tömbből a pictureNumber index alapján
  $('#picture').attr('src', picturesData[pictureNumber].picture);
  $('#picture-title').text(picturesData[pictureNumber].title);
  $('#picture-description').text(picturesData[pictureNumber].description);
  //$('.thumbnail:nth-of-type(1)').addClass('active'); //a selector csak számmal működik, változóval nem
}
loadPicture(currentPicture);

$('.right-arrow').click(() => {
  if (currentPicture < picturesData.length - 1) {
    currentPicture++;
    loadPicture(currentPicture);
  } else {
    currentPicture = 0;    //a képek előreléptetésénél az utolsó után az első jön
    loadPicture(currentPicture);
  }
});
$('.left-arrow').click(() => {
  if (currentPicture > 0) {
    currentPicture--;
    loadPicture(currentPicture);
  } else {
    currentPicture = picturesData.length - 1;    //a képek visszaléptetésénél az első után az utolsó jön
    loadPicture(currentPicture);
  }
});
 
picturesData.forEach((item, index) => {
  $('.containerThumbnailTitle').append(`<div class="thumbnailTitle" data-index="${index}"></div>`); 
  $('.containerThumbnailPicture').append(`<img class="thumbnail" data-index="${index}">`);
  $('.thumbnailTitle:last-of-type').text(picturesData[index].thumbnailTitle);  //a kisképek címeinek beírása
  $('.thumbnail:last-of-type').attr('src', picturesData[index].picture);  //a kisképek betöltése
  $('.thumbnail').click((event) => {
    //$('this').addClass('active');  // nem működik???
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    //$('.thumbnail').removeClass('active');
    //$('.thumbnail').addClass('active');
    loadPicture(numberIndex);

    console.log(numberIndex);  //az elsőnél 4 ismétlés, ... az utolsót csak egyszer írja ki
    
  });
  /* $('.thumbnail').hover((event) => {
    let indexHover = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexHover);
    $('picturesData[numberIndex].thumbnailTitle').css("opacity", "1");
  }); */
});

//az active hozzáadása: https://www.w3schools.com/howto/howto_js_active_element.asp
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element2
//.addClass : https://www.w3schools.com/jquery/jquery_css_classes.asp
//.addEventListener() : https://www.w3schools.com/jsref/met_document_addeventlistener.asp

//ez a legjobb: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery