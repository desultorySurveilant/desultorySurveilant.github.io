import 'dart:convert';

Map save = jsonDecode('''{
"dataString": "UNIMPORTANT:___this is not a real dollstring, do not use",
"name": "UNIMPORTANT",
"lastPlayed": "1515151515151",
"bgIndex": "0",
"PetInventory": {
"petsList": [{"lastPlayed": "1576796385671", "isempress": "false", "hatchDate": "1576796385671", "lastFed": "1576796385671", "dollDATAURL":  "Teal Egg:___HBQ-CW4AgoIAQUEAgoIAw8MAQUEAgoIAgoIAgoIAAABLS0s6OjoREREAAAAREREzMzPExMQAgoIAQUEIgbgNwBNf9AFsALYAUIAoWA==", "boredomJson": "0", "nameJSON":  "Teal Egg", "healthJson": "100", "TYPE": "EGG", "corrupt": "false", "purified": "false", "patience": "13", "idealistic": "-46", "curious": "38", "loyal": "45", "energetic": "-40", "external": "42", "remembered": [], "rememberedNames": [], "rememberedCastes": []}],
"alumni": []
},
"ItemInventory": {
"itemList": []
},
"caegers": "0",
"lastAllowence": "1515151515151"
}''');
Map pet = jsonDecode('{"lastPlayed": "1576796385671", "isempress": "false", "hatchDate": "1576796385671", "lastFed": "1576796385671", "dollDATAURL":  "Teal Egg:___HBQ-CW4AgoIAQUEAgoIAw8MAQUEAgoIAgoIAgoIAAABLS0s6OjoREREAAAAREREzMzPExMQAgoIAQUEIgbgNwBNf9AFsALYAUIAoWA==", "boredomJson": "0", "nameJSON":  "Teal Egg", "healthJson": "100", "TYPE": "EGG", "corrupt": "false", "purified": "false", "patience": "13", "idealistic": "-46", "curious": "38", "loyal": "45", "energetic": "-40", "external": "42", "remembered": [], "rememberedNames": [], "rememberedCastes": []}');
Map alum = jsonDecode('{"lastPlayed": "1576796385671", "isempress": "false", "hatchDate": "1576796385671", "lastFed": "1576796385671", "dollDATAURL":  "Chiana+Kamrje%3A___YUPgluAIKCAEFBAIKCAMPDAEFBAIKCAIKCAIKCAAAAS0tLOjo6ERERAAAAERERMzMzxMTEAIKCAEFBCIG4DcATX_AKUAWwAtgBQgChY%3D", "boredomJson": "0", "nameJSON":  "Chiana Kamrje", "healthJson": "100", "TYPE": "TROLL", "corrupt": "false", "purified": "false", "patience": "13", "idealistic": "-46", "curious": "38", "loyal": "45", "energetic": "-40", "external": "42", "remembered": [], "rememberedNames": [], "rememberedCastes": [], "epilogue": "No Epilogue"}');
Map empress = jsonDecode('{"lastPlayed": "1576796385671", "isempress": "true", "hatchDate": "1576796385671", "lastFed": "1576796385671", "dollDATAURL":  "Chiana+Kamrje%3A___YUaWlpmQBNdwArmQBNdwArVQAJAIKCAIKCmQBNAAAAS0tLOjo6ERERAAAAERERMzMzxMTEAIKCAEFBCIG4DcATX_AKUAWwAtgBQgChY%3D", "boredomJson": "0", "nameJSON":  "Chiana Kamrje", "healthJson": "100", "TYPE": "TROLL", "corrupt": "false", "purified": "false", "patience": "13", "idealistic": "-46", "curious": "38", "loyal": "45", "energetic": "-40", "external": "42", "remembered": [], "rememberedNames": [], "rememberedCastes": [], "epilogue": "No Epilogue"}');
Map itemApp = {"name": "Soft Pile", "imageLoc": "scarf_pile.png"};
Map item = jsonDecode('{"id": "1007", "patience": "6", "idealistic": "-20", "curious": "-18", "loyal": "0", "energetic": "-15", "external": "0", "itemAppearances": [{"imageLoc": "scarf_pile.png", "name": "Soft Pile"}, {"imageLoc": "stuffpile.png", "name": "Friend Pile"}, {"imageLoc": "theduttle.png", "name": "Duttle"}, {"imageLoc": "velvetpillow.png", "name": "Highblood Pillow"}]}');