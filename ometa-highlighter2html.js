{OmetaHighlighterToHtml=OMeta.delegated({"token":function(){var $elf=this,t,c,c;return $elf._or((function(){return (function(){$elf._form(function(){return (function(){t=$elf._apply("anything");$elf._pred((t["length"] > (1)));return c=$elf._apply("tokens")})()});return (((("<span class=\"" + OmetaHighlighterToHtml._makeClass(t)) + "\">") + c) + "</span>")})()}),(function(){return (function(){c=$elf._apply("anything");return OmetaHighlighterToHtml._escape(c)})()}))},"tokens":function(){var $elf=this,c;return (function(){$elf._form(function(){return c=$elf._many(function(){return $elf._apply("token")})});return c.join("")})()},"topLevel":function(){var $elf=this,lang,c;return (function(){$elf._form(function(){return (function(){lang=$elf._apply("anything");return c=$elf._apply("tokens")})()});return (((("<pre class=\"ohl ohl-" + lang) + "\"><code>") + c) + "</code></pre>")})()}});OmetaHighlighterToHtml["_escape"]=(function (){{var amp=new RegExp("&","g");var lt=new RegExp("<","g");var gt=new RegExp(">","g");var apos=new RegExp("\'","g");var quot=new RegExp("\"","g")};return (function (s){return String(s).replace(amp,"&amp;").replace(lt,"&lt;").replace(gt,"&gt;").replace(apos,"&apos;").replace(quot,"&quot;")})})();OmetaHighlighterToHtml["_makeClass"]=(function (){var type2class=({});return (function (type){{var types=[];var typeParts=type.split(".")};while(typeParts["length"]){types.unshift(typeParts.join("-"));typeParts.pop()};var typeClass="";while(types["length"]){var t=types.shift();typeClass+=(" ohl-" + (type2class.hasOwnProperty(t)?type2class[t]:t))};return typeClass.slice((1))})})()}