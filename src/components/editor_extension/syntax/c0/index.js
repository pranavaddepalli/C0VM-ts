import { LRParser } from '@lezer/lr';
import { LRLanguage, foldNodeProp, foldInside, indentNodeProp, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,requires:30, true:198, false:198, NULL:54, ensures:116, struct:128, alloc:134, alloc_array:138, return:142, assert:148, if:152, else:156, while:160, loop_invariant:166, for:170};
const parser = LRParser.deserialize({
  version: 14,
  states: "<nQ]QPOOObQQO'#C`OOQO'#EX'#EXQ]QPOOOgQPO,58zOOQO-E8V-E8VOlQPO1G.fOtQQO'#CeOyQPO'#CdO!RQPO7+$QOOQO,59P,59PO!WQPO'#EYO!]QPO,59OO!eQPO<<GlOOQO,5:t,5:tOOQO-E8W-E8WO!sQQO'#ChO!sQQO'#ChOOQO'#EZ'#EZO!{QPOAN=WO$eQQO'#DiOOQOAN=WAN=WOOQOAN?OAN?OOOQO'#Cj'#CjO$lQQO,59SOOQO'#Dg'#DgO$lQQO,5:QO$lQQO,59SO$lQQO,5:QOOQO-E8X-E8XOOQOG22rG22rOOQOG24jG24jOOQO'#Ct'#CtOOQO'#Cv'#CvOOQO'#Cq'#CqO'QQSO'#ClO$lQQO'#CqO)UQSO'#CqO*yQSO'#DkO$lQQO'#CqO+QQQO'#ClOOQO'#Dm'#DmO+YQQO'#DlOOQO'#Dt'#DtO+_QQO'#DvO+_QQO'#DvOOQO'#Dy'#DyOOQO'#D{'#D{OOQO'#D}'#D}OOQO'#ES'#ESO+dQQO'#DkO$lQQO'#DkOOQO'#Dk'#DkO+lQPO'#DkO+qQQO'#DkO+yQPO'#DkO,OQPO'#DkOOQO'#E]'#E]O,TQQO,5:TOOQO,5:T,5:TO,[QSO'#ClO,rQSO1G.nO,yQSO1G.nO-QQSO1G/lO-XQSO1G/lO-`QSO1G.nO-gQSO1G.nO-nQSO1G/lO-uQSO1G/lO-|QQO,59]OOQO'#E^'#E^O.TQQO,5:WO.cQSO,59]O.jQSO,59]O$lQQO,59]OOQO,59],59]O$lQQO'#CoO.qQQO,59WOOQO,59W,59WO.vQQO,5:VOOQO,5:V,5:VO/QQSO,59]OOQO'#Cl'#ClO.TQQO,5:WOOQO'#Dw'#DwO$lQQO,5:bO$lQQO,5:bO1QQPO,5:VO1]QPO,5:VO1kQSO,5:VO1rQSO,5:VO$lQQO,5:VO1yQPO,5:VO$lQQO,5:VO2OQQO,5:VOOQO-E8Z-E8ZOOQO1G/o1G/oOOQO7+$Y7+$YOOQO7+%W7+%WO2ZQPO7+$YO2`QPO7+%WO2eQSO'#CxO2oQSO'#CxO2yQPO1G.wOOQO-E8[-E8[OOQO1G.w1G.wO3OQSO1G.wO5OQSO,59ZO5VQSO,59ZOOQO1G.r1G.rO5^QSO1G/qO5eQSO1G/qOOQO'#Dp'#DpOOQO'#Dr'#DrO5lQPO1G/qO5qQPO1G/qO5vQQO1G/rO6UQSO1G/|O6]QSO1G/|O6dQSO1G/|O6kQSO1G/|O.vQQO1G/qOOQO1G/q1G/qO6rQSO1G/qO6yQSO1G/qO$lQQO1G/qO7QQSO1G/qO7XQSO1G/qO7`QPO'#EUO7kQQO'#ClO+QQQO'#EUO8PQPO1G/qOOQO<<Gt<<GtOOQO<<Hr<<HrO$lQQO'#E[O8UQPO,59dOOQO7+$c7+$cOOQO1G.u1G.uOOQO7+%]7+%]O8^QPO7+%]O8cQPO7+%]OOQO7+%h7+%hO8hQPO7+%hO8mQSO7+%]O8tQSO7+%]O8{QPO7+%]O9QQPO7+%]O!nQPO7+%]O9VQSO7+%]O9^QSO7+%]O9eQPO7+%]O$lQQO,5:pO9pQPO,5:pO$lQQO7+%]O9{QSO,5:vO:VQSO,5:vOOQO-E8Y-E8YO:aQPO<<HwO$lQQO<<HwOOQO<<IS<<ISOOQO<<Hw<<HwO:fQPO<<HwO:kQPO<<HwO!nQPO<<HwO:pQQO'#EPO:pQQO'#EPOOQO'#E_'#E_O9eQPO<<HwO:uQSO1G0[O:|QSO1G0[O$lQQO1G0[O;TQSO<<HwO;[QSO<<HwO;cQPOAN>cO;hQSOAN>cO;oQSOAN>cO;vQPOAN>cO$lQQOAN>cOOQOAN>cAN>cOOQO'#EQ'#EQO$lQQO,5:kO$lQQO,5:kOOQO-E8]-E8]O;{QSO7+%vO<SQSO7+%vO$lQQOAN>cOOQOG23}G23}O<ZQPOG23}O<`QSOG23}O<gQSOG23}O<nQSO1G0VO<uQSO1G0VO<|QSO1G0VO=TQSO1G0VO=[QSOG23}O=cQSOG23}OOQOLD)iLD)iO=jQPOLD)iOOQO7+%q7+%qO=oQPO7+%qO$lQQOLD)iO9eQPOLD)iOOQO!$'MT!$'MTOOQO<<I]<<I]O=tQSO!$'MTO={QSO!$'MTO9eQPO!$'MTO9eQPO!)9BoOOQO!)9Bo!)9BoO9eQPO!.K8ZOOQO!.K8Z!.K8ZOOQO!4/-u!4/-u",
  stateData: ">V~O#UOSPOSQOS~OTPO~OUSO~OVUO~OTVOZWP~OUYO~OYZOZWX~OZ]O~OTVO~OYZOZWa~O]`O!WfO!XaO!^dO~O_gO![iO~O]`O!WoO!XaO!^dO~OUsOVtO]|OaxOfrOgrOirOkqOxwO|wO!X}O!byO!i{O!n!OO!p!PO!r!QO!w!RO#VpO~O!y!]O~P#ZOU!^OVtOaxOfrOgrOirOkqOxwO|wO#VpO~OV!gOb`Xm`Xn`Xo`Xp`Xq`Xr`Xs`Xt`Xu`Xv`Xw`Xy`Xz`X{`X}`X!O`X!P`X!Q`X!R`X!S`X!T`X!U`X!c`X#W`X~Oa!hOd!hO!V!hOU!`X~P%^Oa!lOb!oOd!nOm!lOn!lOo!lOp!lOq!mOr!mOs!lOt!lOu!lOv!lOw!lOy!lOz!lO{!lO}!lO!O!lO!P!lO!Q!lO!R!lO!S!lO!T!lO!U!lO#W!lO~O!c!qO~P'bOa!lOm!lOn!lOo!lOp!lOq!mOr!mOs!lOt!lOu!lOv!lOw!lOy!lOz!lO{!lO}!lO!O!lO!P!lO!Q!lO!R!lO!S!lO!T!lO!U!lO#W!lO~O!W!rO~P)]OU!tOaxO~OU!uO~O!l!vO~OU!zOaxO~OV!}O~O!^dO!n!OO~OV#PO~OV#QO~O!y#SO~P#ZOa`Xd`X!W`XZ`XY`X!V`X~P%^O!W#TO~P'bO!W#TO~P)]O!W#UO~P'bO!W#UO~P)]O!W#VO~P'bO!W#VO~P)]O!W#WO~P'bO!W#WO~P)]OZlP~P$lOa!hOd!hO!V!hOU!`a~OZ#]O~P'bOZ#]O~P)]OU#aO~O!e#dO!g#eO~P$lOb!oOd!nOaeameaneaoeapeaqeareaseateaueaveaweayeazea{ea}ea!Oea!Pea!Qea!Rea!Sea!Tea!Uea!Wea#WeaZeaYea!Vea~Ob!oOd!nO!c#mO~O!W#nOb`Xd`X!c`X~O!W#nO~P'bO!W#nO~P)]OV#qO~OU#uOaxO!byO~O!X#xO~O!X#yO~OY#zOZlX~P'bOY#zOZlX~P)]OZ#|O~Ob!oOd!nOaeimeineioeipeiqeireiseiteiueiveiweiyeizei{ei}ei!Oei!Pei!Qei!Rei!Sei!Tei!Uei!Wei#WeiZeiYei!Vei~O!V#}O~P'bO!V#}O~P)]O!W$OO~P'bO!W$OO~P)]OV$PO~OV$QO~Oa!hOd!hO!V!hOU!`i~O!W$RO~P'bO!W$RO~P)]O!W$SO~P'bO!W$SO~P)]OZ$XO~P'bOZ$XO~P)]OZ$[O~P'bOZ$[O~P)]Ob!oOd!nO!c$]O~Oa!hOd!hO!V!hOU!`Xb`X!c`X~O!W$_O~OY#zOZla~OT$cO~OT$dO~O!X$eO~O!W$fO~P'bO!W$fO~P)]OV$gO~OV$hO~OZ$iO~P'bOZ$iO~P)]O]$jO!X$kO!^dO~Ob!oOd!nO!c$pO~OY#OaZ#Oa~P'bOY#OaZ#Oa~P)]OZ$sO~OT$vO~OT$wO~O!u$yO~O!W!xi~P'bO!W!xi~P)]O!W%PO~P'bO!W%PO~P)]O!W%QO~OZ%RO~P'bOZ%RO~P)]OZ%RO~O!W!xq~P'bO!W!xq~P)]O!W%[O~OZ%]O~P'bOZ%]O~P)]O!W%^O~P'bO!W%^O~P)]O!W%_O~P'bO!W%_O~P)]O!c%`O~P'bOZ%aO~P)]O!W%bO~O!X%cO~OZ%gO~P'bOZ%gO~P)]O!Xm~",
  goto: ",p#SPPPP#TPPP#X#[PP#bP#fP#lPP%qP&dPP(]P(]P(|PPPPPPPPPPPPPPPPPPPPPPPPPPP#b)PP)VP)t)x*PPP*UP*[P*bP*f*jP*pP*wP*{P+P+XP+_P+cP#T+f+l+r+x,P,V,bTQORRXUQWUR^ZTb]cQh`RkaSud![Q!_hQ!ajQ!ckQ!elQ!jtQ!pxQ!swQ!y!SQ!{!TQ#X!gQ#^!lQ#_!nQ#b!qQ#i!wQ#k!xQ#o!}Q#r#PQ#t#QQ$T#mQ$Y#qQ$^#vQ$`#zQ$n$]Q$q$_Q$t$dQ$}$pQ%S$wQ%U$zQ%W${Q%Y%PR%d%`!a!pu!_!a!c!e!j!s!y!{#X#^#_#b#i#k#o#r#t$T$Y$^$`$n$q$t$}%S%U%W%Y%dSvd![Q!`hQ!bjQ!dkQ!flQ!ktQ!mwQ!|!TQ#Y!gQ#]!lQ#`!nQ#c!qQ#j!wQ#l!xQ#p!}Q#s#PQ$U#mQ$Z#qQ$a#zQ$o$]Q$r$_Q$u$dQ%O$pQ%T$wQ%V$zQ%X${Q%Z%PR%e%`!]rdhjkltw!T![!g!l!n!q!w!x!}#P#m#q#z$]$_$d$p$w$z${%P%`R#Z!gQj`RlaQe]QncQ!r!WS$f$X$[S$x$i$mQ%b%aQ%h%fQ%j%gR%k%iT!Zd![S!Sd![R#v#QVzd![#QQ#f!qR$V#mQ#g!qR$W#mT!Td![T!Ud![Q!w|R!x}S!Vd![R#O!WT!Wd![T!Xd![]$l$[$m%a%f%g%iQ$z$jR${$kT!Yd![R#w#QQRORTRQ[WR_[Qc]RmcS#{#X#YR$b#{Q![dR#R![S!is#uS#[!i#hR#h!uQ$m$[U$|$m%f%iQ%f%aR%i%g",
  nodeNames: "⚠ Comment CommentBlock Program Function Type Identifier ( CommaSep Parameter , ) Contract ContractLine Keyword requires LeftValue * -> ArrayIndex [ RightValue String Number Boolean Char Keyword NULL CommaSep / % + - ++ -- += -= *= /= %= ~ | << >> ! && || == != <= >= < > ] ; ContractBlock Contract Keyword ensures Scope { Expression DeclareType Keyword struct = Keyword alloc Keyword alloc_array Keyword return Contract Keyword assert Keyword if Keyword else Keyword while Contract Keyword loop_invariant Keyword for ForInit } FuncDeclaration",
  maxTerm: 100,
  skippedNodes: [0,1,2],
  repeatNodeCount: 7,
  tokenData: "3h~RrXY#]YZ#]]^#]pq#]qr#nrs#{uv$gvw$twx%Rxy&Oyz&Tz{&Y{|&g|}&|}!O'R!P!Q'p!Q!R*Q!R![*w!]!^+P!^!_+U!_!`+k!`!a+x!b!c,_!c!},k!}#O-g#P#Q-l#R#S,k#T#g,k#g#h-q#h#o,k#o#p2z#p#q3P#q#r3^#r#s3c~#bS#U~XY#]YZ#]]^#]pq#]U#sP|Q!_!`#vS#{O!QS~$ORPr#{rs$Xs~#{~$^Rf~Pr#{rs$Xs~#{~$lPn~!_!`$o~$tOw~~$yP#W~vw$|~%RO}~~%URP#O%_#O#P%j#P~%_~%bPwx%e~%jOi~~%mRPw%_wx%vx~%_~%{Pi~wx%e~&TOV~~&YOZ~~&_Pa~!_!`&b~&gOu~~&lQo~{|&r!_!`&w~&wOq~~&|Os~~'ROY~~'WRp~}!O'a!_!`'f!`!a'k~'fOr~~'kOt~~'pOb~~'uRmSz{(O!P!Q)_!_!`){~(RRO!b([!b!c)Y!c~([~(_RPz([z{(h{~([~(kTPz([z{(h{!P([!P!Q(z!Q~([~)PRQ~Pz([z{(h{~([R)_O!XR~)bRO!b)k!b!c)v!c~)k~)pQP~OY)kZ~)k~){O]~~*QOv~~*VQg~!z!{*]#l#m*]~*`R!Q![*i!c!i*i#T#Z*i~*nRg~!Q![*i!c!i*i#T#Z*i~*|Pg~!Q![*w~+UO!W~~+ZQ!T~!^!_+a!_!`+f~+fOz~~+kO!R~~+pP!c~!_!`+s~+xO!P~~+}Q!U~!_!`,T!`!a,Y~,YO!S~~,_O{~R,bPz{,eR,hP!P!Q)YV,rVUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#o,kP-^RTPz{-X!}#O-X#P#Q-X~-lOd~~-qO!V~V-xXUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#h,k#h#i.e#i#o,kV.lXUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#f,k#f#g/X#g#o,kV/`XUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#i,k#i#j/{#j#o,kV0SXUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#V,k#V#W0o#W#o,kV0vXUUTPz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#h,k#h#i1c#i#o,kV1jWUUTPpq2Sz{-X!Q![,k!c!},k!}#O-X#P#Q-X#R#S,k#T#o,kP2VR!c!}2`#R#S2`#T#o2`P2eVTPz{-X!Q![2`!c!}2`!}#O-X#P#Q-X#R#S2`#T#o2`~3PO!^~~3UPy~#p#q3X~3^O!O~~3cO!y~~3hOx~",
  tokenizers: [0, 1, 2],
  topRules: {"Program":[0,3]},
  specialized: [{term: 6, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 1338
});

const C0Language = LRLanguage.define({
    parser: parser.configure({
        props: [
            foldNodeProp.add({
                Scope: foldInside
            }),
            indentNodeProp.add({
                Scope: context => context.baseIndent + context.unit
            }),
            styleTags({
                Identifier: tags.variableName,
                Type: tags.typeName,
                DeclareType: tags.typeName,
                Boolean: tags.bool,
                String: tags.string,
                Number: tags.number,
                Char: tags.character,
                LineComment: tags.comment,
                BlockComment: tags.comment,
                "return": tags.controlKeyword,
                "if": tags.controlKeyword,
                "else": tags.controlKeyword,
                "while": tags.controlKeyword,
                "for": tags.controlKeyword,
                "alloc": tags.keyword,
                "alloc_array": tags.keyword,
                "#use": tags.keyword,
                "assert": tags.keyword,
                "loop_invariant": tags.keyword,
                "requires": tags.keyword,
                "ensures": tags.keyword,
                ContractBlock: tags.annotation,
                ContractLine: tags.annotation,
                "(": tags.paren,
                ")": tags.paren,
                "[": tags.paren,
                "]": tags.paren,
                // "+": t.arithmeticOperator,
                // "-": t.arithmeticOperator,
                // "*": t.arithmeticOperator,
                // "/": t.arithmeticOperator,
                // "%": t.arithmeticOperator,
                // "+=": t.arithmeticOperator,
                // "-=": t.arithmeticOperator,
                // "*=": t.arithmeticOperator,
                // "/=": t.arithmeticOperator,
                // "%=": t.arithmeticOperator,
                // "++": t.arithmeticOperator,
                // "--": t.arithmeticOperator,
                // "~": t.bitwiseOperator,
                // "^": t.bitwiseOperator,
                // "|": t.bitwiseOperator,
                // "&": t.bitwiseOperator,
                // "<<":t.bitwiseOperator,
                // ">>":t.bitwiseOperator,
                // "!": t.logicOperator,
                // "&&": t.logicOperator,
                // "||": t.logicOperator,
                // "==": t.logicOperator,
                // "!=": t.logicOperator,
                ">=": tags.compareOperator,
                "<=": tags.compareOperator,
                ">": tags.compareOperator,
                "<": tags.compareOperator,
                "->": tags.derefOperator,
            }),
        ]
    })
});
function C0() {
    return new LanguageSupport(C0Language);
}

export { C0, C0Language };