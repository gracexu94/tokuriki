	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
		mapTypeId: 'roadmap'
	};
	//directions
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	directionsDisplay = new google.maps.DirectionsRenderer();

	//display a map
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.setTilt(45);

	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	// Multiple Markers
    var markers = [
			['Ujibashi', 34.458611, 136.723332],
			['Futami Bay', 34.509391, 136.788312],
			['Placeholder for #3', 31.886248, 130.919012],
			['Izumo', 35.402044, 132.685445],
			['Kirishima', 31.858659, 130.871342],
			['Takachiho Gorge', 32.701809, 131.300413],
			['Udo Shrine', 31.650308, 131.466329],
			['Aso Shrine', 32.947985, 131.115883],
			['Miyazaki Shrine', 31.936789, 131.423307],
			['Niukawakami Shrine', 34.333134, 135.955741],
			['placeholder Kameyama Shrine', 34.856148, 136.450584],
			['Nichizen Srhine', 34.227938, 135.202438],
			['Fukuhara Shrine', 34.488268, 135.786274],
			['Atsuta Shrine', 35.125558, 136.908963],
			['Sumiyoshi Shrine', 34.613028, 135.492991],
			['Nara at Night', 34.668088, 135.784688],
			['Horyuji', 34.614086, 135.735672],
			['Kasuga Shrine', 34.681384, 135.848391],
			['Usa Shrine', 33.526011, 131.374649],
			['Heian', 35.015991, 135.782415],
			['Koyasan', 34.214149, 135.584109],
			['Dazaifu Tenmangu', 33.521826, 130.535955],
			['Miyajima', 34.295963, 132.319808],
			['Tsurugaoka Hachimangu', 35.326107, 139.556424],
			['Kamakura Daibutsu', 35.316700, 139.536154],
			['Hakozaki Hachiman', 33.614640, 130.423362],
			['Kinkakuji', 35.039388, 135.729243],
			['Kasagiyama', 34.754372, 135.941504],
			['Yoshinoyama', 34.360399, 135.866983],
			['Nawa Shrine', 35.504412, 133.495067],
			['Kamakura Shrine', 35.326239, 139.566835],
			['Shigisan', 34.609424, 135.669737],
			['Kanshin Temple', 34.437357, 135.598601],
			['Minatogawa Shrine', 34.681993, 135.175155],
			['Odawara Castle', 35.250951, 139.153514],
			['Osaka Castle', 34.687315, 135.526201],
			['Kiyomizudera', 34.994860, 135.785051],
			['Nagoya Castle', 35.183775, 136.900305],
			['Nikko', 36.757172, 139.600005],
			['Matsue Castle', 35.475130, 133.050683],
			['Kintaikyo', 34.167587, 132.178421],
			['Ukimido', 35.109858, 135.921587],
			['Oishi Yoshino', 34.749343, 134.388644],
			['Kyoto Imperial Palace', 35.025423, 135.762120],
			['Kumamoto Castle', 32.806204, 130.705828],
			['Shiroyama', 31.596672, 130.550966],
			['Hiroshima', 34.401486, 132.459602],
			['Meiji Shrine', 35.676398, 139.699321],
			['Nijubashi', 35.680243, 139.753610],
			['Miyazaki Pillar', 31.947347, 131.415401],
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">'
	        + '<h3>Ujibashi, Ise Shrine</br>伊勢神宮　宇治橋</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Futami Bay, Ise</br>伊勢　二見浦　夫婦岩</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Takachiho Pass, Hyūga</br>日向　高千穂峯</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Izumo Grand Shrine, Shimane</br>島根　出雲大社</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Kirishima Shrine, Kagoshima</br>鹿児島　霧島神宮</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Manai Falls, Takachiho Gorge</br>高千穂峡　真名井瀧</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Udo Shrine, Miyazaki</br>宮崎　鵜戸神宮</h3>'
        + '</div>'],
				['<div class="info_content">'
	        + '<h3>Aso Shrine, Higo</br>肥後　阿蘇神社</h3>'
        + '</div>'],
				['<div class="info_content">'
					+ '<h3>Miyazaki Shrine, Hyūga</br>日向　宮崎神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Niukawakami Shrine, Nara</br>奈良　丹生川上神社</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kameyama Shrine, Kishū</br>紀州　亀山奇跡</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Nichizen Shrine, Wakayama</br>和歌山　日前宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kashihara Shrine, Nara</br>奈良　橿原神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Atsuta Shrine, Aichi</br>愛知　熱田神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Sumiyoshi Shrine, Fukuoka</br>福岡　住吉神社</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Yakushiji, Nara</br>奈良　薬師寺　東塔</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Hōryūji, Nara</br>奈良　法隆寺</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kasuga Shrine, Nara</br>奈良　春日神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Usa Shrine, Ōita</br>大分　宇佐神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Heian Shrine, Kyōto</br>京都　平安神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Mt. Koya, Wakayama</br>和歌山　高野山（金剛峯寺）</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Dazaifu Tenmangū Shrine, Fukuoka</br>福岡　太宰府天満宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Miyajima, Hiroshima</br>広島　宮島（厳島神社）</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Tsurugaoka Hachimangū Shrine, Kanagawa</br>神奈川　鶴岡八幡宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Great Buddha of Kamakura, Kanagawa</br>神奈川　鎌倉大仏</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Hakozaki Hachiman Shrine, Fukuoka</br>福岡　箱崎八幡宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kinkakuji, Kyōto</br>京都　金閣寺</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kasagiyama, Yamashiro</br>山城　笠置山</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Yoshino Mountain, Nara</br>奈良　吉野山</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Nawa Shrine, Tottori</br>鳥取　名和神社</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kamakura Shrine, Kanagawa</br>神奈川　鎌倉宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Mt. Shigi, Nara</br>奈良　信貴山　（朝護孫子寺）</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kanshin Temple, Ōsaka</br>大阪　河内　歓心寺</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Minatogawa Shrine, Kōbe</br>神戸 湊川神社</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Odawara Castle, Kanagawa</br>神奈川　小田原城趾</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Ōsaka Castle, Ōsaka</br>大阪　大阪城</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kiyomizu Temple, Kyōto</br>京都　清水寺</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Nagoya Castle, Aichi</br>愛知　名古屋城</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Nikkoō Tōshōgū, Tochigi</br>栃木　日光東照宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Matsue Castle, Shimane</br>島根　松江城</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kintai Bridge, Yamaguchi</br>山口　錦帯橋</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Floating Temple Hall of Mangetsu Shrine, Shiga</br>滋賀　浮御堂（満月寺）</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Former Residence of Ōishi Yoshio, Hyōgo</br>兵庫　播州赤穂　大石良雄旧宅</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kyōto Imperial Palace, Kyōto</br>京都　京都御所</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Kumamoto Castle, Kumamoto</br>熊本　熊本城</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Shiroyama, Kagoshima</br>鹿児島　城山</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Hiroshima Imperial Headquarters, Hiroshima</br>広島　広島大本営</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Meiji Shrine, Tōkyō</br>東京　明治神宮</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Nijū Bridge, Tōkyō</br>東京　二重橋</h3>'
				+ '</div>'],
				['<div class="info_content">'
					+ '<h3>Foundation Pillar of the Entire World Under One Roof, Miyazaki</br>宮崎　八紘一宇の基柱</h3>'
				+ '</div>'],
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

		var markerList = [];

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

				markerList.push(marker);

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

var snap = function(place) {
	google.maps.event.trigger(markerList[place], "click");
	map.setZoom(17);
	var latLng = markerList[place].getPosition(); // returns LatLng object
	map.panTo(latLng);
}
