import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-QTR4PN2B.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-KL3QB7I6.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1752470002045.56";
}
var meta = () => {
  return [{
    title: "\u667A\u80FD\u6BD4\u4EF7\u795E\u5668 - \u591A\u5E73\u53F0\u5546\u54C1\u4EF7\u683C\u5BF9\u6BD4"
  }, {
    name: "description",
    content: "\u4E00\u952E\u641C\u7D22\uFF0C\u591A\u5E73\u53F0\u6BD4\u4EF7\uFF0C\u5E2E\u60A8\u627E\u5230\u6700\u4F18\u60E0\u7684\u4EF7\u683C"
  }];
};
function Index() {
  _s();
  const {
    products,
    query,
    scrapeResults,
    total
  } = useLoaderData();
  const navigation = useNavigation();
  const isSearching = navigation.state === "submitting";
  const [selectedPlatforms, setSelectedPlatforms] = (0, import_react2.useState)([]);
  const platforms = ["amazon", "walmart", "ebay", "target"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "text-center mb-16 pt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "\u{1F6D2} \u667A\u80FD\u6BD4\u4EF7\u795E\u5668" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mb-8", children: "\u4E00\u952E\u641C\u7D22\uFF0C\u591A\u5E73\u53F0\u6BD4\u4EF7\uFF0C\u5E2E\u60A8\u627E\u5230\u6700\u4F18\u60E0\u7684\u4EF7\u683C" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto mb-16 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "bg-white rounded-xl shadow-lg p-6 mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "q", type: "text", placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\uFF0C\u5982\uFF1AiPhone\u3001MacBook\u3001AirPods...", defaultValue: query || "", className: "w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSearching, className: "px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: isSearching ? "\u641C\u7D22\u4E2D..." : "\u{1F50D} \u641C\u7D22" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "scrape", value: "true", disabled: isSearching, className: "px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: isSearching ? "\u6293\u53D6\u4E2D..." : "\u26A1 \u7ACB\u5373\u6293\u53D6" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      !query && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-blue-500 mr-2 mt-0.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-blue-800 mb-1", children: "\u4F7F\u7528\u6307\u5357" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u641C\u7D22" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 21
            }, this),
            "\uFF1A\u67E5\u770B\u6570\u636E\u5E93\u4E2D\u5DF2\u6709\u7684\u4EF7\u683C\u6570\u636E",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 54
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u7ACB\u5373\u6293\u53D6" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            "\uFF1A\u4ECE\u5404\u5927\u7535\u5546\u5E73\u53F0\u83B7\u53D6\u6700\u65B0\u5B9E\u65F6\u4EF7\u683C\uFF08\u63A8\u8350\uFF09"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 141,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600 mr-2", children: "\u5E73\u53F0\u7B5B\u9009:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        platforms.map((platform) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
          setSelectedPlatforms((prev) => prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]);
        }, className: `px-3 py-1 text-sm rounded-full border ${selectedPlatforms.includes(platform) ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`, children: platform.charAt(0).toUpperCase() + platform.slice(1) }, platform, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 40
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    scrapeResults && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 rounded-lg ${scrapeResults.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        scrapeResults.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-green-500 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 171,
          columnNumber: 42
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-red-500 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 174,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 28
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `font-medium ${scrapeResults.success ? "text-green-800" : "text-red-800"}`, children: scrapeResults.success ? "\u2705 \u4EF7\u683C\u6293\u53D6\u6210\u529F\uFF01" : "\u274C \u4EF7\u683C\u6293\u53D6\u5931\u8D25" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 170,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `mt-1 text-sm ${scrapeResults.success ? "text-green-700" : "text-red-700"}`, children: scrapeResults.message || scrapeResults.error }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this),
      scrapeResults.success && scrapeResults.total_saved && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-green-600", children: [
        "\u6210\u529F\u4FDD\u5B58 ",
        scrapeResults.total_saved,
        " \u4E2A\u4EA7\u54C1\u7684\u4EF7\u683C\u6570\u636E"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 70
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 169,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 168,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
      query && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-6", children: [
        '\u641C\u7D22\u7ED3\u679C: "',
        query,
        '" (',
        products.length,
        " \u4E2A\u4EA7\u54C1)"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 191,
        columnNumber: 21
      }, this),
      !query && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-6", children: "\u70ED\u95E8\u4EA7\u54C1" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 200,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      products.length === 0 && query && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-lg", children: "\u6CA1\u6709\u627E\u5230\u76F8\u5173\u4EA7\u54C1\uFF0C\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u5173\u952E\u8BCD" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 204,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 203,
        columnNumber: 46
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 190,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(Index, "CkWDDwdW/UKFkvNjLNRPXqFyCOw=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = Index;
function ProductCard({
  product
}) {
  const prices = product.price_records.sort((a, b) => a.price - b.price);
  const bestPrice = prices[0];
  const priceRange = prices.length > 1 ? `$${bestPrice.price} - $${prices[prices.length - 1].price}` : `$${bestPrice?.price || "N/A"}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image_url || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300", alt: product.name, className: "w-full h-48 object-cover" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg mb-2 line-clamp-2", children: product.name }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: product.description }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-green-600", children: priceRange }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
            prices.length,
            " \u4E2A\u5E73\u53F0"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        prices.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
          prices.slice(0, 3).map((price, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize font-medium", children: price.platform }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 238,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: index === 0 ? "text-green-600 font-semibold" : "text-gray-600", children: [
                "$",
                price.price
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 240,
                columnNumber: 21
              }, this),
              index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-green-100 text-green-700 px-2 py-1 rounded", children: "\u6700\u4F4E\u4EF7" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 243,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 239,
              columnNumber: 19
            }, this)
          ] }, price.id, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 237,
            columnNumber: 57
          }, this)),
          prices.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500 text-center", children: [
            "+",
            prices.length - 3,
            " \u66F4\u591A\u5E73\u53F0"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 246,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 236,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 222,
    columnNumber: 10
  }, this);
}
_c2 = ProductCard;
var _c;
var _c2;
$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-42WVPXTW.js.map
