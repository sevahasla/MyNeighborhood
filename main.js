var source = new ol.source.Vector({
    url: 'data.geojson',
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

map.on('click', function(e){
    console.log(e)
})


  
  
//map.addLayer(place);


