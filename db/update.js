const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gwNEXA';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

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
