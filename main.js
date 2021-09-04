const titleBookInClick = $('.titleBookInClick');
const descritionBookInClick = $('.descritionBookInClick');
$('.mostraResposta').click(function(event){
	$(this).next().slideToggle(1500);
});

let inputEmailAddress = $('.inputEmail');

$('.contactUsEmail').click((event) => {
	if(inputEmailAddress.val() == ''){
		$('.messageError').toggle("slow");
		$('.inputEmail').toggleClass('inputEmailError');
	}else{
		$('.messageError').hide("slow");
		$('.inputEmail').removeClass('inputEmailError');
	}
});

const close = $('.close');
const listaMenu = $('.listaMenu')
$('.menuResponsivo').click((e) => {
	$('.menu').toggleClass('menuDropDown');
	$('.listaMenu').toggleClass('listaMenuDropDown');
	$('.itemsLista').toggleClass('itemsListaDropDown');
	$('.login').toggleClass('loginDropDown');
	close.toggleClass('closeDropDown');
});

close.click((e) => {
	$('.menu').toggleClass('menuDropDown');
	$('.listaMenu').toggleClass('listaMenuDropDown');
	$('.itemsLista').toggleClass('itemsListaDropDown');
	close.toggleClass('closeDropDown');
	$('.login').toggleClass('loginDropDown');
});



$('.itemInformation').click(function(event) {
	let texto = $(this).text();
	realizaEventoAoClicar(texto);
});


function realizaEventoAoClicar(texto){
	$('.bookInClickImage').slideToggle(10);
	$('.bookInClickContainer').fadeToggle(10);
		setTimeout(() => {
		$('.bookInClickImage').slideToggle(1000);
		$('.bookInClickContainer').fadeToggle(1000);
	},1000);
	if(texto == 'Simple Bookmarking'){
		$('.imageSimpleBookInClick').attr('src', 'images/illustration-features-tab-1.svg');
		titleBookInClick.text('Bookmark in one click');
		descritionBookInClick.text(`Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over 
			how you manage your favourite sites.`);
	}else if(texto == 'Speedy Searching'){
		$('.imageSimpleBookInClick').attr('src', 'images/illustration-features-tab-2.svg');
		titleBookInClick.text('Intelligent search');
		descritionBookInClick.text(`Our powerful search feature will help you find saved sites in no time at all. 
			No need to trawl through all of your bookmarks.`);
	}else if(texto == 'Easy Sharing'){
		$('.imageSimpleBookInClick').attr('src', 'images/illustration-features-tab-3.svg');
		titleBookInClick.text('Share your bookmarks');
		descritionBookInClick.text(`Easily share your bookmarks and collections with others. Create a shareable 
			link that you can send at the click of a button.`);
	}else{}
}