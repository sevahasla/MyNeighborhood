var source = new ol.source.Vector({
    url: './data.geojson',
    format: new ol.format.GeoJSON()
  });
  const fillStyle = new ol.style.Fill({
      color: [84, 118, 255, 1]
  })
  const strokeStyle = new ol.style.Stroke({
      color: [46, 34, 45, 1],
      width: 1.2
  })
  const circleStyle= new ol.style.Circle({
      fill: new ol.style.Fill({
          color:[ 245, 49,5, 1]
      }),
      radius: 5 ,
      stroke: strokeStyle
  })
var place = new ol.layer.VectorImage({
    source: source,
    style: new ol.style.Style({
        fill: fillStyle,
        stroke: strokeStyle,
        image: circleStyle
    })
  });

const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      place
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.572236, 55.78776,]),
      zoom: 10,
      maxZoom:15,
    }),
    visible: true
  })
  const overlayContainerElement = document.querySelector('.overlay-containe');
  const overlayLayer = new ol.Overlay({
      element: overlayContainerElement
  })
  map.addOverlay(overlayLayer);

  const overlayFeatureName = document.getElementById('feature-name');
  const overrlayFeatureAdditionalInfo = document.getElementById('feature-additional-info');
  map.on('click', function(e){
      overlayLayer.setPosition(undefined)
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        let clickCoordinate = e.coordinate;
        let clickName = feature.get('adress');
        console.log(clickName);
        overlayLayer.setPosition(clickCoordinate);
        overlayFeatureName.innerHTML = clickName;
        overrlayFeatureAdditionalInfo.innerHTML = overrlayFeatureAdditionalInfo ;
    })
})

function reverseGeocode(coords) {
  fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + coords[0] + '&lat=' + coords[1])
    .then(function(response) {
           return response.json();
       }).then(function(json) {
           console.log(json.display_name);
       });
}
 
let dt = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adress":" г. Долгопрудный, ул. Первомайская, д. 30, к. 7.","description":"best place"},"geometry":{"type":"Point","coordinates":[37.52285957336426,55.92891362076248]}}]};
map.on('click', function (evt) {
  var coord = ol.proj.toLonLat(evt.coordinate);
  reverseGeocode(coord);


  //console.log(dt['features'][0].geometry.coordinates);
  dt['features'][0].geometry.coordinates = coord;
  //console.log(dt['features'][0].geometry.coordinates );

 // var features = ol.format.readFeatures(dt['features'])
  var source = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
   // features: features
    
    
  });
  var place = new ol.layer.VectorImage({
    source: source,
    //features: features,
    style: new ol.style.Style({
        fill: fillStyle,
        stroke: strokeStyle,
        image: circleStyle
    })
  });
  map.addLayer(place);
}

)