ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([701101.109249, 5873152.910958, 702536.733570, 5874086.447136]);
var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_cord_transformadaUTM_1 = new ol.format.GeoJSON();
var features_cord_transformadaUTM_1 = format_cord_transformadaUTM_1.readFeatures(json_cord_transformadaUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_cord_transformadaUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cord_transformadaUTM_1.addFeatures(features_cord_transformadaUTM_1);
var lyr_cord_transformadaUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cord_transformadaUTM_1, 
                style: style_cord_transformadaUTM_1,
                popuplayertitle: 'cord_transformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/cord_transformadaUTM_1.png" /> cord_transformadaUTM'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_cord_transformadaUTM_1.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_cord_transformadaUTM_1];
lyr_cord_transformadaUTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'video': 'video', });
lyr_cord_transformadaUTM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'video': 'TextEdit', });
lyr_cord_transformadaUTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - always visible', 'video': 'inline label - always visible', });
lyr_cord_transformadaUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});