# streetmap.net

## fonctionnement interaction data

### overview data

 - map_category : object
    - id : number auto increment
    - name : string
    - description : string
 - map_object : object
    - id : number auto increment
    - type : string (marker, polygon, ...)
    - geoData : array
    - popupContent : string
    - args : object {ico: string, color: string}
    - map_categoryId : number

### checklist finitions

 - [X] add darkmod
 - [X] cat name in popup on map
 - [X] add var env in js