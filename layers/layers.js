var wms_layers = [];

var format_PERIBADATAN_0 = new ol.format.GeoJSON();
var features_PERIBADATAN_0 = format_PERIBADATAN_0.readFeatures(json_PERIBADATAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIBADATAN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIBADATAN_0.addFeatures(features_PERIBADATAN_0);
var lyr_PERIBADATAN_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIBADATAN_0, 
                style: style_PERIBADATAN_0,
                popuplayertitle: 'PERIBADATAN',
                interactive: true,
                title: '<img src="styles/legend/PERIBADATAN_0.png" /> PERIBADATAN'
            });

lyr_PERIBADATAN_0.setVisible(true);
var layersList = [lyr_PERIBADATAN_0];
lyr_PERIBADATAN_0.set('fieldAliases', {'Id': 'Id', });
lyr_PERIBADATAN_0.set('fieldImages', {'Id': '', });
lyr_PERIBADATAN_0.set('fieldLabels', {'Id': 'no label', });
lyr_PERIBADATAN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});