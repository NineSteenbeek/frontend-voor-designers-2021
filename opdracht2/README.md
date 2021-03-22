# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Voor opdracht 2 van Frontend voor Designers heb ik een pagina gemaakt die in twee verschillende modes in te stellen is. Dit gaat om een dark-mode en de 'normale' light-mode. 
Hierbij de link naar mijn demo!
https://ninesteenbeek.github.io/frontend-voor-designers-2021/opdracht2/demo/index.html


## interface
Leg de interface uit.
De interface is vrij simpel. Dit is een pagina met een aantal afbeeldingen en een toggle knop. De functionaliteiten zijn gericht op deze knop.
Ik heb de interface design principes als volgt toegepast;

Principe 04 'Keep the users in controle'
Dit principe draait erom dat gebruikers in controle zijn van de interface. Ze moeten niet voor onverwachte zaken komen te staan. De knoppen moet doen wat de gebruiker verwacht wat zij doen. 
Ik heb dit toegepast door de toggle-knop er voorspelbaar uit te laten zien. Zo staat er namelijk in de knop het icoon van een maantje & een zonnetje. Dit zorgt ervoor dat het niet 'zomaar' een knop is, maar een knop die vertelt dat wanneer je hem toggelt, de kleur van het scherm verandert. De gebruiker kan dit begrijpen omdat dit principe op meer sites en applicaties gebruikt wordt. De gebruiker kan dus verwachten dat wanneer zij op de knop drukken, het thema verandert. 

Principe 08 'Provide a natural next step'
Dit principe draait erom dat er een logische volgende stap is wanneer de gebruiker een interactie met je ontwerp heeft gehad.
Dit principe is niet heel erg van toepassing op mijn ontwerp, omdat er niet noodzakelijkerwijs meerdere stappen zijn die de gebruiker moet ondernemen. Wel is het zo, dat wanneer de gebruiker de knop getoggelt heeft, een logische stap is, dat je deze weer terug kan toggelen door hier nog een keer op te drukken.

Principe 09 'Appearance follows behavior'
Dit principe draait erom dat een element zich moet gedragen zoals de gebruiker verwacht dat het zich zal gedragen. Zo moet een element wat eruit ziet als een drukbare knop, zich ook gedragen als een drukbare knop. Je moet dus begrijpen hoe het element zich zal gedragen, door er enkel naar te kijken.
Ik heb dit toegepast door de knop het uiterlijk te geven van een toggle knop. Het ziet er namelijk uit als een schuifje. De gebruiker kent deze knop en weet dat dit werkt als een 'aan en uit' schakelaar. Ook staat er een maantje en een zonnetje in de knop, waardoor het logisch is dat dit iets te maken heeft met de modus van het scherm. 

De UI events die ik heb toegepast zijn click en keypress. Ik heb keypress specifiek gemaakt voor de entertoets. Dit heb ik gedaan door in de js te stellen dat de functie van de knop toggelen, alleen geldt wanneer er op enter wordt gedrukt.

## code
De code code heeft twee delen, een deel voor de interactie die getriggerd wordt door het klikken op de toggle knop, en het andere deel wat getriggerd wordt door het klikken op de enter toets.
Het eerste deel werkt als volgt;
Een variabele met de naam check wordt opgesteld met document.getElementById('check'). Deze variabele slaat op de checkbox in de html.
Vervolgens wordt er aan deze variabele een eventlistener toegevoegd. Dit is de listener change. Deze eventlistener gaat af wanneer er iets verandert aan het input veld, waar de checkbox deel van uitmaakt. Wanneer je dus klikt op de checkbox, wordt de checkbox gechecked. Er verandert hiermee dus iets binnen het input veld. Hiermee wordt de code gevuurd. Er wordt dan via de CSS andere styling meegegeven aan de toggle knop, met :checked. Vervolgens wordt er ook nog gespecificeerd dat wanneer de toggle knop checked is, de achtergrond kleur van de body verandert naar een donkere kleur. Dit gebeurt met een transistion-delay.
Voor het tweede deel van de code gebeurt eigenlijk exact hetzelfde, maar dan gelinkt aan een specifieke knop. 
Dit heb ik eerst gedaan door de toets in een variabele op te slaan. Daarna heb ik gesteld dat wanneer deze knop wordt ingedrukt, en de checkbox niet al op checked staat, de code van het eerste gedeelte gelanceerd wordt, en de body een donkere achtergrond krijgt. Wanneer de checkbox wel al op check staat, wordt deze simpel gedeselecteerd en verandert daarmee ook de toegevoegde CSS.
