(this["webpackJsonpandys-fee-redeemer"]=this["webpackJsonpandys-fee-redeemer"]||[]).push([[0],{213:function(e,t,n){},214:function(e,t){},215:function(e,t){},244:function(e,t){},245:function(e,t){},275:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"frcnt","instructions":[{"name":"initialize","accounts":[{"name":"feecntrAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"count","accounts":[{"name":"feecntrAccount","isMut":true,"isSigner":false},{"name":"instructionSysvarAccount","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"FeeCounter","type":{"kind":"struct","fields":[{"name":"closedAccounts","type":"u64"}]}}],"metadata":{"address":"FrctRs3dZ7E234V5DMJLMUvnPkjANWQoaZDRm9rebjC2"}}')},276:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),o=n.n(a),i=(n(213),n(46)),s=n(5),u=n(327),l=n(328),d=n(329),b=n(319),p=n(320),j=n(330),f=n(324),x=n(123),h=n(195),m=n(321),O=n(99),v=n(121),y=n(61),g=n(40),k=n(96),w=n(9),S=n.n(w),A=n(316),C=n(310),T=n(325),R=n(97),P=n(323),M=n(179),E=n(127),I=.00203928;function K(e,t){return F.apply(this,arguments)}function F(){return(F=Object(y.a)(S.a.mark((function e(t,n){var r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAccountInfo(n);case 2:if((r=e.sent)&&r.data){e.next=6;break}return console.log("Could not get account info for "+n.toBase58()),e.abrupt("return",null);case 6:return c=r.data.readInt32LE(8),e.abrupt("return",{totalCloses:c,totalSolRedeemed:I*c});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return z.apply(this,arguments)}function z(){return(z=Object(y.a)(S.a.mark((function e(t,n){var r,c,a,o,i,u,l,d,b,p;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTokenAccountsByOwner(n,{programId:E.a});case 2:r=e.sent,c=[],a=0,o=Object(v.a)(r.value),e.prev=6,o.s();case 8:if((i=o.n()).done){e.next=29;break}if(u=i.value,l=!1,d=64,!u.account.data.readBigUInt64LE){e.next=17;break}b=u.account.data.readBigUInt64LE(d),l=0n===b,e.next=26;break;case 17:l=!0,p=0;case 19:if(!(p<8)){e.next=26;break}if(0===u.account.data[d+p]){e.next=23;break}return l=!1,e.abrupt("break",26);case 23:p++,e.next=19;break;case 26:l&&(console.log("found empty account: "+u.pubkey.toBase58()),c.push(u.pubkey),a+=u.account.lamports);case 27:e.next=8;break;case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(6),o.e(e.t0);case 34:return e.prev=34,o.f(),e.finish(34);case 37:return e.abrupt("return",{publicKeys:c,size:c.length,amount:a/s.LAMPORTS_PER_SOL});case 38:case"end":return e.stop()}}),e,null,[[6,31,34,37]])})))).apply(this,arguments)}function L(e,t,n,r){return D.apply(this,arguments)}function D(){return(D=Object(y.a)(S.a.mark((function e(t,n,r,c){var a,o,u,l,d,b;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.map((function(e){return E.b.createCloseAccountInstruction(E.a,e,t,t,[])})),o=[];case 2:if(!(a.length>0)){e.next=19;break}u=new s.Transaction,l=0;case 5:if(!(l<16)){e.next=15;break}if(!(d=a.pop())){e.next=11;break}u.add(d),e.next=12;break;case 11:return e.abrupt("break",15);case 12:l++,e.next=5;break;case 15:r&&c&&(b=c.instruction.count({accounts:{feecntrAccount:r,instructionSysvarAccount:i.d.SYSVAR_INSTRUCTIONS_PUBKEY}}),u.add(b)),o.push(u),e.next=2;break;case 19:return e.abrupt("return",o);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B,Y,N,W=n(314),J=n(311),Q=n(14),Z=function(e){var t=e.emptyAccounts,n=e.totalRedemptions,r=t?Math.floor((null===t||void 0===t?void 0:t.size)/16)+1:0;return Object(Q.jsx)(W.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:Object(Q.jsx)(W.a,{container:!0,direction:"row",wrap:"nowrap",children:t&&Object(Q.jsxs)(W.a,{container:!0,direction:"row",wrap:"nowrap",children:[Object(Q.jsxs)(W.a,{container:!0,direction:"column",children:[Object(Q.jsx)(J.a,{variant:"body2",color:"textSecondary",children:"Empty Accounts"}),Object(Q.jsx)(J.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(null===t||void 0===t?void 0:t.size)})]}),Object(Q.jsxs)(W.a,{container:!0,direction:"column",children:[Object(Q.jsx)(J.a,{variant:"body2",color:"textSecondary",children:"You can redeem"}),Object(Q.jsx)(J.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:V(null===t||void 0===t?void 0:t.amount)}),(null===t||void 0===t?void 0:t.size)>0&&Object(Q.jsxs)(J.a,{variant:"body2",color:"textSecondary",children:["in ","".concat(r)," transaction",1!==r&&"s"]})]}),Object(Q.jsxs)(W.a,{container:!0,direction:"column",children:[Object(Q.jsx)(J.a,{variant:"body2",color:"textSecondary",children:"Total Redemmed"}),Object(Q.jsx)(J.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:n&&V(null===n||void 0===n?void 0:n.totalSolRedeemed)})]})]})})})},V=function(e){return"\u25ce ".concat(e.toFixed(3))},_=n(308),H=n(315),X=Object(R.a)(_.a)(B||(B=Object(k.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),q=function(e){var t=e.onClick,n=e.emptyAccounts,c=Object(r.useState)(!1),a=Object(g.a)(c,2),o=a[0],i=a[1];return Object(Q.jsx)(X,{disabled:o||0===(null===n||void 0===n?void 0:n.size),onClick:Object(y.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t();case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),variant:"contained",children:o?Object(Q.jsx)(H.a,{}):0===(null===n||void 0===n?void 0:n.size)?"NO EMPTY ACCOUNTS":"REDEEM"})},G=Object(R.a)(x.a)(Y||(Y=Object(k.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),$=R.a.div(N||(N=Object(k.a)([""]))),ee=function(e){var t=e.connection,c=Object(r.useState)(),a=Object(g.a)(c,2),o=a[0],s=a[1],u=Object(r.useState)(),l=Object(g.a)(u,2),d=l[0],b=l[1],p=Object(r.useState)({open:!1,message:"",severity:void 0}),j=Object(g.a)(p,2),f=j[0],x=j[1],h=Object(M.b)(),m={publicKey:h.publicKey,signAllTransactions:h.signAllTransactions,signTransaction:h.signTransaction},k=new i.b(t,m,{preflightCommitment:"recent"}),w=n(275),R=new i.a(w,e.frcntrProgramId,k),E=function(){Object(y.a)(S.a.mark((function n(){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h&&h.publicKey){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,U(t,h.publicKey);case 4:return r=n.sent,n.next=7,K(t,e.frcntrAccount);case 7:c=n.sent,s(r),c&&b(c);case 10:case"end":return n.stop()}}),n)})))()};Object(r.useEffect)(E,[h,t,e.frcntrAccount]);var I=function(){var n=Object(y.a)(S.a.mark((function n(){var r,c,a,i,s,u,l,d;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(h&&h.publicKey&&o&&o.size>0)){n.next=30;break}return n.next=4,L(h.publicKey,o.publicKeys,e.frcntrAccount,R);case 4:r=n.sent,c=Object(v.a)(r),n.prev=6,c.s();case 8:if((a=c.n()).done){n.next=22;break}return i=a.value,n.next=12,h.sendTransaction(i,t);case 12:return s=n.sent,console.log(s),u=i.instructions.length-1,console.log("Attempting to close "+u+" accounts"),n.next=18,t.confirmTransaction(s,"confirmed");case 18:(l=n.sent).value.err?x({open:!0,message:l.value.err.toString(),severity:"warning"}):x({open:!0,message:"Successfully redeemed some SOL!",severity:"success"});case 20:n.next=8;break;case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(6),c.e(n.t0);case 27:return n.prev=27,c.f(),n.finish(27);case 30:n.next=37;break;case 32:n.prev=32,n.t1=n.catch(0),d=n.t1.msg||"Redeem failed!",console.trace(),x({open:!0,message:d,severity:"error"});case 37:return n.prev=37,E(),n.finish(37);case 40:case"end":return n.stop()}}),n,null,[[0,32,37,40],[6,24,27,30]])})));return function(){return n.apply(this,arguments)}}();return Object(Q.jsxs)(A.a,{style:{marginTop:100},children:[Object(Q.jsx)(A.a,{maxWidth:"xs",style:{position:"relative"},children:Object(Q.jsxs)(C.a,{style:{padding:24,backgroundColor:"#151A1F",borderRadius:6},children:[Object(Q.jsx)("h1",{children:"Solana Fee Redeemer"}),h.connected?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Z,{emptyAccounts:o,totalRedemptions:d}),Object(Q.jsx)($,{children:Object(Q.jsx)(q,{emptyAccounts:o,onClick:I})})]}):Object(Q.jsx)(G,{children:"Connect Wallet"}),Object(Q.jsx)("p",{style:{color:"gray"},children:"developed and maintained by solandy.sol"}),Object(Q.jsxs)("p",{style:{color:"gray"},children:["follow me on ",Object(Q.jsx)("a",{href:"https://twitter.com/HeyAndyS",children:"Twitter"})," and ",Object(Q.jsx)("a",{href:"https://www.youtube.com/channel/UCURIDSvXkuDf9XXe0wYnoRg",children:"YouTube"})]})]})}),Object(Q.jsx)(T.a,{open:f.open,autoHideDuration:6e3,onClose:function(){return x(Object(O.a)(Object(O.a)({},f),{},{open:!1}))},children:Object(Q.jsx)(P.a,{onClose:function(){return x(Object(O.a)(Object(O.a)({},f),{},{open:!1}))},severity:f.severity,children:f.message})})]})},te=Object(h.a)({palette:{type:"dark"}}),ne="mainnet-beta",re="https://api.mainnet-beta.solana.com",ce=new i.d.PublicKey("FrctRs3dZ7E234V5DMJLMUvnPkjANWQoaZDRm9rebjC2"),ae=new i.d.PublicKey("CntZ1JuK1kT2VA5QPkQiwU6aYiaPthP9oKeRQ76jYTCb"),oe=new i.d.Connection(re),ie=function(){var e=Object(r.useMemo)((function(){return Object(s.clusterApiUrl)(ne)}),[]),t=Object(r.useMemo)((function(){return[Object(u.a)(),Object(l.a)(),Object(d.a)(),Object(b.a)({network:ne}),Object(p.a)({network:ne})]}),[]);return Object(Q.jsx)(m.a,{theme:te,children:Object(Q.jsx)(j.a,{endpoint:e,children:Object(Q.jsx)(f.a,{wallets:t,autoConnect:!0,children:Object(Q.jsx)(x.b,{children:Object(Q.jsx)(ee,{connection:oe,rpcHost:re,frcntrProgramId:ce,frcntrAccount:ae})})})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,331)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(276);o.a.render(Object(Q.jsx)(c.a.StrictMode,{children:Object(Q.jsx)(ie,{})}),document.getElementById("root")),se()}},[[277,1,2]]]);
//# sourceMappingURL=main.97ace97c.chunk.js.map