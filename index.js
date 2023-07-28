const fetch = require("node-fetch"); 
var api_url = 'https://api.genelpara.com/embed/para-birimleri.json'

function ydt(veri) {
    if(veri == 0) {
        return "Değişim Yok"
    } else if(veri > 0) {
        return "Yükselişte"
    } else if(veri < 0) {
        return "Düşüşte"
    } else {
        return null
    }
}

module.exports = async() => {
    var cikti = await fetch(api_url)
    var veri = await cikti.json()
    var veriusd = veri['USD']
    var verieur = veri['EUR']
    var verigbp = veri['GBP']
    const format = {
        'USD': {
            satis:veriusd['satis'] / 1,
            alis:veriusd['alis'] / 1,
            degisim:veriusd['degisim'] / 1,
            durum:ydt(veriusd['degisim'])
        },
        'EUR' : {
            satis:verieur['satis']/1,
            alis:verieur['alis']/1,
            degisim:verieur['degisim']/1,
            durum:ydt(verieur['degisim'])
        },
        'GBP': {
            satis:verigbp['satis'] / 1,
            alis:verigbp['alis'] / 1,
            degisim: verigbp['degisim'] / 1,
            durum:ydt(verigbp['degisim'])
        }

    }
    return format
}