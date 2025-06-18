var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ComunidadesUriondoVerificar_1 = new ol.format.GeoJSON();
var features_ComunidadesUriondoVerificar_1 = format_ComunidadesUriondoVerificar_1.readFeatures(json_ComunidadesUriondoVerificar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesUriondoVerificar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesUriondoVerificar_1.addFeatures(features_ComunidadesUriondoVerificar_1);
var lyr_ComunidadesUriondoVerificar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesUriondoVerificar_1, 
                style: style_ComunidadesUriondoVerificar_1,
                popuplayertitle: 'Comunidades Uriondo Verificar',
                interactive: false,
    title: 'Comunidades Uriondo Verificar<br />\
    <img src="styles/legend/ComunidadesUriondoVerificar_1_0.png" /> VERIFICAR<br />' });
var format_ComunidadesUriondo_2 = new ol.format.GeoJSON();
var features_ComunidadesUriondo_2 = format_ComunidadesUriondo_2.readFeatures(json_ComunidadesUriondo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesUriondo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesUriondo_2.addFeatures(features_ComunidadesUriondo_2);
cluster_ComunidadesUriondo_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ComunidadesUriondo_2
});
var lyr_ComunidadesUriondo_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ComunidadesUriondo_2, 
                style: style_ComunidadesUriondo_2,
                popuplayertitle: 'Comunidades Uriondo',
                interactive: true,
    title: 'Comunidades Uriondo<br />\
    <img src="styles/legend/ComunidadesUriondo_2_0.png" /> CON LUZ<br />\
    <img src="styles/legend/ComunidadesUriondo_2_1.png" /> SIN LUZ<br />' });
var format_LimiteMunicipalReferencialUriondo_3 = new ol.format.GeoJSON();
var features_LimiteMunicipalReferencialUriondo_3 = format_LimiteMunicipalReferencialUriondo_3.readFeatures(json_LimiteMunicipalReferencialUriondo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipalReferencialUriondo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipalReferencialUriondo_3.addFeatures(features_LimiteMunicipalReferencialUriondo_3);
var lyr_LimiteMunicipalReferencialUriondo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipalReferencialUriondo_3, 
                style: style_LimiteMunicipalReferencialUriondo_3,
                popuplayertitle: 'Limite Municipal Referencial Uriondo',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipalReferencialUriondo_3.png" /> Limite Municipal Referencial Uriondo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ComunidadesUriondoVerificar_1.setVisible(true);lyr_ComunidadesUriondo_2.setVisible(true);lyr_LimiteMunicipalReferencialUriondo_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ComunidadesUriondoVerificar_1,lyr_ComunidadesUriondo_2,lyr_LimiteMunicipalReferencialUriondo_3];
lyr_ComunidadesUriondoVerificar_1.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'COD_CD_COM': 'COD_CD_COM', 'COMUNIDAD': 'COMUNIDAD', 'LUZ': 'LUZ', 'VERIF LUZ': 'VERIF LUZ', });
lyr_ComunidadesUriondo_2.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'COD_CD_COM': 'COD_CD_COM', 'COMUNIDAD': 'COMUNIDAD', 'LUZ': 'LUZ', 'VERIF LUZ': 'VERIF LUZ', });
lyr_LimiteMunicipalReferencialUriondo_3.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', });
lyr_ComunidadesUriondoVerificar_1.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'COD_CD_COM': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'LUZ': 'TextEdit', 'VERIF LUZ': 'TextEdit', });
lyr_ComunidadesUriondo_2.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'COD_CD_COM': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'LUZ': 'TextEdit', 'VERIF LUZ': 'TextEdit', });
lyr_LimiteMunicipalReferencialUriondo_3.set('fieldImages', {'DEPTO': '', 'PROVINCIA': '', });
lyr_ComunidadesUriondoVerificar_1.set('fieldLabels', {'MUNICIPIO': 'inline label - always visible', 'COD_CD_COM': 'inline label - always visible', 'COMUNIDAD': 'inline label - visible with data', 'LUZ': 'inline label - always visible', 'VERIF LUZ': 'no label', });
lyr_ComunidadesUriondo_2.set('fieldLabels', {'MUNICIPIO': 'inline label - always visible', 'COD_CD_COM': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', 'LUZ': 'inline label - always visible', 'VERIF LUZ': 'inline label - always visible', });
lyr_LimiteMunicipalReferencialUriondo_3.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', });
lyr_LimiteMunicipalReferencialUriondo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});