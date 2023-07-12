const icon_by_name = {
    //##Placed Objects
    "CustomDecal": "00_clear",
    "LightSource": "00_clear",
    "LightBeam": "00_clear",
    "LightFixture": "00_clear",
    "ExitSymbolHidden": "00_clear",
    "PlayerPushback": "00_clear",
    "InsectGroup": "00_clear",
    "SeedCob": "00_clear",
    "Rainbow": "00_clear",
    "GhostSpot": "00_clear",
    "LanternOnStick": "00_clear",
    "ExitSymbolShelter": "00_clear",
    "DeadSeedCob": "00_clear",
    "DataPearl": "00_clear",
    "GoldToken": "00_clear",
    "DeadTokenStalk": "00_clear",
    "BlueToken": "00_clear",
    "DevToken": "00_clear",
    "RedToken": "00_clear",
    "CentipedeAttractor": "00_clear",
    "SteamPipe": "00_clear",
    "CosmeticSlimeMold": "00_clear",
    "CosmeticSlimeMold2": "00_clear",
    "BrokenShelterWaterLevel": "00_clear",
    "KarmaFlower": "00_clear",
    "VoidSpawnEgg": "00_clear",
    "Filter": "00_clear",
    "LillyPuck": "00_clear",
    "WhiteToken": "00_clear",
    "TradeOutpost": "00_clear",
    "ScavengerTreasury": "00_clear",
    "SnowSource": "00_clear",
    "NoLeviathanStrandingZone": "00_clear",
    "GlowWeed": "00_clear",
    "ProjectedImagePosition": "00_clear",
    "SSLightRod": "00_clear",
    "UniqueDataPearl": "00_clear",
    "SuperStructureFuses": "00_clear",
    "DayNightSettings": "00_clear",
    //##End PlacedObjects
    "clear": "00_clear",
    "rock": "01_rock",
    "spear": "02_spear",
    "boomstick": "03_explosivespear",
    "ReliableSpear": "03_explosivespear",//## PlacedObject
    "bomb": "04_explosivebomb",
    "hive": "05_hive",
    "lantern": "06_lantern",
    "lure": "07_lureplant",
    "mushroom": "08_mushroom",
    "Mushroom": "08_mushroom",//## PlacedObject
    "flashbang": "09_flashbomb",
    "FlareBomb": "09_flashbomb",//## PlacedObject
    "puffball": "10_puffball",
    "waternut": "11_bubblefruit",
    "WaterNut": "11_bubblefruit",//## PlacedObject
    "firecrackerplant": "12_firecrackerplant",
    "bluefruit": "13_bluefruit",
    "DangleFruit": "13_bluefruit",//## PlacedObject
    "jellyfish": "14_jellyfish",
    "JellyFish": "14_jellyfish",//## PlacedObject
    "bubbleweed": "15_bubbleweed",
    "BubbleGrass": "15_bubbleweed",//## PlacedObject
    "slimemold": "16_slimemold",
    "SlimeMold": "16_slimemold",//## PlacedObject
    "slugcat": "17_slugcat",
    //## Creatures from the World File
    "Green": "18_greenlizard",
    "Pink": "19_pinklizard",
    "Blue": "20_bluelizard",
    "White": "21_whitelizard",
    "Black": "22_molelizard",
    "Yellow": "23_orangelizard",
    "Cyan": "24_cyanlizard",
    "Red": "25_redlizard",
    "Salamander": "26_salamander",
    "batfly": "27_batfly",
    "CicadaA": "28_whitecicada",
    "CicadaB": "29_darkcicada",
    "Snail": "30_snailturtle",
    "Leech": "31_redleech",
    "Sea Leech": "32_blueleech",
    "SeaLeech": "32_blueleech",
    "Mimic": "33_poleplant",
    "PoleMimic": "33_poleplant",
    "TentaclePlant": "34_monsterkelp",
    "Tentacle Plant": "34_monsterkelp",
    "Tentacle": "34_monsterkelp",
    "Scavenger": "35_scavenger",
    "vulturegrub": "36_vulturegrub",
    "VultureGrub": "36_vulturegrub",//## PlacedObject
    "Vulture": "37_vulture",
    "KingVulture": "38_kingvulture",
    "King Vulture": "38_kingvulture",
    "Small Centipede": "39_smallcentipede",
    "SmallCentipede": "39_smallcentipede",
    "Centipede": "40_centipede",
    "Big Centipede": "41_bigcentipede",
    "Red Centipede": "42_redcentipede",
    "RedCentipede": "42_redcentipede",
    "Centiwing": "43_flyingcentipede",
    "grappleworm": "44_grappleworm",
    "Tube": "44_grappleworm",
    "TubeWorm": "44_grappleworm",
    "Tube Worm": "44_grappleworm",
    "hazer": "45_hazer",
    "Lantern Mouse": "46_lanternmouse",
    "Mouse": "46_lanternmouse",
    "Spider": "47_spider",
    "BigSpider": "48_bigspider",
    "Big Spider": "48_bigspider",
    "Bigspider": "48_bigspider",
    "SpitterSpider": "49_spitterspider",
    "Miros Bird": "50_mirosbird",
    "Miros": "50_mirosbird",
    "Bro": "51_brotherlonglegs",
    "Daddy": "52_daddylonglegs",
    "Deer": "53_raindeer",
    "EggBug": "54_bubblebug",
    "Eggbug": "54_bubblebug",
    "DropBug": "55_dropwig",
    "Dropbug": "55_dropwig",
    "DropWig": "55_dropwig",
    "Dropwig": "55_dropwig",
    "BigNeedleWorm": "56_noodlefly",
    "BigNeedle": "56_noodlefly",
    "Needle": "56_noodlefly",
    "SmallNeedleWorm": "57_babynoodlefly",
    "SmallNeedle": "57_babynoodlefly",
    "Jet Fish": "58_jetfish",
    "JetFish": "58_jetfish",
    "Jetfish": "58_jetfish",
    "Leviathan": "59_leviathan",
    "randomitems": "60_randomitems_inactive",
    // MSC. excluded: SlugNPC (no predefined den), Stowaway (no icon), HunterDaddy (no icon and no predefined den), ScavengerKing (no den)
    "Caramel": "73_caramel",
    "SpitLizard": "73_caramel",
    "Strawberry": "74_strawberry",
    "ZoopLizard": "74_strawberry",
    "Eel": "75_eel",
    "EelLizard": "75_eel",
    "Terror": "76_terror",
    "TerrorLongLegs": "76_terror",
    "MotherSpider": "77_motherspider",
    "Mother Spider": "77_motherspider",
    "MirosVulture": "78_mirosvulture",
    "Miros Vulture": "78_mirosvulture",
    "Hellbug": "79_hellbug",
    "HellBug": "79_hellbug",
    "Firebug": "79_hellbug",
    "FireBug": "79_hellbug",
    "ScavengerElite": "80_scavengerelite",
    "Scavenger Elite": "80_scavengerelite",
    "EliteScavenger": "80_scavengerelite",
    "Elite Scavenger": "80_scavengerelite",
    "Elite": "80_scavengerelite",
    "Inspector": "81_inspector",
    "Yeek": "82_yeek",
    "BigJelly": "83_bigjelly",
    "BigJellyFish": "83_bigjelly",//## PlacedObject
    "AquaCentipede": "84_aquacenti",
    "Aquacenti": "84_aquacenti",
    "AquaCenti": "84_aquacenti",
    "Aquapede": "84_aquacenti",
    "JungleLeech": "85_jungleleech",
    // None
    "NONE": "63_none",
    //## Slugcat icons
    "white": "17_slugcat",
    "red": "64_hunter",
    "yellow": "65_monk",
    "gourmand": "67_gourmand",
    "artificer": "68_artificer",
    "rivulet": "69_rivulet",
    "spear": "70_spear",
    "saint": "71_saint",
    "inv": "86_inv",
    //## Missing stuff
    //"Garbage Worm": "00_clear",
}

var requestLock = {};
var lastRequest = null;

function getJsonObject(url, cb, async = true) {
    if (lastRequest != null) lastRequest.abort();
    let request = new XMLHttpRequest();
    lastRequest = request;
    requestLock = {};
    request.requestLock = requestLock;
    request.open('GET', url, async);
    request.onreadystatechange = function () {
        if (request.requestLock != requestLock && request.status != 0) {
            request.abort();
            console.log("request for " + url + " aborted!");
        }
        else if (request.readyState === 4 && request.status === 200) {
            try {
                cb(JSON.parse(request.responseText));
            } catch (err) {
                console.log(err);
            }
            if (lastRequest == request) lastRequest = null;
        }
    }
    request.send();
}
