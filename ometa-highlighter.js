{OmetaHighlighterJs=Parser.delegated({"fromTo":function(){var $elf=this,x,y,s,c,e;return (function(){x=$elf._apply("anything");y=$elf._apply("anything");s=$elf._applyWithArgs("seq",x);c=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("seq",y)});return $elf._apply("char")})()});e=$elf._applyWithArgs("seq",y);return [s,c.join(""),e]})()},"nameFirst":function(){var $elf=this;return $elf._or((function(){return $elf._apply("letter")}),(function(){return $elf._applyWithArgs("exactly","$")}),(function(){return $elf._applyWithArgs("exactly","_")}))},"nameRest":function(){var $elf=this;return $elf._or((function(){return $elf._apply("nameFirst")}),(function(){return $elf._apply("digit")}))},"name":function(){var $elf=this,r;return (function(){r=$elf._applyWithArgs("firstAndRest","nameFirst","nameRest");return ["name",r.join("")]})()},"builtin":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("seq","Array")}),(function(){return $elf._applyWithArgs("seq","Boolean")}),(function(){return $elf._applyWithArgs("seq","Date")}),(function(){return $elf._applyWithArgs("seq","Error")}),(function(){return $elf._applyWithArgs("seq","Function")}),(function(){return $elf._applyWithArgs("seq","Math")}),(function(){return $elf._applyWithArgs("seq","netscape")}),(function(){return $elf._applyWithArgs("seq","Number")}),(function(){return $elf._applyWithArgs("seq","Object")}),(function(){return $elf._applyWithArgs("seq","Packages")}),(function(){return $elf._applyWithArgs("seq","RegExp")}),(function(){return $elf._applyWithArgs("seq","String")}),(function(){return $elf._applyWithArgs("seq","sun")}),(function(){return $elf._applyWithArgs("seq","decodeURI")}),(function(){return $elf._applyWithArgs("seq","decodeURIComponent")}),(function(){return $elf._applyWithArgs("seq","encodeURI")}),(function(){return $elf._applyWithArgs("seq","encodeURIComponent")}),(function(){return $elf._applyWithArgs("seq","Error")}),(function(){return $elf._applyWithArgs("seq","eval")}),(function(){return $elf._applyWithArgs("seq","isFinite")}),(function(){return $elf._applyWithArgs("seq","isNaN")}),(function(){return $elf._applyWithArgs("seq","parseFloat")}),(function(){return $elf._applyWithArgs("seq","parseInt")}),(function(){return $elf._applyWithArgs("seq","document")}),(function(){return $elf._applyWithArgs("seq","this")}),(function(){return $elf._applyWithArgs("seq","window")}));return ["name.builtin",c]})()},"declaration":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("seq","var")}),(function(){return $elf._applyWithArgs("seq","with")}),(function(){return $elf._applyWithArgs("seq","function")}));return ["keyword.declaration",c]})()},"reserved":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("seq","abstract")}),(function(){return $elf._applyWithArgs("seq","boolean")}),(function(){return $elf._applyWithArgs("seq","byte")}),(function(){return $elf._applyWithArgs("seq","char")}),(function(){return $elf._applyWithArgs("seq","class")}),(function(){return $elf._applyWithArgs("seq","const")}),(function(){return $elf._applyWithArgs("seq","debugger")}),(function(){return $elf._applyWithArgs("seq","double")}),(function(){return $elf._applyWithArgs("seq","enum")}),(function(){return $elf._applyWithArgs("seq","export")}),(function(){return $elf._applyWithArgs("seq","extends")}),(function(){return $elf._applyWithArgs("seq","final")}),(function(){return $elf._applyWithArgs("seq","float")}),(function(){return $elf._applyWithArgs("seq","goto")}),(function(){return $elf._applyWithArgs("seq","implements")}),(function(){return $elf._applyWithArgs("seq","import")}),(function(){return $elf._applyWithArgs("seq","int")}),(function(){return $elf._applyWithArgs("seq","interface")}),(function(){return $elf._applyWithArgs("seq","long")}),(function(){return $elf._applyWithArgs("seq","native")}),(function(){return $elf._applyWithArgs("seq","package")}),(function(){return $elf._applyWithArgs("seq","private")}),(function(){return $elf._applyWithArgs("seq","protected")}),(function(){return $elf._applyWithArgs("seq","public")}),(function(){return $elf._applyWithArgs("seq","short")}),(function(){return $elf._applyWithArgs("seq","static")}),(function(){return $elf._applyWithArgs("seq","super")}),(function(){return $elf._applyWithArgs("seq","synchronized")}),(function(){return $elf._applyWithArgs("seq","throws")}),(function(){return $elf._applyWithArgs("seq","transient")}),(function(){return $elf._applyWithArgs("seq","volatile")}));return ["keyword.reserved",c]})()},"constant":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("seq","true")}),(function(){return $elf._applyWithArgs("seq","false")}),(function(){return $elf._applyWithArgs("seq","null")}),(function(){return $elf._applyWithArgs("seq","NaN")}),(function(){return $elf._applyWithArgs("seq","Infinity")}),(function(){return $elf._applyWithArgs("seq","undefined")}));return ["keyword.constant",c]})()},"keyword":function(){var $elf=this,c;return $elf._or((function(){return $elf._apply("declaration")}),(function(){return $elf._apply("reserved")}),(function(){return $elf._apply("constant")}),(function(){return (function(){c=$elf._or((function(){return $elf._applyWithArgs("seq","for")}),(function(){return $elf._applyWithArgs("seq","in")}),(function(){return $elf._applyWithArgs("seq","while")}),(function(){return $elf._applyWithArgs("seq","do")}),(function(){return $elf._applyWithArgs("seq","break")}),(function(){return $elf._applyWithArgs("seq","return")}),(function(){return $elf._applyWithArgs("seq","continue")}),(function(){return $elf._applyWithArgs("seq","switch")}),(function(){return $elf._applyWithArgs("seq","case")}),(function(){return $elf._applyWithArgs("seq","default")}),(function(){return $elf._applyWithArgs("seq","if")}),(function(){return $elf._applyWithArgs("seq","else")}),(function(){return $elf._applyWithArgs("seq","throw")}),(function(){return $elf._applyWithArgs("seq","try")}),(function(){return $elf._applyWithArgs("seq","catch")}),(function(){return $elf._applyWithArgs("seq","finally")}),(function(){return $elf._applyWithArgs("seq","new")}),(function(){return $elf._applyWithArgs("seq","delete")}),(function(){return $elf._applyWithArgs("seq","typeof")}),(function(){return $elf._applyWithArgs("seq","instanceof")}),(function(){return $elf._applyWithArgs("seq","void")}),(function(){return $elf._applyWithArgs("seq","this")}));return ["keyword",c]})()}))},"escapeChar":function(){var $elf=this,e,c;return (function(){e=$elf._applyWithArgs("exactly","\\");c=$elf._apply("char");return ["string.escape",[e,c]]})()},"nonEscapeChar":function(){var $elf=this,q;return (function(){q=$elf._apply("anything");$elf._not(function(){return $elf._applyWithArgs("seq",q)});return $elf._apply("char")})()},"quote":function(){var $elf=this,q,c;return (function(){q=$elf._apply("anything");c=$elf._applyWithArgs("seq",q);return ["punctuation",c]})()},"anyString":function(){var $elf=this,q,n,qp,cs;return (function(){q=$elf._apply("anything");n=$elf._apply("anything");qp=$elf._applyWithArgs("quote",q);cs=$elf._many(function(){return $elf._or((function(){return $elf._apply("escapeChar")}),(function(){return $elf._applyWithArgs("nonEscapeChar",q)}))});$elf._applyWithArgs("quote",q);return (function (){cs.unshift(qp);cs.push(qp);return [(("string" + ".") + n),cs]})()})()},"string":function(){var $elf=this,r,f;return $elf._or((function(){return $elf._applyWithArgs("anyString","\'","single")}),(function(){return $elf._applyWithArgs("anyString","\"","double")}),(function(){return (function(){r=$elf._applyWithArgs("anyString","/","regex");f=$elf._many(function(){return $elf._or((function(){return $elf._applyWithArgs("exactly","g")}),(function(){return $elf._applyWithArgs("exactly","i")}),(function(){return $elf._applyWithArgs("exactly","m")}))});return (function (){r[(1)]=r[(1)].concat(f);return r})()})()}))},"integer":function(){var $elf=this,c;return (function(){c=$elf._many1(function(){return $elf._apply("digit")});return ["number.integer",c]})()},"float":function(){var $elf=this,ws,fs;return (function(){ws=$elf._many(function(){return $elf._apply("digit")});$elf._applyWithArgs("exactly",".");fs=$elf._many(function(){return $elf._apply("digit")});$elf._pred(((ws["length"] + fs["length"]) != (0)));return ["number.float",ws.concat([["punctuation","."]]).concat(fs)]})()},"hex":function(){var $elf=this,c;return (function(){$elf._applyWithArgs("exactly","0");$elf._applyWithArgs("exactly","x");c=$elf._many(function(){return $elf._or((function(){return $elf._apply("digit")}),(function(){return $elf._applyWithArgs("exactly","a")}),(function(){return $elf._applyWithArgs("exactly","b")}),(function(){return $elf._applyWithArgs("exactly","c")}),(function(){return $elf._applyWithArgs("exactly","d")}),(function(){return $elf._applyWithArgs("exactly","e")}),(function(){return $elf._applyWithArgs("exactly","f")}))});return ["number.hex",["0"].concat([["punctuation","x"]]).concat(c)]})()},"number":function(){var $elf=this;return $elf._or((function(){return $elf._apply("float")}),(function(){return $elf._apply("hex")}),(function(){return $elf._apply("integer")}))},"comment":function(){var $elf=this,p,c,b;return $elf._or((function(){return (function(){p=$elf._applyWithArgs("seq","//");c=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("exactly","\n")});return $elf._apply("char")})()});return ["comment.single",[["punctuation",p]].concat(c)]})()}),(function(){return (function(){b=$elf._applyWithArgs("fromTo","/*","*/");return ["comment.multiline",[["punctuation",b[(0)]]].concat(b[(1)]).concat([["punctuation",b[(2)]]])]})()}))},"operator":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("exactly","?")}),(function(){return $elf._applyWithArgs("exactly",":")}),(function(){return $elf._applyWithArgs("seq","!==")}),(function(){return $elf._applyWithArgs("seq","!=")}),(function(){return $elf._applyWithArgs("seq","===")}),(function(){return $elf._applyWithArgs("seq","==")}),(function(){return $elf._applyWithArgs("seq","=")}),(function(){return $elf._applyWithArgs("seq",">=")}),(function(){return $elf._applyWithArgs("exactly",">")}),(function(){return $elf._applyWithArgs("seq","<=")}),(function(){return $elf._applyWithArgs("exactly","<")}),(function(){return $elf._applyWithArgs("seq","++")}),(function(){return $elf._applyWithArgs("seq","+=")}),(function(){return $elf._applyWithArgs("exactly","+")}),(function(){return $elf._applyWithArgs("seq","--")}),(function(){return $elf._applyWithArgs("seq","-=")}),(function(){return $elf._applyWithArgs("exactly","-")}),(function(){return $elf._applyWithArgs("seq","*=")}),(function(){return $elf._applyWithArgs("exactly","*")}),(function(){return $elf._applyWithArgs("seq","/=")}),(function(){return $elf._applyWithArgs("exactly","/")}),(function(){return $elf._applyWithArgs("seq","%=")}),(function(){return $elf._applyWithArgs("exactly","%")}),(function(){return $elf._applyWithArgs("seq","&&=")}),(function(){return $elf._applyWithArgs("seq","&&")}),(function(){return $elf._applyWithArgs("seq","||=")}),(function(){return $elf._applyWithArgs("seq","||")}),(function(){return $elf._applyWithArgs("exactly",".")}),(function(){return $elf._applyWithArgs("exactly","!")}));return ["operator",[c]]})()},"punctuation":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("exactly","(")}),(function(){return $elf._applyWithArgs("exactly",")")}),(function(){return $elf._applyWithArgs("exactly","{")}),(function(){return $elf._applyWithArgs("exactly","}")}),(function(){return $elf._applyWithArgs("exactly","[")}),(function(){return $elf._applyWithArgs("exactly","]")}),(function(){return $elf._applyWithArgs("exactly",",")}),(function(){return $elf._applyWithArgs("exactly",";")}));return ["punctuation",[c]]})()},"nonText":function(){var $elf=this,c;return $elf._or((function(){return (function(){c=$elf._apply("keyword");$elf._not(function(){return $elf._apply("nameRest")});return c})()}),(function(){return $elf._apply("name")}),(function(){return $elf._apply("comment")}),(function(){return $elf._apply("string")}),(function(){return $elf._apply("number")}),(function(){return $elf._apply("operator")}),(function(){return $elf._apply("punctuation")}))},"topLevel":function(){var $elf=this;return $elf._many(function(){return $elf._or((function(){return $elf._apply("nonText")}),(function(){return $elf._apply("char")}))})}});OmetaHighlighterXml=Parser.delegated({"fromTo":function(){var $elf=this,x,y,s,c,e;return (function(){x=$elf._apply("anything");y=$elf._apply("anything");s=$elf._applyWithArgs("seq",x);c=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("seq",y)});return $elf._apply("char")})()});e=$elf._applyWithArgs("seq",y);return [s,c.join(""),e]})()},"nameFirst":function(){var $elf=this;return $elf._or((function(){return $elf._apply("letter")}),(function(){return $elf._applyWithArgs("exactly",":")}),(function(){return $elf._applyWithArgs("exactly","_")}))},"nameRest":function(){var $elf=this;return $elf._or((function(){return $elf._apply("nameFirst")}),(function(){return $elf._apply("digit")}),(function(){return $elf._applyWithArgs("exactly","-")}),(function(){return $elf._applyWithArgs("exactly",".")}))},"name":function(){var $elf=this,r;return (function(){r=$elf._applyWithArgs("firstAndRest","nameFirst","nameRest");return ["name",r.join("")]})()},"quote":function(){var $elf=this,q,c;return (function(){q=$elf._apply("anything");c=$elf._applyWithArgs("seq",q);return ["punctuation",c]})()},"anyString":function(){var $elf=this,q,n,qp,cs;return (function(){q=$elf._apply("anything");n=$elf._apply("anything");qp=$elf._applyWithArgs("quote",q);cs=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("seq",q)});return $elf._apply("char")})()});$elf._applyWithArgs("quote",q);return (function (){cs.unshift(qp);cs.push(qp);return [(("string" + ".") + n),cs]})()})()},"preproc":function(){var $elf=this,c;return (function(){c=$elf._or((function(){return $elf._applyWithArgs("fromTo","<?","?>")}),(function(){return $elf._applyWithArgs("fromTo","<![CDATA[","]]>")}),(function(){return $elf._applyWithArgs("fromTo","<![CDATA[","]]>")}));return ["comment.preproc",[["punctuation",c[(0)]]].concat(c[(1)]).concat([["punctuation",c[(2)]]])]})()},"string":function(){var $elf=this;return $elf._or((function(){return $elf._applyWithArgs("anyString","\'","single")}),(function(){return $elf._applyWithArgs("anyString","\"","double")}))},"attr":function(){var $elf=this,n,s1,p,s2,s;return (function(){n=$elf._apply("name");s1=$elf._apply("spaces");p=$elf._applyWithArgs("exactly","=");s2=$elf._apply("spaces");s=$elf._apply("string");return ["name.attribute",[n[(1)]].concat(s1).concat([["punctuation",p]]).concat(s2).concat([s])]})()},"tag":function(){var $elf=this,p1,s1,n,s2,a,s3,as,as,s4,p2,p1,s1,p2,n,s2,p3;return $elf._or((function(){return (function(){p1=$elf._applyWithArgs("exactly","<");s1=$elf._apply("spaces");n=$elf._apply("name");as=$elf._many(function(){return (function(){s2=$elf._apply("spaces");a=$elf._apply("attr");s3=$elf._apply("spaces");return s2.concat([a]).concat(s3)})()});as=Array["concat"].apply([],as);s4=$elf._apply("spaces");p2=$elf._or((function(){return $elf._applyWithArgs("exactly",">")}),(function(){return $elf._applyWithArgs("seq","/>")}));return ["name.tag",[["punctuation",p1]].concat(s1).concat(n[(1)]).concat(as).concat(s4).concat([["punctuation",p2]])]})()}),(function(){return (function(){p1=$elf._applyWithArgs("exactly","<");s1=$elf._apply("spaces");p2=$elf._applyWithArgs("exactly","/");n=$elf._apply("name");s2=$elf._apply("spaces");p3=$elf._applyWithArgs("exactly",">");return ["name.tag",[["punctuation",(p1 + p2)]].concat(s1).concat(n[(1)]).concat(s2).concat([["punctuation",p3]])]})()}))},"entity":function(){var $elf=this,p1,n,p2;return (function(){p1=$elf._applyWithArgs("exactly","&");n=$elf._apply("name");p2=$elf._applyWithArgs("exactly",";");return ["name.entity",[["punctuation",p1]].concat(n[(1)]).concat([["punctuation",p2]])]})()},"comment":function(){var $elf=this,c;return (function(){c=$elf._applyWithArgs("fromTo","<!--","-->");return ["comment",[["punctuation",c[(0)]]].concat(c[(1)]).concat([["punctuation",c[(2)]]])]})()},"nonText":function(){var $elf=this;return $elf._or((function(){return $elf._apply("comment")}),(function(){return $elf._apply("preproc")}),(function(){return $elf._apply("entity")}),(function(){return $elf._apply("tag")}))},"topLevel":function(){var $elf=this;return $elf._many(function(){return $elf._or((function(){return $elf._apply("nonText")}),(function(){return $elf._apply("char")}))})}});OmetaHighlighter=Parser.delegated({"js":function(){var $elf=this,c;return (function(){c=$elf._many(function(){return $elf._apply("char")});return ["js",OmetaHighlighterJs.matchAll(c.join(""),"topLevel")]})()},"javascript":function(){var $elf=this;return $elf._apply("js")},"xml":function(){var $elf=this,c;return (function(){c=$elf._many(function(){return $elf._apply("char")});return ["xml",OmetaHighlighterXml.matchAll(c.join(""),"topLevel")]})()}})}