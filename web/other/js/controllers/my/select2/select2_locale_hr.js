!function(t){"use strict";function e(t){return" "+t+" znak"+(t%10<5&&0<t%10&&(t%100<5||19<t%100)?1<t%10?"a":"":"ova")}t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"Nema rezultata"},formatInputTooShort:function(t,n){return"Unesite još"+e(n-t.length)},formatInputTooLong:function(t,n){return"Unesite"+e(t.length-n)+" manje"},formatSelectionTooBig:function(t){return"Maksimalan broj odabranih stavki je "+t},formatLoadMore:function(t){return"Učitavanje rezultata…"},formatSearching:function(){return"Pretraga…"}})}(jQuery);