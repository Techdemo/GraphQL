# Project Tech

[TOC]



## De Opdracht

Een User story uitwerken in een klikbaar prototype. Het prototype moet een frontend bevatten, een backend server en een koppeling met een database.

## User Story

Als gebruiker wil ik een account kunnen aanmaken, zodat ik vervolgens kan inloggen op de app om alle content te bekijken die alleen voor leden toegankelijk is.

### De uitdaging

Het vak Project Tech stond tevens in het teken van het aangaan van nieuwe uitdagingen. Daarom heb ik er voor gekozen om een simpele api te bouwen met behulp van GraphQl.

### Waarom graphql?

Tijdens mijn stage bij Label A hoorde ik voor het eerst van Graphql. Het was een techniek waar een van de backend-end developers enthousiast van werdt. Vervolgens kwam ik de term vaker tegen op sites zoals dev.to, Reddit en Fireship.io. Vervolgens besloot ik er steeds meer over te lezen. In eerste opzicht leek Graphql een interessante tegenhanger van een REST Api en de online community leek zeer enthousiast. Bij Project Tech werd gevraagd om een uitdaging aan te gaan en iets nieuws te leren, dit leek mij dan een perfecte gelegenheid om graphql uit te zoeken.

Aan de hand van dit onderzoek heb ik een kleine readme geschreven waarin ik vooral reflecteer op de verschillen tussen Rest en Graphql

### Wat is Graphql?

Graphql is een query taal voor een API. Dit wil zeggen dat Graphql de API een manier biedt om in een string precies aan te geven welke data je wilt opvragen en wat Graphql als response terug moet geven. De meest voorkomende verkeerde opvatting over graphql, is dat het een query language is voor databases. Omdat het voor API's is het niet afhankelijk van welke database er wordt gebruikt. Het heeft zelfs niet eens een database nodig om te werken.

![graph2](./graph2.png)

In het bovenstaande voorbeeld zie je hoe uitgebreid een query kan worden opgebouwd. Ieder object die je opvraagt als response in je query is opzich ook weer strict typed zien. Je ziet dat een Hero van het type character is, die vervolgens een naam heeft als een string. Planet is ook een type, die opzich ook een string als name heeft. Etc. 
Wanneer je een query zoals deze voor jezelf uittekent, snap je waar de naam Graphql vandaan komt. Alles lijkt als een soort boomdiagram in elkaar opgebouwd.  

## Het verschil tussen graphql en een Rest api

![graphExample](./graphExample.png)

In de bovenstaande afbeelding zie je een van de verschillen tussen Rest en GraphQL. Om students, courses en instructors te tonen moet er met een rest api drie endpoints worden aangesproken. Met Graphql maar een. Hieronder zal ik deze werkwijze meer toelichten

Een REST Api werkt met endpoints waarin de data die er wordt teruggegeven aan de client, al bepaald is. Bijvoorbeeld:

`https://jsonplaceholder.typicode.com/users/`

### Rest api

Als je bijvoorbeeld een lijst met Users opvraagt via deze endpoint, krijg je een array met User objecten terug zoals deze is bepaald door de backend-end developer. De array met users, bevat voor elke user een object met daarin alle properties die onder een user object vallen.
Stel dat je een array met Users wilt ontvangen, waarin alleen de voornamen en usernames van een user staan vermeld in het object. Zou de backend-developer daar een aparte endpoint voor moeten schrijven. Je zou als developer natuurlijk ook de endpoint kunnen gebruiken waarin de Users array met hun individuele objecten en properties wordt teruggegeven. Echter, je vraagt teveel data op voor datgene wat je wilt laten zien op je scherm. 

```json
[
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },...
]
```

### Graphql

Grapql biedt je 1 endpoint waar je een querystring naar kan sturen. In deze string geef je precies aan welke data je wilt hebben. De graphql laag leeft als het ware tussen de api en de client in. Op basis van wat er in de query string wordt meegegeven, zoekt Graphql alle data bij elkaar. Deze data, en alleen de data gespecificeerd in de query, wordt teruggegeven. 

```javascript
// endpoint
'https://json-placeholder-graphql.herokuapp.com/graphql'

// dit is de query die als GET request verstuurd wordt naar de graphql endpoint. Elke query start met het keyword 'query'. Vervolgens stel je zelf een query samen. In de query specificeer je welke data de response moet bevatten. 

const query = {
  '
  query {
    users {
      name
      username
    }
  }
	'
}

// response
 "data": {
    "users": [
      {
        "name": "Leanne Graham",
        "username": "Bret"
      },
      {
        "name": "Ervin Howell",
        "username": "Antonette"
      },...

```

## Wanneer kies je voor GraphQL?

__Dit moet je nog aanvullen__

### De voordelen

- Er is 1 endpoint.
- Er is een GUI voor het schrijven en testen van query's
- een developer kan zelf bepalen welke data hij/zij precies terug wilt ontvangen. Wat gunstig is voor de bandbreedte van de client.
- Graphql bevat data validatie en strict typing out-of-the box. Dat wil zeggen dat data type's altijd overeen moeten komen (een string moet echt een string zijn etc). Als je hiermee gewend raakt, wordt debuggen een stuk makkelijker.
- Het zorgt voor een snellere doorloop van je project; wanneer features veranderen tijdens de bouw van een applicatie hoeft de backend-developer niet meteen terug naar de api om een nieuwe endpoint te schrijven.

### De nadelen

- Er is nog een relatief kleine community echt actief omtrent graphql. Er zijn veel enthousiastelingen maar in-depth resources zijn nog lastig te vinden.
- Als je niet bekend bent met een strict type systeem, is debuggen vrij lastig. 
- Er is meer boilerplate nodig dan bij een doorgaanse rest api.
- Graphql wordt pas echt nuttig bij applicaties van een bepaald formaat of bij het gebruik van meerdere databronnen. Of denk aan use cases waarin meerdere micro services worden toegepast.
- Caching is lastig om voor elkaar te krijgen met Graphql. Je query kan namelijk steeds verschillen afhankelijk van de data die je opvraagt, je kan niet 1 response caching voor hergebruik. Er zijn wel alternatieven beschikbaar maar dan loop je tegen een hoeveelheid extra boilerplate op.

## Hoe werkt mijn prototype?



## Reflectie

## Bronnen

[Grapql homepage](https://graphql.org/)

[Graphql the better Rest](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

[Grapql versus rest](https://medium.com/@adhithiravi/graphql-vs-rest-a-comparison-16a2f5f29198)

