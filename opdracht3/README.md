# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

# Project titel
Voor dit project heb ik een site gebouwd waar je het weer per stad kan bekijken. Dit heb ik gedaan met de API van OpenWeatherMap. 
https://ninesteenbeek.github.io/frontend-voor-designers-2021/opdracht3/demo/versie2/index.html

## Principles of User Interface Design

## Principe 04 
'Keep the users in controle' Dit principe draait erom dat gebruikers in controle zijn van de interface. Ze moeten niet voor onverwachte zaken komen te staan. De knoppen moet doen wat de gebruiker verwacht wat zij doen. Ik heb dit toegepast door de toggle-knop er voorspelbaar uit te laten zien. Zo staat er namelijk in de knop het icoon van een maantje & een zonnetje. Dit zorgt ervoor dat het niet 'zomaar' een knop is, maar een knop die vertelt dat wanneer je hem toggelt, de kleur van het scherm verandert. De gebruiker kan dit begrijpen omdat dit principe op meer sites en applicaties gebruikt wordt. De gebruiker kan dus verwachten dat wanneer zij op de knop drukken, het thema verandert.

## Principe 08 
'Provide a natural next step' Dit principe draait erom dat er een logische volgende stap is wanneer de gebruiker een interactie met je ontwerp heeft gehad. Dit principe is niet heel erg van toepassing op mijn ontwerp, omdat er niet noodzakelijkerwijs meerdere stappen zijn die de gebruiker moet ondernemen. Wel is het zo, dat wanneer de gebruiker de knop getoggelt heeft, een logische stap is, dat je deze weer terug kan toggelen door hier nog een keer op te drukken.

## Principe 09 
'Appearance follows behavior' Dit principe draait erom dat een element zich moet gedragen zoals de gebruiker verwacht dat het zich zal gedragen. Zo moet een element wat eruit ziet als een drukbare knop, zich ook gedragen als een drukbare knop. Je moet dus begrijpen hoe het element zich zal gedragen, door er enkel naar te kijken. Ik heb dit toegepast door de knop het uiterlijk te geven van een toggle knop. Het ziet er namelijk uit als een schuifje. De gebruiker kent deze knop en weet dat dit werkt als een 'aan en uit' schakelaar. Ook staat er een maantje en een zonnetje in de knop, waardoor het logisch is dat dit iets te maken heeft met de modus van het scherm.

## Principe 11
'Strong visual hierarchies work best' gaat over visuele hiërarchie. Ik heb dit toegepast door te werken met het groeperen van items die bij elkaar horen, het groter maken van dominante items. Zo heb ik alle belangrijke elementen op het scherm bij elkaar in de buurt geplaatst en deze te kaderen. Ook heb ik elementen die belangrijker zijn groter gemaakt en elementen die minder belangrijk kleiner gemaakt met een minder prominente kleur.

## UI events
De UI events die ik heb toegepast zijn click en keypress. Ik heb keypress specifiek gemaakt voor de entertoets. Dit heb ik gedaan door in de js te stellen dat de functie van de knop toggelen, alleen geldt wanneer er op enter wordt gedrukt. De submit knop luistert ook naar de enter toets, maar dit is standaard en heb ik niet zelf geprogrammeerd. 

## UI stack
De states die ik heb toegepast zijn de Blank State, Ideal State en de Error State. 
## De Blank State
Wordt toegepast doordat het input field, waar je de stad typt, van zichzelf leeg is wanneer je de pagina laadt. Er wordt dan nog geen content weergegeven. Dit is dus de Blank State.
## De Ideal State
Is bereikt wanneer de gebruiker een correct gespelde stadsnaam heeft ingevoerd en hiervan de weersinformatie wordt getoond.
## De Error Stae
Wordt toegepast door te werken met catch(err). Wanneer de API niet een matchende stad kan vinden, voor de tekst die de gebruiker in het input field heeft geschreven geschreven, wordt deze pop-up getoond met de tekst 'Check if your spelling is correct!'.

## Code
Code van de API:
Om de data van de API terug te laten komen in de HTML is het belangrijk dat we de data van de API ook linken aan de elementen van de HTML. Als eerste stap haal ik alle elementen die van belang zijn op uit de HTML met querySelector. Ze worden opgeslagen in een variabele.
Vervolgens maak ik een eventlistener die luistert naar de submit knop. Wanneer je op deze knop drukt moet namelijk de data van de API opgehaald worden. 
De rest van de code vindt plaatst in de functie van de eventlistener. Als eerste wordt er in de functie de data opgehaald uit de API. Dit wordt gedaan met 'fetch'+ de url van de API met mijn persoonlijke key. In deze url, op de plek waar normaal de stad staat waarvoor je het weer ophaald, staat nu input+value. Input is de variabele die ik heb opgesteld voor de tekst in het input field. De je bepaald dus nu zelf welke stad er in de url komt te staan, door in het input field te typen.
Wanneer het ophalen van de data geslaagd is, wordt de rest van de functie uitgeroepen.
Er worden variabelen opgesteld, zoals tempWaarde (slaat op de temperatuur) waar vervolgens de data uit de API aan wordt gelinkt. Er wordt geen vast getal of beschrijving opgegeven, maar er wordt aan de js verteld waar in de API deze informatie gevonden kan worden. Bijvoorbeeld voor de naam van de stad wordt gezocht naar data['name']. 
Omdat de variabelen zoals tempWaarde nog niet in de HTML staan, moeten ze vervolgens wel in de html gezet worden. Dit gebeurt met innerHTML.
De variabelen die als eerste stap waren opgesteld, worden gelinkt aan de variabelen die de data uit de HTML halen. Bijvoorbeeld:
temp.innerHTML = tempWaarde + " degrees";
De eerste variabele temp, die slaat op een <p> element met class temp, wordt gelinkt aan de variabale tempWaarde, die de informatie uit de html haalt. Zo wordt altijd de juiste informatie weergegeven. 
 
Wanneer de gebruiker een niet bestaande stad invult, of deze verkeerd spelt, kan de functie niet worden uitgevoerd. Deze fout wordt opgevangen en de gebruiker krijgt een error met de tekst "Check if your spelling is correct!".
.catch(err => alert("Check if your spelling is correct!"));

Voor de toggle knop geldt exact dezelfde code als uitgelegd bij opdracht 2.
