(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{31:function(e,n,a){},32:function(e,n,a){},36:function(e,n,a){},38:function(e,n,a){"use strict";a.r(n);var t=a(4),s=(a(3),a(18)),b=a(24),c=a(9),j=(a(31),a(19)),l=function(e){var n=e.menuItems;return Object(t.jsx)("ul",{className:"menu",children:n?n.menus.edges[0].node.menuItems.edges.map((function(e,n){return Object(t.jsx)("li",{className:"menu__element",children:Object(t.jsx)("a",{className:"menu__element__link",href:e.node.path,children:e.node.label})},n)})):null})},i=(a(32),a(39)),R=a(13);function N(){var e=Object(j.a)(["\n  query MyQuery {\n    menus {\n      edges {\n        node {\n          menuItems {\n            edges {\n              node {\n                label\n                path\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return N=function(){return e},e}var u=a.n(R)()(N()),d=function(){var e=Object(i.a)(u),n=e.error,a=e.data;return n?Object(t.jsx)("p",{children:"Error :("}):Object(t.jsx)("section",{className:"header",children:a?Object(t.jsxs)("div",{className:"header__content",children:[Object(t.jsx)("a",{href:"/",children:Object(t.jsx)("img",{className:"header__logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAlCAYAAACTSM11AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJCOERBN0E3M0I0ODExRTU5OUI5QURERUY2QzNBOTc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJCOERBN0E4M0I0ODExRTU5OUI5QURERUY2QzNBOTc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkI4REE3QTUzQjQ4MTFFNTk5QjlBRERFRjZDM0E5NzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkI4REE3QTYzQjQ4MTFFNTk5QjlBRERFRjZDM0E5NzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FlfhAAAATKUlEQVR42nRcK3Nk17XeX1+DgAAFOsRtkKqwkX+BWjAOkFQVLgmlgkZC9140M79AGhgkCSWpiss9LMwtlqBpsxi5zWLiajOb9Mp67b3X2ueMypa6z2M/1vNbjz0golJ/fvj15/ybv8P+FFABysq++A+o/5Xn+B5Kurbl73vycWB/dQyAbFh9jvpcfs++6xPbsjjI93Oe/4z/rvj6EXwOgs65519rvvfE1zbpfb1f10pX/PeExznmN4/R39/xTZ6H3vEzMs6+rQu+90JH/OnYP9e5d/zcUt8Fr6GUo4LDMb+yqXsxuvleS52PfxaVjn3/QKBpoCMCrXWMkfaVHfHa3/m9CUNlML5Eygwlwvv+UlhwW1hcoH7+FV/bdwaTbPZ9Y2hl8izx5e+hKKPAzKwMLJ2gfT7ZzMFkzxh6IQS2Z5V4N/zOK2qCcEgEpLQHEQ56w/fuSzl0QSzMuEV56UKxF+HheUQQHvj7NX9/5L93/PgNLeiU39l0mlTGyHh8x9dahYO6sA/0i/uj/L0KVR0+zKXC88WBlzv+UHGS6MMvMd4sXYEpCJWPvIYzE6UJ+mUhm5hK32t/q+l3H53KeSV2eweIe2tvkW2aLUD5SqgkQsif3/PlO9UeaubGnteF83NynaplKML0O37swVbUtrXjZ25VG6k88b3XfH3puz8z4SgrCvJIQfD7uskNT10KOkuInApoVADKaPVKInV9GpGOdncx5ZeTmIywaZEUiJLGazM+EUVW6K1zXSFNOBmWMbLW5iIlfH01TIoweSUksTVhbRHGOlNLpSeVPr9+7/Rse/G/VzzrucqfPofGkG6G9fqWv6z4ORaYwmacza3MSU5qKrNMKHXcppDCPBs/WsrEj0FziIK4DfSbMjRynBlB5kOaVeimBGWqueKD1KdF6yGEXUYFa6ymZg7SpHHE7ofyXLp5cs74WmyNuOFPR1RnIeMUum+ekCEO7l7trmsyTQWxlBd8jf0uWyLos2sf5ygvFN2sBz9Jvm9C0+FhIRimRVKmJMdVedG4nhnadMs+nDXpHExunZGiphSsySd3/ys/l9XOUF5y09DAjahFAjAu+OstBuvhziWAN5rhja5kx+u45g+3dVEYnQb1630r7DcZQKFpd9cuX+KRm+m1+taCZxawZ77ySbRMaAJVtSqYhdG8JCAUSRrogq4O3eVU5egvTX1oN87noDDSICXkv6j7iSdk7dQxaBDxholp9NvNHz7y71NBnjzqfQdLmMrVRH+rpGLL83zGdx75yz0FnmBAk+2t5I9M22hWm7FkBrHJLc/+0sblYxm821SAiab8nNXQCpiQ5ZgqUApiiyCkvoGPRsPpj5yLJHaNRxswCkRDn8TgAdhQlH/xnSztcBAgwtHxQNaVRjwhFA7XYYPnieOg5LeRnUx9dM9ieiEm0V9ZATO+CYjaPOzLsQiasN425F5U67e+BEa28hl7C30Q0GrAEnpZvh86sEMZ1x0VLTzXaW98ODi90LxIFNKPJn7Yrp+hPk00jZPqZItubhvDG3PKGVUbIMxcZMuJYL2bedNQAPyKSTRv8KxjVOrGG52lKBHGq9+6hQpYm++sNDM1RexJlOnQhC9ZRdA2fN50xEobsyoSm1b/3plFKabv+kuVsZN1mHnu8XpylIodGn8HUzhvck132UfgKk82QLbK60bm8rZJCjVqn6M6oeaMjFiIlhwVIJQ3fHcbvPaRIs7gWKM/g4Mj8tjBpXSnZnYAd9EVTXFOFNwm69ucSMl2IbpDwzsZRXdr3pFt1RTyeYg+5E9pGkFQpHl0i+gRAM0w1BdzXt/qbpeCRkTB1etbjdeq8apjMNqM/O0ykYGWmw42WbinDIBsjBoz+vqQwXby2SIUEdnC9rIsYd0NU+WgsRPbfOK+I069/5rn+baIoFPCYVM9o6gEVaOmQC6b3CiU85obE0ydgjRxx4uZtMFlz87UaZAgR/wODbgpxEr63lmNqyaLjE6zNLQs4GWfmUNnPTh3EzxqV4hRSZmAx8p19+5nJUfFPcYumGASJ+lT12YdRcDOS/6w5AuSIfrWryXGjdaPMMfyoGIxgRMibZQBWfdMSoZ9iZ09uB7DliUvdkUD5EgQesqbdcovGjGGZEIISYhSBOKZg6eYxvLMzbmSM4kgynzcjBpGVJ23MahcUQoLaELE9o1a7LqGgy9HlA8yVjC8u2qRIgbGYAbh66BwJW5jAoBizDqIYAoLMIwziM2ooefxKcR4KhGwcdPNLbLvNGKGUCFC7Ryj8QUBFFslKDVCX00sD2hG+qP9KO+QUhfsfyPRaEwxDmQzDV1bzrb5pteSERoSD7dtfhq1J4KpLj5zIGwS3IzWB5iEkkA2s6AYZc6n/k5y3OgsRQ/WYhDOl54opSz04xnNLTyAhWQqQE9d+JopvJxGasnMj9ZMNGZNKcGJk4k2A8HiI1crjKDvgiaJdr/KFgn3ghlAmFrbDACSLZgsYwQW0fxTou+QIQuCSWPoPZ/6O0KFPtRLNjFAppAcEM3ycY48xccIuVyBcoAZHfhkL4THQSDZV+E4A4wsIGPAQW72QSGg85TjYNW6ZCOECTVIt5ysTHsjiXpEUIiy489vajiStNxNwZD5a8JHJTtVmkvWBiGhMVal+VwEYZrFW0xdN7UdA5QXgpyxE5BAUuUo+NYHPJfNWSGDBs1Ettz2RWqKuwE+XeUs2dRQIsEI/f9pYliSz0GZMIJCGqW5AUnl0XutvFST3t63ZAUSIg2on6Z+PhuMCHwopzJTMQlOq/BMTSQgay8aQ2g+UxT3qvEh5bhIJ0rZGgFRrAkWeEsMeNYks6tAqnDkYhbHrx5IlxoPqLmt8eVMDouD8uxe1I9vU4bGYz2kslAQgyG70gAoyitPToxh+LXNMYQKZaaCM65aEzDICYKQz6aJec1YAXGgrF+BF5gHReKL4IEatdgvSCFoPkKyWqEgwZYIIKKM1CMLuiNepwRzgVVncjNDEwyawRf82hPNV2qfp6tFDvoD/oxmUZMf3aGJS3icWoYIqj6YtQgFhF6rQ4xHaTavkLPCURCIWmYtWr15kwuPKWtlf+LGUE1tDj0FHba8K0Iqb5IHj0yRdOF+kOiXU2LNBp4Rmq1TPak7s0fgA0E6pgl6zBQQ2Eo88iqua0mQAiTsWBADvqGcwaAhDk3YFzMOvpaiacJktHueacKUQmMcuin2f5nkPzEQuZsx0bKdoNsP5RByRrBp7ruUtjEMfp7RRSgRzQBDyaVK2FPmf3a86euc6B49XLZhIT8qgnbL2nDdsmaombFc4yEfI1ageomRJqY45VUG6xHNJwIyT4pO80DvQ3Go/H/Bv7ZllDyaVoN5m1IDfeOVmfOJ0Ytp85SyYoKR5FxTgCPdAkfTnMuYEutmUS1Ka+Aqk7wmzFxeaKyMOY2POFbdzN7MK33GX+9jGStmcIAM+MjxBgZNK6m8NS1MU6pSVIRfXvPV13zvdYh1l+LOJjiZJsXTWVAkm/qMtB0D1nHn9UEefGddfeXZ/B92bnzk/mkAj50MoVoT2LdPcZeZGNG2U1ScX0HNYqjcZ6nemm9F0K5JBLf2/495vBXffqH53U4d0fDvrMHLrRNC7LAIBF+MlU5rISEa4woKef3cr4MReIacnI+85b9f6npafElfyvqZf58VL2CU2nw21GxnUa7nkR8VEAzFiG5aSuzaO277RA6BMJhct13bkFiogrbTFsnIu1gEqQ1dNGSs6hghVsbgUv1Hit7b0kh4cM1GbsiiEroDKww9tJomgXqGiBwoYuiHKv1eK2iQt3H6X8QyYq8y7Cj0LTWULqlRjYNF+KgVt3uSv0wZ+sOvP/dyFZbUWzXXtZiLwW63QEIayaASNN/PF2CkT77nkX9VaNhUfT7lMnvfh9VVrR0yVhaTTtQuihjzRUFadPSKIV+OLmwu+RSy2eE7DZbCC9c0NgIga2IqYlNXitiXa3KLlTKV6DnghXue/z7R8gPNYB85M6UsdEdSrkJiB8dlPFDBbfaKaNppfUOZaYoHFg4WBlzOi30cKjDiN+94rCUUZbtVWEhNli55AJl7a2HR4YbfPfGRBIjdukm269rxIN0FsvqDhEB3/N5bfRYkLanii956RuzSY+23yAUGocWlK6ckEuTdrzW1yONJk7WkPC3JYG2urC3vYODwzrNmghEuAuY7LhrjliN3SU/eHiOTyDpf8YNHjn+PnFpi/tmP0onhD1xQzTODVjI36T70h5lPLwQvLH74+PfnbEoeSm05GfqS+O+NLzQhMJemZYkJ/aSJCOYgZoDxNEA02dA7TYITLsMapFthxY9sHXR9ZT69XMCAjvj2L0F6T56RStFNqERKG82KrENenvmaFyyEePD+n7dkifeXAZQ+mBAUAXqn7gZu3Az3dQpjtatDn5Ox7siE58lrqUKTlfdTyOf3ZHHxqWd97mrPFX9/bwJAgkFueT5xX+wnIUKxMYHifcBaU6WCBM3OlR1/PvW1voqg6K71AqGkdocQQdxYVqe3dvjPqxijpCxQAgoVhQpxadvNtfqYDWvz0n3QNoRIzAxs3Cfe8bPSd/sprH9HnpYkCD9zsHIWM4M3vUFvA3nhAG+bS13EGikN0y0arI3hV17lua7giJ/40fexNTBCrkWC7ltIxITl6xAh0+TisRbWba8sSKos0rZyr62eBsh2ZCXCB5/rulQcYdZvY2ZX7tGlk3CjNVkTHvl8ixxRPtewZRn7bLWtg2gad4pGZLQqab8roiFljsF3ZS93azFb75OtjVw++7M/x2NLt4K2R8qVK/flO4q4qPuepRKr2KZceFb6Tmt9qXNoQkNmXnmw8uyu8KU3e4UWFjZ3ynDaekF65TbqObhR1h4RvJazPrMwSZmjpUSSOaDW471chwlD7ep4CgK38qTNMzoWWDkzLVcuZpbwtmIzN9kqBCkOTYXkuQyPEixFQg+5bb9mT6a5Th9gDW9KpjJqbjkx34CNz7Hy2uI2dMFvY5Bt1RR4LdaYJdre/RIag10olDmoOVk9BIVWoPdzPNuSu+nY92EbyHIS/JsR20Z/roX5YqbR98H+1qT7E7/PZhyn0rNk/twsTbAfJzCCbiw7JQBVtbKOf+IGdBOU5kRruGSW6CM3V8vkBgMyo1702AROCQhZzSdoenordM/JZNe9jJbiEdMwJqaeKKv+097b5MRRDSd0bnnnjQOtk9SdZyavVNPpaFU6MUKZTds7ReN3vgzp/F+2vljSMyvSVP3ccuML8cEae+98q9VPOm3Evx4MpNQ4QIEXveMPaw+vZF47NrFQOngPMMQEq883q6CLqMmETch+yZhHesKPtFwp2GMb2zjX7iO7plKvfjrA2VSzwxdYAulVbmLo/aI1JkRPiQiRT3vpiXIm2pguSJd9D8SfL+0Yhr637xuSprFWJvvSYmS8ru2mbp7uzDsfVu4GLh10eearaZKCMTLCvdb0pWnqlfo8YmItNLGi6UWgxRpytPAxhNzSELBvCQ45aWfScOaMfrRIQfwoSRboE16vZNROzXQKulUcIkmPEwE+2jAHyRRpo7lbRd6HKZ0Iyg3p/gVZs5UxgZB7d+UPePs///vL33zjYOAXPfuR4saNps8WfB/l//jGX3hRv/DQIgTlJZ22ctgj4OHCTqRRPwAUe3Dsv3/xr+953J/589+KpAFBfy7VN2nel35kwv5RtWahfudNKGc983g/8z1+Rs57Qu7JWN9J8du1+nv+/VdFoRYzfs2E/8592j+UWPbMz/z/N3ztJ7JzoH/y9wW4/cjXhJA75+in/PtvUuj3fUjYJO9/r/27hf4tGs53mHb0W0XaKH/iNf+H3/kPM+1r8//4ie/9v6xB1tzXpBaLxyo/isDxtX/6GLKun9wXf8PC9x0Lwr/KF/RPPR/6w8efXxU789hzlZZY3utiyQ/txsO5VPJ5zdwSYMltHB6bWQ0HcnMnBMP0hRBOtUQE5MEP+n5acIjnTEs8F9ot/CE3JNd7NYuFmiYr4YwpDYdnpReZJEGyNtSra5IzrW8gfUXo5zNpHGc4uzk57xlyzdMDznG94xFCmvZvpnAvZKjqvXjgl5kqMdGDbi6WmGKaL3YgDCewfdC9NV3TPWq+tiLR0Bo6nN7+qqhvEuh+eGHWQg/vbtKJ73ZguI8XCV38pLR9P4RuBwonxnt+djhse65mfHFgLaCnYgkESSicUjyQjHxaHe1gVxhzYAjKcFp9wuDhUC+G4ujMgeDxIHD7+eIwnOD++Hdsj3HjWZWjOYb2JviknVue5K0fMNrXvt6uIZmp/bqOs/QT0ioQrH3rWh2xuQ75NHMkSMuxHnK7CsYj74f2fD9hR8OYjCNwOPJ3t8XSnl1wG/EOIRfbrU48NthPWtd76JqY/6mCpKGlzGl1GYQjnnArfU2y0b8fZo7k9wlXFj6UF/pvDWAY2Cougq42dqR9WBDCYaZRW+akL/+7COn4PuED44T3qF3r76R/wyCYYuTj/71BM5hpKsOammU4DGYvCFa8Hve6oEGoBxMdXVi9t8jXyvDPIiCY3xaXs4b+V4ABAOvJD23LrOE1AAAAAElFTkSuQmCC",alt:"ym"})}),Object(t.jsx)(l,{menuItems:a})]}):null})},r=(a(36),function(){return Object(t.jsxs)("section",{className:"banner",children:[Object(t.jsx)("h1",{className:"banner__quote",children:"DO G\u0141OWY POMYS\u0141Y WPADAJ\u0104 OD WEWN\u0104TRZ"}),Object(t.jsx)("span",{className:"banner__author",children:"Stanis\u0142aw Jerzy Lec"})]})}),M=function(){return Object(t.jsx)("section",{className:"homepage",children:Object(t.jsx)(r,{})})},A=new b.a({uri:"https://wp.na.stronazen.pl/graphql"}),h=function(){return Object(t.jsx)(c.a,{client:A,children:Object(t.jsxs)("div",{className:"app",children:[Object(t.jsx)(d,{}),Object(t.jsx)(M,{})]})})};Object(s.render)(Object(t.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.30bc5dcd.chunk.js.map