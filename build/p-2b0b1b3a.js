import{d as e}from"./p-4450c908.js";import"./p-4d42db0b.js";import"./p-c379f954.js";import"./p-c673c097.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-27680149.js";import"./p-779078e6.js";import"./p-2872e2fa.js";import"./p-9daba94c.js";import"./p-86ba524c.js";import"./p-79237d37.js";import"./p-6207f8cf.js";import"./p-4b2fe086.js";import"./p-5a953229.js";import"./p-876a8809.js";var a={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function e(a,r){if(a%10>=1&&a%10<=4&&(a%100<10||a%100>=20)){return a%10===1?r[0]:r[1]}return r[2]},relativeTimeFormatter:function e(r,d,t,n){var m=a.words[t];if(t.length===1){if(t==="y"&&d)return"jedna godina";return n||d?m[0]:m[1]}var o=a.correctGrammarCase(r,m);if(t==="yy"&&d&&o==="%d godinu")return r+" godina";return o.replace("%d",r)}};var r={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:a.relativeTimeFormatter,mm:a.relativeTimeFormatter,h:a.relativeTimeFormatter,hh:a.relativeTimeFormatter,d:a.relativeTimeFormatter,dd:a.relativeTimeFormatter,M:a.relativeTimeFormatter,MM:a.relativeTimeFormatter,y:a.relativeTimeFormatter,yy:a.relativeTimeFormatter},ordinal:function e(a){return a+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};e.locale(r,null,true);export default r;
//# sourceMappingURL=p-2b0b1b3a.js.map