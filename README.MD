## Hoşgeldinizzzz !!!
### Bu projenin amacı döviz verilerini otomatik olarak çekip size sunmaktır

# Kurulum :
``` 
> npm i doviz-api-tr
```
# **Kullanım** :
```js
const doviz = require("doviz-api-tr");


// Verileri alıyoruz
doviz().then(data => {
    var eur_satis = data.EUR.satis
    console.log(eur_satis)
    // Çıktımız Euro para biriminin satış fiyatı olacaktır
})
```

# **Tüm verileri yazdırma** :
 ```js
const doviz = require("doviz-api-tr");
//Modülümüzü tanımladık

// Verileri alıyoruz
doviz().then(data => {
    var veriler = data
    console.log(veriler)
    // Çıktımız 3 tür para biriminin verileri olacaktır
})
```
# **Desteklenen para birimleri** : 
> EUR,GBP,USD

------------------------------
# **Diğer projelerimiz** : 
[node-file-creator-cli](https://www.npmjs.com/package/node-file-creator-cli)

[tuncvr-db](https://www.npmjs.com/package/tuncvr-db)