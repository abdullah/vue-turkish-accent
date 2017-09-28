# vue-turkish-textarea

Bu direktif İngilizce klavye ile yazılmış metinleri Türkçe'ye çevirmeye yarar.

[Demo](https://abdullah.github.io/vue-turkish-accent/)

## Kurulum

```bash
npm i -S vue-turkish-textarea
```

 

## Kullanma

Öncesinde direktifi Vue örneğine tanıtın. Daha sonra DOM elemanına v-vtt direktifi olarak ekleyin.

```javascript
Vue.use(Vtt);
new Vue({
    el: "#app",
    data() {
        return {
            change: true,
            keyup: false,
            paste: true
        }
    }
})  
```

```
  <textarea v-vtt="{ onchange: change, onpaste: paste,onkeyup: keyup }">
```

## Nasıl Çalışır?

Bu kod arkaplanda [Dr. Deniz Yüret](http://www.denizyuret.com/)'in Emacs icin yazdığı eklentiyi JavaScript'e
çeviren [Mustafa Emre Acer](http://www.mustafaacer.com/)'in [Turkish Deasciifier](https://github.com/meacer/deasciifier/) kodunu Vue.js direktifine dönüştürür. Deasciifier hakkında ayrıntılı bilgi için:

- http://www.denizyuret.com/2006/11/emacs-turkish-mode.html
- http://www.deasciifier.com/


Bu deponun oluşturulmasında  kullanılan ve esinlenilen kaynaklar
- Kodun orijinali: https://github.com/meacer/deasciifier/
- Mac OS X servisi hali: https://github.com/f/deasciifier
- npm'deki kütüphanesi: https://github.com/ustun/turkish-deasciifier

## Lisans

MIT



