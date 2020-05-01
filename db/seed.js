const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gwNEXA';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var gwnCards = require('../scraper/gwn.json');

//seeding to databse
let bulkUpdateOps = [];
let i = 1;
gwnCards.forEach((card) => {
  bulkUpdateOps.push(
    {
      "insertOne": {
        _id: i++,
        card_id: card.id,
        character_id: card.character_id,
        prodid: card.prodid,
        card_number: card.info_1,
        serial_number: card.info_25,
        card_name: card.info_2,
        type: card.info_3,
        rarity: card.info_17,
        total_cost: card.info_4,
        roll_cost: card.info_5,
        attack: card.info_7,
        shoot: card.info_8,
        defense: card.info_9,
        terrain: card.info_10,
        g_sign: card.info_6,
        color: card.info_18,
        characteristic: card.info_11,
        gain: card.info_21,
        guard: card.info_22,
        illustrator: card.info_20,
        booster: card.info_16,
        flavor: card.info_15,
        text: card.info_12,
        free_words: card.freewords,
        image_link: `http://www.carddass.com/cdmasters/nexa/images/cardlist/${card.prodid}/${card.info_25}.png`
      } 
    }
  )
})
db.collection('cardlists').bulkWrite(bulkUpdateOps).then((result) => {
  console.log('done with remaining batch')
})

//update
db.collection('cardlists').updateMany({'booster': 'IGNITION NEXT AGE'}, {$set:{'booster':'ブースター第1弾～IGNITION NEXT AGE～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'プロモーション'}, {$set:{'booster':'プロモーションカード'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'ACCEL OF NEXT AGE'}, {$set:{'booster':'EXブースター第1弾～ACCEL OF NEXT AGE～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '刻の鼓動'}, {$set:{'booster':'ブースター第2弾～刻の鼓動～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '宇宙の呼び声'}, {$set:{'booster':'EXブースター第2弾～宇宙の呼び声～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'CROSS STORM'}, {$set:{'booster':'EXブースター第3弾～CROSS STORM～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '宿命の鎖'}, {$set:{'booster':'ブースター第4弾～宿命の鎖～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '革新の光'}, {$set:{'booster':'EXブースター第4弾～革新の光～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '5弾ブースター「相剋の狼煙」'}, {$set:{'booster':'ブースター第5弾～相剋の狼煙～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '猛火の再来'}, {$set:{'booster':'EXブースター第5弾～猛火の再来～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'ビルドファイターズ'}, {$set:{'booster':'アニメエディション「ビルドファイターズ」'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '宇宙の閃光'}, {$set:{'booster':'ブースター第6弾～宇宙の閃光～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '雷光の進撃'}, {$set:{'booster':'ブースター第6弾EX～雷光の進撃～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'ベースドブースター【サイクルB】'}, {$set:{'booster':'BASED BOOSTER PACK「サイクルB」'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '7弾～ARCIVE OF LEGEND～'}, {$set:{'booster':'ブースター第7弾～ARCHIVE OF LEGEND～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '7弾～ARCHIVE OF LEGEND～'}, {$set:{'booster':'ブースター第7弾～ARCHIVE OF LEGEND～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '8弾「悠久のはじまり」'}, {$set:{'booster':'ブースター第8弾～悠久のはじまり～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '9弾「闘う覚悟」'}, {$set:{'booster':'ブースター第9弾～闘う覚悟～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '10弾ブースター「覚醒する魂」'}, {$set:{'booster':'ブースター第10弾～覚醒する魂～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': 'ベースドブースター【サイクルC】'}, {$set:{'booster':'BASED BOOSTER PACK「サイクルC」'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '11弾「反逆の咆哮」'}, {$set:{'booster':'ブースター第11弾～反逆の咆哮～'}}, {multi:true})
db.collection('cardlists').updateMany({'booster': '12弾「LEGEND OF 「G」」'}, {$set:{'booster':'ブースター第12弾～LEGEND OF 「G」～'}}, {multi:true})