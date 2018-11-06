var aboutLink = document.getElementById('about_link');
var servicesLink = document.getElementById('services_link');
var airportLink = document.getElementById('airport_link');
var reservationLink = document.getElementById('reservation_link');
var contactLink = document.getElementById('contact_link');
var airportHead = document.getElementById('airport_head');
var airportContent = document.getElementById('airport_content');
var advPrem = document.getElementById('adv_prem');
var advSafe = document.getElementById('adv_safe');
var advExp = document.getElementById('adv_exp');
var advContent = document.getElementById('adv_content');
var servicesHead = document.getElementById('services_head');
var businessPic = document.getElementById('business_pic');
var airportPic = document.getElementById('airport_pic');
var sightseeingPic = document.getElementById('sightseeing_pic');
var businessHead = document.getElementById('business_head');
var businessContent = document.getElementById('business_content');
var toursHead = document.getElementById('tours_head');
var malborkContent = document.getElementById('malbork_content');
var stutthofContent = document.getElementById('stutthof_content');
var szymbarkContent = document.getElementById('szymbark_content');
var nightContent = document.getElementById('night_content');
var nightHead = document.getElementById('night_head');
var shopContent = document.getElementById('shop_content');
var shopHead = document.getElementById('shop_head');
var golfContent = document.getElementById('golf_content');
var golfHead = document.getElementById('golf_head');
var tripsContent = document.getElementById('trips_content');
var fleetHead = document.getElementById('fleet_head');
var fleetContent = document.getElementById('fleet_content');
var reservationHead = document.getElementById('reservation_head');
var reservationContent = document.getElementById('reservation_content');
var cardContent = document.getElementById('card_content');
var adv = document.getElementById('adv');




var chooseLang = document.getElementById('choose_lang');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    chooseLang.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == chooseLang) {
        chooseLang.style.display = "none";
    }
}

function eng() {
	chooseLang.style.display = "none";
}

function pol() {
	aboutLink.innerHTML = 'o nas';
	servicesLink.innerHTML = 'usługi';
	airportLink.innerHTML = 'transfery lotniskowe';
	reservationLink.innerHTML = 'rezerwacja';
	contactLink.innerHTML = 'kontakt';
	airportHead.innerHTML = 'transfery lotniskowe';
	airportContent.innerHTML = 'Oferujemy wysokiej jakości transfery z lotniska w Gdańsku (GDN). Odbierzemy Cię z lotniska i zapewniamy wygodny transport do Twojego hotelu lub apartamentu. Rozpocznij wakacje w relaksującej atmosferze dzięki wygodnemu transferowi z lotniska w Gdańsku (GDN), bezpośrednio do miejsca docelowego.';
	advPrem.innerHTML = 'Samochody<br>Premium';
	advSafe.innerHTML = 'Bezpieczeństwo';
	advExp.innerHTML = 'Doświadczenie';
	advContent.innerHTML = 'Od wielu lat świadczymy wysokiej jakości usługi transportu osobistego luksusowymi samochodami i vanami. Nasza główna działalność koncentruje się na transporcie lotniskowym i hotelowym. Nasza usługa transferu na lotnisko jest idealna dla biznesmenów i wczasowiczów i może złagodzić stres i zmęczenie związane z podróżami.';
	servicesHead.innerHTML = 'usługi';
	businessPic.innerHTML = 'Podróże Biznesowe';
	airportPic.innerHTML = 'Transfery Lotniskowe';
	sightseeingPic.innerHTML = 'Wycieczki';
	businessHead.innerHTML = 'Podróże Biznesowe';
	businessContent.innerHTML = 'Zapewniamy wysokiej jakości usługi w zakresie transportu biznesowego, w tym odbiór i dowóz na lotnisko, transport między spotkaniami biznesowymi, powitanie partnerów biznesowych i wiele innych usług dopasowanych do Twoich konkretnych potrzeb.';
	toursHead.innerHTML = 'Wycieczki';
	malborkContent.innerHTML = 'Rozbudowany gotycki zespół zamkowy w Malborku był zbudowany przez Krzyżaków w latach 1274-1457. Jest to największa średniowieczna twierdza na świecie. Była to siedziba mistrzów zakonu krzyżackiego i stolica Państwa Krzyżackiego. Zamek został wpisany na listę światowego dziedzictwa UNESCO w 1997 roku.';
	stutthofContent.innerHTML = 'Stutthof był pierwszym nazistowskim obozem koncentracyjnym utworzonym poza granicami Niemiec w czasie II wojny światowej i ostatnim wyzwolonym. Ponad 110 000 ludzi z całej Europy zostało tam deportowanych i poddanych ekstremalnym warunkom pracy i mordowanych.';
	szymbarkContent.innerHTML = 'Szymbark, położony jest w odległości 38 kilometrów od Gdańska. Znajduje się tu "Dom do góry nogami", symbolizujący rozstrój spowodowany przez komunizm. Znajdują się tu również tradycyjne wiejskie chałupy kaszubskie i drewniane chaty zamieszkałe przez Polaków, uwięzionych lub zesłanych na Syberię. Tutaj można podziwiać najdłuższy stół świata wykonany z jednego kawałka drewna.';
	nightContent.innerHTML = 'Urzekające nocne wyprawy <br> Zakochaj się w Trójmieście nocą podczas wieczornej wycieczki po najpopularniejszych miejscach w Gdańsku, Sopocie i Gdyni. Trasa łączy zwiedzanie podświetlanych zabytków Starego Miasta z najlepszymi restauracjami, barami i klubami w Sopocie, znanym również jako polska stolica nocnego życia!';
	nightHead.innerHTML = 'Wycieczki nocne';
	shopContent.innerHTML = 'Kupuj w najgorętszych miejscach w Trójmieście:<br>Riviera, największe centrum handlowe w północnej Polsce, Galeria Bałtycka, najdogodniejsze duże centrum handlowe w Gdańsku i Fashion Designer Outlet - największy w mieście outlet z dużymi markami w powalających cenach.';
	shopHead.innerHTML = 'Zakupy';
	golfContent.innerHTML = 'Zagraj na jednym z renomowanych pól golfowych Trójmiasta: Klub Golfowy Postołowo, Ośrodek Golfowy Sierra Golf, Klub Golfowy Tokary.';
	golfHead.innerHTML = 'golf';
	tripsContent.innerHTML = 'Oferujemy szeroki zakres wycieczek krajoznawczych. Powyżej możesz zobaczyć nasze najpopularniejsze miejsca docelowe, ale zrobimy wycieczkę do każdego miejsca, którego potrzebujesz. Nasze wycieczki pozwolą Państwu poznać pomorskie atrakcje i przyjemnie spędzić czas.';
	fleetHead.innerHTML = 'Nasza Flota';
	fleetContent.innerHTML = 'Nasza flota obejmuje samochody premium i luksusowe vany, które zapewnią komfort, którego szukasz. Zapewnimy zarówno luksusową limuzynę, jak i wygodnego vana klasy premium z 9 miejscami siedzącymi. Wszystko, aby zaspokoić Twoje potrzeby.';
	reservationHead.innerHTML = 'Rezerwacja';
	reservationContent.innerHTML = 'Aby dokonać rezerwacji, wystarczy zadzwonić pod nasz numer kontaktowy +48 518 369 629. Aby potwierdzić rezerwację, musisz zapłacić kartą kredytową.';
	cardContent.innerHTML = 'Akceptujemy poniższe karty kredytowe:';
	adv.style.fontSize = "2.1vw";
	advSafe.style.fontSize = "1.7vw";
	advExp.style.fontSize = "1.7vw";


	chooseLang.style.display = "none";
};
