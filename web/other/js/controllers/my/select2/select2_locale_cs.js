!function(e){"use strict";var o={2:function(e){return e?"dva":"dvě"},3:function(){return"tři"},4:function(){return"čtyři"}};e.extend(e.fn.select2.defaults,{formatNoMatches:function(){return"Nenalezeny žádné položky"},formatInputTooShort:function(e,n){var t=n-e.length;return 1==t?"Prosím zadejte ještě jeden znak":t<=4?"Prosím zadejte ještě další "+o[t](!0)+" znaky":"Prosím zadejte ještě dalších "+t+" znaků"},formatInputTooLong:function(e,n){var t=e.length-n;return 1==t?"Prosím zadejte o jeden znak méně":t<=4?"Prosím zadejte o "+o[t](!0)+" znaky méně":"Prosím zadejte o "+t+" znaků méně"},formatSelectionTooBig:function(e){return 1==e?"Můžete zvolit jen jednu položku":e<=4?"Můžete zvolit maximálně "+o[e](!1)+" položky":"Můžete zvolit maximálně "+e+" položek"},formatLoadMore:function(e){return"Načítají se další výsledky…"},formatSearching:function(){return"Vyhledávání…"}})}(jQuery);