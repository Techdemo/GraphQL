# Project Tech

## De Opdracht
Een User story uitwerken in een klikbaar prototype. Het prototype moet een frontend bevatten, een backend server en een koppeling met een database.

## User Story
Als gebruiker wil ik een account kunnen aanmaken, zodat ik vervolgens kan inloggen op de app om alle content te bekijken die alleen voor leden toegankelijk is.

### De uitdaging
Het vak Project Tech stond tevens in het teken van het aangaan van nieuwe uitdagingen. Daarom heb ik er voor gekozen om een simpele api te bouwen met behulp van GraphQl.

### Waarom graphql?
Tijdens mijn stage bij Label A hoorde ik voor het eerst van Graphql. Het was een techniek waar een van de backend-end developers enthousiast van werdt. Vervolgens kwam ik de term vaker tegen op sites zoals dev.to, Reddit en Fireship.io. Vervolgens besloot ik er steeds meer over te lezen. In eerste opzicht leek Graphql een interessante tegenhangen van een REST Api en de online community leek zeer enthousiast. Bij Project Tech werd gevraagd om een uitdaging aan te gaan en iets nieuws te leren, dit leek mij dan een perfecte gelegenheid om graphql uit te zoeken.

### Wat is Graphql?
Graphql is een query taal voor een API. Dit wil zeggen dat Graphql de API een manier biedt om in een string precies aan te geven welke data je wilt opvragen en wat Graphql als response terug moet geven. De meest voorkomende verkeerde opvatting over graphql, is dat het een query language is voor databases. Omdat het voor API's is het niet afhankelijk van welke database er wordt gebruikt. Het heeft zelfs niet eens een database nodig om te werken.

## Het verschil tussen graphql en een Rest api
Een REST Api werkt met endpoints waarin de data die er wordt teruggegeven aan de client, al bepaald is. __VUL DEZE UITLEG AAN__

### Rest api
Als je bijvoorbeeld een lijst met Users opvraagt, krijg je een lijst van users terug zoals deze is bepaald door de backend-end developer. De array met users, bevat voor elke user een object met daarin alle properties die onder een user object vallen.
Stel dat je een array met Users wilt ontvangen, waarin alleen de voornamen en leeftijden van een user staan vermeld in het object. Zou de backend-developer daar een aparte endpoint voor moeten schrijven. Je zou als developer natuurlijk ook de endpoint kunnen gebruiken waarin de Users array met hun individuele objecten en properties wordt teruggegeven. Echter, je vraagt teveel data op voor datgene wat je wilt laten zien op je scherm.
__VUL AAN MET EEN REST API VOORBEELD QUERY EN RETURN__

### Graphql
Grapql biedt je 1 endpoint waar je een querystring naar kan sturen. In deze string geef je precies aan welke data je wilt hebben. De graphql laag leeft als het ware tussen de api en de client in. Op basis van wat er in de query string wordt meegegeven, zoekt Graphql alle data bij elkaar. Deze data, en alleen de data gespecificeerd in de query, wordt teruggegeven. Zo heb je maar 1 endpoint en 1 query voor

__VUL AAN MET EEN GRAPHQL VOORBEELD QUERY EN RETURN__

## Wanneer kies je voor GraphQL?

### Wat vond ik er van

#### De voordelen
- Er is 1 endpoint.
- Inmiddels zijn er veel verschillende clients die je kan gebruiken voor Graphql __Wat bedoel je hier mee__
- Er is een GUI voor het schrijven en testen van query's
- een developer kan zelf bepalen welke data hij/zij precies terug wilt ontvangen. Wat gunstig is voor de bandbreedte van de client.
- Graphql bevat data validatie en strict typing out-of-the box. Dwz dat data type's altijd overeen moeten komen (een string moet echt een string zijn etc).
- Het zorgt voor een snellere doorloop van je project; wanneer features veranderen tijdens de bouw van een applicatie hoeft de backend-developer niet meteen terug naar de api om een nieuwe endpoint te schrijven.

#### De nadelen
- Er is nog een relatief kleine community echt actief omtrent graphql. Er zijn veel enthousiastelingen maar in-depth resources zijn nog lastig te vinden.
- Als je niet bekend bent met een strict type systeem, is debuggen vrij lastig.
- Er is meer boilerplate nodig dan bij een doorgaanse rest api.
- Graphql wordt pas echt nuttig bij applicaties van een bepaald formaat of bij het gebruik van meerdere databronnen. Of denk aan use cases waarin meerdere micro services worden toegepast.


## Reflectie


## Bronnen