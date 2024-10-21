
const channels = {
	TV5: {
        name: 'TV 5',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d',
		type: 'mpd'
    },
	A2Z: {
        name: 'A2Z',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd'
    },
	ONEPH: {
        name: 'ONE PH',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
		type: 'mpd'
    },
	ONENEWS: {
        name: 'ONE NEWS',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
		type: 'mpd'
    },
	IBC: {
        name: 'iBC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        keyId: '04e292bc99bd4ccba89e778651914254',
        key: 'ff0a62bdf8920ce453fe680330b563a5',
		type: 'mpd'
    },
	RPTV: {
        name: 'RPTV',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
		type: 'mpd'
    },
	PTV: {
        name: 'PTV',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
		type: 'mpd'
    },
	MPTV: {
        name: 'MPTV',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807',
		type: 'mpd'
    },
	TVMARIA: {
        name: 'TV MARIA',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
        keyId: 'fa3998b9a4de40659725ebc5151250d6',
        key: '998f1294b122bbf1a96c1ddc0cbb229f',
		type: 'mpd'
    },
	ANC: {
	name: 'ANC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
		type: 'mpd'
    },
	TRUEFM: {
        name: 'TRUE FM',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
		type: 'mpd'
    },
	TELERADYO: {
    name: 'TELERADYO',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33',
		type: 'mpd'	
    },
	RTBS: {
        name: 'RTBS PRIME',
        url: 'https://fl1002.bozztv.com/ssh101/primetvph/tracks-v1a1/mono.m3u8',
		type: 'hls'
    },
	BILYONARYO: {
        name: 'BILYONARYO',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
		type: 'mpd'
    },
	TVUP: {
        name: 'TV UP',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
        keyId: '83e813ccd4ca4837afd611037af02f63',
        key: 'a97c515dbcb5dcbc432bbd09d15afd41',
		type: 'mpd'
    },
	DEPED: {
        name: 'DEPED CHANNEL',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd'
    },
	KNOWLEDGE: {
        name: 'KNOWLEDGE CHANNEL',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
		type: 'mpd'
    },
	TFC: {
        name: 'TFC',
        url: 'https://tfcguam-abscbn-ono.amagi.tv/index.m3u8',
 	type: 'hls'
    },
	VIVACINEMA: {
        name: 'VIVACINEMA',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb',
		type: 'mpd'
    },
	PBO: {
        name: 'PBO',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
		type: 'mpd'
    },
	CINEMAONE: {
        name: 'CINEMAONE',
        url: 'https://cinemaone-abscbn-ono.amagi.tv/index_3.m3u8',
        type: 'hls'
    },
	CINEMO: {
        name: 'CINEMO',
        url: 'https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8',
        type: 'hls'
    },
	STAR: {
        name: 'NHERS TELEVISION',
        url: 'https://fl1002.bozztv.com/ssh101/jomarhost/tracks-v1a1/mono.m3u8?fbclid=IwY2xjawF5RsFleHRuA2FlbQIxMAABHU11GuNNGVT_cGTBI-ofYJ9BFpZesbR-6X9n4tLLOS4SXMK-PR0lEhyGYA_aem_SPQPlRkOGpFOorNXOfGuFQ',
		type: 'hls'
    },	
	SARISARI: {
        name: 'SARISARI',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
		type: 'mpd'
    },
	BUKO: {
        name: 'BUKO',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
		type: 'mpd'
    },
	TMC: {
        name: 'TMC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
		type: 'mpd'
    },
	ROCKACTION: {
        name: 'ROCKACTION',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
		type: 'mpd'
    },
	DREAMWORKSTAG: {
        name: 'DREAMWORKS TAGALIZED',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
		type: 'mpd'
    },
	DREAMWORKSHD: {
        name: 'DREAMWORKS HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd'
    },
	MOONBUG: {
        name: 'MOONBUG',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd',
        keyId: '0bf00921bec94a65a124fba1ef52b1cd',
        key: '0f1488487cbe05e2badc3db53ae0f29f',
		type: 'mpd'
    },
	NICKELODEON: {
        name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
	NICKJR: {
        name: 'NICKJR',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd'
    },
	BEAN: {
        name: 'MR. BEAN 24/7',
        url: 'https://amg00627-amg00627c30-rakuten-es-3990.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanescc-rakutenes/playlist.m3u8',
	type: 'hls'

    },
	CARTOONNETWORK: {
        name: 'CARTOON NETWORK',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
		type: 'mpd'
    },
	CARTOONITO: {
        name: 'CARTOONITO',
        url: 'https://cdn1.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang.m3u8',
        type: 'hls'
    },
	DISNEYCH: {
        name: 'DISNEY CHANNEL',
        url: 'https://fl5.moveonjoy.com/DISNEY_CHANNEL/index.m3u8',
        type: 'hls'
    },
	DISNEYXD: {
        name: 'DISNEY XD',
        url: 'https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8',
        type: 'hls'
    },
	PBS: {
        name: 'PBS KIDS',
        url: 'https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b2000000.m3u8',
        type: 'hls'
    },
	ANIMAX: {
        name: 'ANIMAX',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
		type: 'mpd'
    },
	HISTNOW: {
        name: 'HIST NOW',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd'
    },
	HBOHD: {
        name: 'HBO HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
		type: 'mpd'
    },
	HBOFAMILY: {
        name: 'HBO FAMILY',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
		type: 'mpd'
    },
	HBOSIGNATURE: {
        name: 'HBO SIGNATURE',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
		type: 'mpd'
    },
	HBOHITS: {
        name: 'HBO HITS',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
		type: 'mpd'
    },
	HITSHD: {
        name: 'HITS HD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
        keyId: 'dac605bc197e442c93f4f08595a95100',
        key: '975e27ffc1b7949721ee3ccb4b7fd3e5',
		type: 'mpd'
    },
	THRILL: {
        name: 'THRILL',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
		type: 'mpd'
    },
	TAPACTIONFLIX: {
        name: 'TAP ACTIONFLIX',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
		type: 'mpd'
    },
	AXN: {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd'
    },
	CINEMAX: {
        name: 'CINEMAX',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
		type: 'mpd'
    },
	WARNERTV: {
        name: 'WARNER TV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
        keyId: '4503cf86bca3494ab95a77ed913619a0',
        key: 'afc9c8f627fb3fb255dee8e3b0fe1d71',
		type: 'mpd'
    },
	SONYMOVIES: {
        name: 'SONY MOVIES',
        url: 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/smc_720p/chunks.m3u8',
        type: 'hls'
    },
	RAKUTENVIKI: {
        name: 'RAKUTEN VIKI',
        url: 'https://newidco-rakutenviki-2-eu.xiaomi.wurl.tv/playlist.m3u8',
        type: 'hls'
    },
	RAKUTENCOMEDY: {
        name: 'RAKUTEN COMEDY',
        url: 'https://rakuten-comedy-8-nl.samsung.wurl.tv/playlist.m3u8',
        type: 'hls'
    },
	RAKUTENCOMEDYEU: {
        name: 'RAKUTEN COMEDY EU',
        url: 'https://rakuten-comedymovies-1-eu.rakuten.wurl.tv/playlist.m3u8',
        type: 'hls'
    },
	RAKUTENFAMILY: {
        name: 'RAKUTEN FAMILY',
        url: 'https://rakuten-family-1-eu.rakuten.wurl.tv/2000.m3u8',
        type: 'hls'
    },
	KIX: {
        name: 'KIX',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	KBSWORLD: {
        name: 'KBS WORLD',
        url: 'https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8',
        type: 'hls'
    },
	KMOVIES: {
        name: 'K-MOVIES',
        url: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
        type: 'hls'
    },
	Kplus: {
        name: 'K-PLUS',
        url: 'https://varun-eosin.vercel.app/stream/iptv/hlsv1/kplus.m3u8',
        type: 'hls'
    },
	ASIANCRUSH: {
        name: 'ASIANCRUSH',
        url: 'https://amg01201-cinedigmenterta-asiancrush-cineverse-x701o.amagi.tv/playlist/amg01201-cinedigmenterta-asiancrush-cineverse/cb543d1b796c668c84cb3f62cef049a2f9421fde1d6988693eb5518975d1073edce2a59caa08ff16388f1ede7f0a66413a3e951fda77118fd87eb141453c5728cfffe729a2c05616b7db083429b56a062a866a68ac39437ed0e21f48a238b6720a5aa82a66443d80b846ac7756db80148e782a8eb3dc68306d390ec90c1fbcbf5ba0f8ff5e43ca78a3b51a4b902910e39f429d8118a681d50ec85e8f25f4118095a1d88017d38f9437f852b7061632571541527ee9ab6d9e98f15931957d21560e5ce8a6808c2156e466702c337b56dd1f9b32dd8024fb115f7bc49f3def019f6eb006a9a16da9b9a29d3529c64c6f381345f0b5dae6d63027af69bb8fe8d37a7098bc721223983c89737979f897ba896357ae21976ea5cdecad7a7b0867a5bdf8e8cea3844bd308cbc9fd943c789c026e16ab52b89361d728922de69e53696b444aa99542d7c6f76a70331fc8d005942412b78ddfd89f166d9e295b7bf870d55e3269ce1f6568aa78aacd723fdf6642ae1d09d67479c04ef5b329b580dee60d34fc9ee44aed60e2b04583a756e73d720c55e0a7620e1c153de3ef600c22708c10b78484b2217b75869dfaf7ce5737102a57035cf985c944dbdf90674d6c823940477b1f109a01ac19fc085b0f23cc5e9eec3e7d8b022e3af5e558795f7f9ddcbe918db59b12e767b2a90e151a88cffbf5d1232a4e5e745aa3/162/1280x720_3329040/index.m3u8',
        type: 'hls'
    },
	SBSEU: {
        name: 'SBS EU',
        url: 'https://newidco-sbs-1-eu.xiaomi.wurl.tv/playlist.m3u8',
        type: 'hls'
    },
	TVNMOVIES: {
        name: 'TVN MOVIES',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
		type: 'mpd'
    },
	TVNPREM: {
        name: 'TVN PREMIUM',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd'
    },
	TAPMOVIES: {
        name: 'TAP MOVIES',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd'
    },
	SPOTV1: {
        name: 'SPOTV1',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd'
    },
	SPOTV2: {
        name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd'
    },
	PREMIERTENNIS: {
        name: 'PREMIER TENNIS',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd'
    },
	PREMIERSPORTS : {
        name: 'PREMIER SPORTS',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd'
    },
	TAPSPORTS: {
        name: 'TAP SPORTS',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd'
    },
	ONESPORTS1: {
        name: 'ONE SPORTS+',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd'
    },
	ONESPORTS2: {
        name: 'ONES PORTS',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
		type: 'mpd'
    },
	PBA: {
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd'
	},
	nba: {
        name: 'NBA TV',
        url: 'https://fl5.moveonjoy.com/NBA_TV/index.m3u8',
	type: 'hls'	
    },
	UAAP: {
        name: 'UAAP',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e',
		type: 'mpd'
    },
	CGTN: {
        name: 'CGTN',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd',
        keyId: '0f854ee4412b11edb8780242ac120002',
        key: '9f2c82a74e727deadbda389e18798d55',
		type: 'mpd'
    },
	FRANCE24: {
        name: 'FRANCE24',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd',
        keyId: '257f9fdeb39d41bdb226c2ae1fbdaeb6',
        key: 'e80ead0f4f9d6038ab34f332713ceaa5',
		type: 'mpd'
    },
	
	ABCAUS: {
        name: 'ABC AUS',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd'
    },
	TV5MONDE: {
        name: 'TV5 MONDE',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd',
        keyId: 'fba5a720b4a541b286552899ba86e38b',
        key: 'f63fa50423148bfcbaa58c91dfcffd0e',
		type: 'mpd'
    },
	CHANNELNEWSASIA: {
        name: 'CHANNEL NEWS ASIA',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd'
    },
	LOTUSMACAU: {
        name: 'LOTUS MACAU',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
        keyId: '60dc692e64ea443a8fb5ac186c865a9b',
        key: '01bdbe22d59b2a4504b53adc2f606cc1',
		type: 'mpd'
    },
	ANIMALPLANET : {
        name: 'ANIMAL PLANET',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd'
    },
	BBCEARTH: {
        name: 'BBC EARTH',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd'
    },
	ROCKENTERTAINMENT: {
        name: 'ROCK ENTERTAINMENT',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62',
		type: 'mpd'
    },
	DISCOVERY: {
        name: 'DISCOVERY',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        keyId: 'd9ac48f5131641a789328257e778ad3a',
        key: 'b6e67c37239901980c6e37e0607ceee6',
		type: 'mpd'
    },
	BBCWORLD: {
        name: 'BBC WORLD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd'
    },
	TRAVELCH: {
        name: 'TRAVEL CHANNEL',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd'
    },
	ASIAFOODNETWORK: {
        name: 'ASIA FOOD NETWORK',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd'
    },
	FOODNETWORK: {
        name: 'FOOD NETWORK',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd'
    },
	
	TAPTV: {
        name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd'
    },
	CRIMEINVESTIGATION: {
        name: 'CRIME INVESTIGATION',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        keyId: '21e2843b561c4248b8ea487986a16d33',
        key: 'db6bb638ccdfc1ad1a3e98d728486801',
		type: 'mpd'
    },
	TECHSTORM: {
        name: 'TECH STORM',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd',
        keyId: '5675d85ce6754ba6aa8f6acc4660f76f',
        key: '140bfb365cf143c349f68699238a610c',
		type: 'mpd'
    },
	FASHIONTV: {
        name: 'FASHION TV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd'
    },
	BLOOMBERG : {
        name: 'BLOOMBERG',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd'
    },
	NHKJAPAN: {
        name: 'NHK JAPAN',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd',
        keyId: '0f853990412b11edb8780242ac120002',
        key: '89d57dfef804fd9b5c788a54903d8256',
		type: 'mpd'
    },
	HISTORY: {
        name: 'HISTORY',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd'
    },
	ALJAZEERA: {
        name: 'ALJAZEERA',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
        keyId: '0f85362a412b11edb8780242ac120002',
        key: 'd643dfbbfca6dc64e7f58fd67ea4b7d5',
		type: 'mpd'
    },
	CCTV: {
        name: 'CCTV',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: '0f8541ec412b11edb8780242ac120002',
        key: '6cf16c272b7357c48cd47061799a4963',
		type: 'mpd'
    },
	LIFETIME: {
        name: 'LIFETIME',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd'
    },
	HGTV: {
        name: 'HGTV',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd'
    },
	ARIRANG: {
        name: 'ARIRANG',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd'
    },
	
	MTV: {
        name: 'MTV',
        url: 'https://fl2.moveonjoy.com/MTV_LIVE/index.m3u8',
        type: 'hls'
    },
	MYX: {
        name: 'MYX',
        url: 'https://myxnola-abscbn-ono.amagi.tv/index.m3u8',
       	type: 'hls'
    },	
};
	
  
	





