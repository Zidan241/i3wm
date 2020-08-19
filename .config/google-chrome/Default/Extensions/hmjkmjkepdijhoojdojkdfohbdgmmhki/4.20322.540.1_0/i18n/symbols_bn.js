/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={c:{1E3:{other:"0\u00a0\u09b9\u09be"},1E4:{other:"00\u00a0\u09b9\u09be"},1E5:{other:"0\u00a0\u09b2\u09be"},1E6:{other:"00\u00a0\u09b2\u09be"},1E7:{other:"0\u00a0\u0995\u09cb"},1E8:{other:"00\u00a0\u0995\u09cb"},1E9:{other:"000\u00a0\u0995\u09cb"},1E10:{other:"00\u09b6\u09a4\u00a0\u0995\u09cb"},1E11:{other:"00000\u00a0\u0995\u09cb"},1E12:{other:"0\u00a0\u09b2\u09be.\u0995\u09cb."},1E13:{other:"00\u00a0\u09b2\u09be.\u0995\u09cb."},1E14:{other:"000\u00a0\u09b2\u09be.\u0995\u09cb."}},b:{1E3:{other:"0 \u09b9\u09be\u099c\u09be\u09b0"},
1E4:{other:"00 \u09b9\u09be\u099c\u09be\u09b0"},1E5:{other:"0 \u09b2\u09be\u0996"},1E6:{other:"00 \u09b2\u09be\u0996"},1E7:{other:"0 \u0995\u09cb\u099f\u09bf"},1E8:{other:"00 \u0995\u09cb\u099f\u09bf"},1E9:{other:"000 \u0995\u09cb\u099f\u09bf"},1E10:{other:"0000 \u0995\u09cb\u099f\u09bf"},1E11:{other:"00000 \u0995\u09cb\u099f\u09bf"},1E12:{other:"0 \u09b2\u09be\u0996 \u0995\u09cb\u099f\u09bf"},1E13:{other:"00 \u09b2\u09be\u0996 \u0995\u09cb\u099f\u09bf"},1E14:{other:"000 \u09b2\u09be\u0996 \u0995\u09cb\u099f\u09bf"}}};var d={ga:"y",oa:"y G",ha:"MMM y",ia:"MMMM y",pa:"MM/y",G:"MMM d",H:"MMMM dd",J:"M/d",I:"MMMM d",ma:"MMM d, y",ea:"EEE, MMM d",na:"EEE, MMM d, y",i:"d",la:"MMM d, h:mm a zzzz"};d={ga:"y",oa:"y G",ha:"MMM y",ia:"MMMM y",pa:"MM-y",G:"d MMM",H:"dd MMMM",J:"d/M",I:"d MMMM",ma:"d MMM, y",ea:"EEE d MMM",na:"EEE, d MMM, y",i:"d",la:"d MMM h:mm a zzzz"};var h={s:["BC","AD"],o:["Before Christ","Anno Domini"],L:"JFMAMJJASOND".split(""),Y:"JFMAMJJASOND".split(""),F:"January February March April May June July August September October November December".split(" "),X:"January February March April May June July August September October November December".split(" "),U:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),$:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ba:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),W:"Sun Mon Tue Wed Thu Fri Sat".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),M:"SMTWTFS".split(""),Z:"SMTWTFS".split(""),V:["Q1","Q2","Q3","Q4"],S:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ca:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,fa:[5,6],A:5};
h={ja:2534,s:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],o:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09cd\u09b0\u09c0\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],L:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),Y:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),
F:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),X:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
U:"\u099c\u09be\u09a8\u09c1 \u09ab\u09c7\u09ac \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),$:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
da:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),ba:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
W:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),aa:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),M:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),Z:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),
V:["\u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995"],S:["\u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995",
"\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995"],a:["AM","PM"],g:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy"],ca:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],v:6,fa:[5,6],A:5};var l={l:".",B:",",N:"%",ka:"0",R:"+",D:"-",u:"E",P:"\u2030",C:"\u221e",K:"NaN",j:"#,##0.###",T:"#E0",O:"#,##0%",f:"\u00a4#,##0.00",m:"USD"};l={l:".",B:",",N:"%",ka:"\u09e6",R:"+",D:"-",u:"E",P:"\u2030",C:"\u221e",K:"NaN",j:"#,##,##0.###",T:"#E0",O:"#,##0%",f:"#,##,##0.00\u00a4",m:"BDT"};b("I18N_DATETIMESYMBOLS_ERAS",h.s);b("I18N_DATETIMESYMBOLS_ERANAMES",h.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_MONTHS",h.F);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.X);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.U);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.$);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.W);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.M);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.Z);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.V);b("I18N_DATETIMESYMBOLS_QUARTERS",h.S);b("I18N_DATETIMESYMBOLS_AMPMS",h.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ca);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.fa);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.A);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ha);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ia);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.H);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.J);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.I);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ea);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.i);
void 0!==h.ja&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ja);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.B);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.N);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.ka);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.R);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.D);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.P);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.C);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.K);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.O);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.b);