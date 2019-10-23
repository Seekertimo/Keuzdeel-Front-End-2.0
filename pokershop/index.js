(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {
				exports: {}
			};
			t[o][0].call(l.exports, function(e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++) s(r[o]);
	return s
})({
	1: [function(require, module, exports) {
		module.exports = {
			"name": "PokerNL",
			"paylike-public-key": "c38301cb-0cde-4b3a-801d-586a3350b69b",
			"locale": "nl",
			"currency": "EUR",
			"google-analytics": "UA-11792550-35",
			"amounts": {
				"before": "",
				"after": " Euro.",
				"decimal": ",",
				"thousands": ".",
				"fractions": 0
			},
			"products": [{
				"sku": "300",
				"name": "Pokerset (300 chips)",
				"description": "Pokerset in een aluminium koffer met 300 chips (11,5 grams), 2 sets  speelkaarten, 5 dobbelstenen en een dealerknop.",
				"price": 2500,
				"priceFormatted": "25 eur",
				"image": "./pokersaet-m2.jpg"
			},
				{
					"sku": "500",
					"name": "Pokerset (500 chips)",
					"description": "Onze grote pokerset is een pokerset in een aluminium koffer met 500 chips (11,5 grams), 2 set speelkaarten, 5 dobbelstenen en een dealerknop.",
					"price": 4500,
					"priceFormatted": "45 eur.",
					"image": "./pokersaet-l2.jpg"
				}
			],
			"checkout-fields": [{
				"name": "E-mail",
				"placeholder": "voorbeeld@domein.nl",
				"required": true
			},
				{
					"name": "Naam",
					"placeholder": "Rogue Cheney",
					"required": true
				},
				{
					"name": "Adress",
					"placeholder": "Adress",
					"required": true
				},
				{
					"name": "By",
					"placeholder": "Postcode nummer",
					"required": true
				}
			]
		}

	}, {}],
	2: [function(require, module, exports) {
		module.exports = function(e, t) {
			var a = document.getElementsByTagName("head")[0],
				d = document.createElement("script");
			d.src = e, d.onload = d.onreadystatechange = function() {
				this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (t && t(), d.onload = d.onreadystatechange = null, a.removeChild(d))
			}, a.appendChild(d)
		};

	}, {}],
	3: [function(require, module, exports) {
		"use strict";

		function find(n, t, r) {
			if ("function" == typeof Array.prototype.find) return n.find(t, r);
			r = r || this;
			var f, i = n.length;
			if ("function" != typeof t) throw new TypeError(t + " is not a function");
			for (f = 0; i > f; f++)
				if (t.call(r, n[f], f, n)) return n[f]
		}
		module.exports = find;

	}, {}],
	4: [function(require, module, exports) {
		var slice = [].slice;
		module.exports = function(n, r) {
			if ("string" == typeof r && (r = n[r]), "function" != typeof r) throw new Error("bind() requires a function");
			var e = slice.call(arguments, 2);
			return function() {
				return r.apply(n, e.concat(slice.call(arguments)))
			}
		};

	}, {}],
	5: [function(require, module, exports) {
		"use strict";

		function render(e, t, n, l, o) {
			renderBasketCount(e, e.querySelector("span.count"), t.count()), renderBasketPopup(e, t, n, l, o)
		}

		function renderBasketCount(e, t, n) {
			n ? e.classList.remove("empty") : (e.classList.add("empty"), e.classList.add("closed")), t.textContent = n
		}

		function renderBasketPopup(e, t, n, l, o) {
			listeners = listeners.filter(function(e) {
				e.$.removeEventListener(e.type, e.fn)
			});
			var u = $popupTemplate.cloneNode(!0),
				r = $popupTemplate.querySelector("ul.lines > li"),
				i = $popupTemplate.querySelector("ul.lines").cloneNode(!1),
				s = u.querySelector("button.checkout");
			n && s.classList.add("apple-pay"), t.lines.forEach(function(e) {
				var t = r.cloneNode(!0);
				t.querySelector("img").setAttribute("src", e.image), t.querySelector("h1").textContent = e.name, t.querySelector("input.quantity").value = e.quantity, t.querySelector("p.amount").textContent = formatAmount(e.price * e.quantity), listen(t.querySelector("button.less"), "click", bind(null, l, e, -1)), listen(t.querySelector("button.more"), "click", bind(null, l, e, 1)), listen(t.querySelector("input.quantity"), "blur", bind(null, onSetQuantity, l, e)), i.appendChild(t)
			}), replaceNode(u.querySelector("ul.lines"), i), u.querySelector("div.summary p.amount").textContent = formatAmount(t.total()), listen(s, "click", o), e.replaceChild(u, e.querySelector("div.popup"))
		}

		function replaceNode(e, t) {
			e.parentNode.replaceChild(t, e)
		}

		function onSetQuantity(e, t, n) {
			e(t, n.target.value - t.quantity)
		}

		function listen(e, t, n) {
			e.addEventListener(t, n), listeners.push({
				$: e,
				type: t,
				fn: n
			})
		}
		var bind = require("component-bind"),
			formatAmount = require("./format-amount");
		module.exports = render;
		var $tmp = document.createElement("div");
		$tmp.innerHTML = '<div class="popup"><ul class="lines"><li><div class="img"><img src=""/></div><div class="body"><h1>title</h1><div class="quantity"><button class="less">-</button><div><input type="text" value="1" class="quantity"/></div><button class="more">+</button></div><p class="amount">Euro 1,899.00</p></div></li></ul><div class="summary"><p class="text">Total</p><p class="amount">1.899,00 eur.</p></div><button class="checkout">Betalen</button></div>';
		var $popupTemplate = $tmp.childNodes[0],
			listeners = [];

	}, {
		"./format-amount": 7,
		"component-bind": 4
	}],
	6: [function(require, module, exports) {
		"use strict";

		function Basket(t) {
			this.lines = t || []
		}

		function sumQuantity(t, n) {
			return t + n.quantity
		}

		function sumPrice(t, n) {
			return t + n.price * n.quantity
		}
		var find = require("array-find");
		module.exports = Basket, Basket.fromJSON = function(t) {
			return new Basket(t)
		}, Basket.prototype.add = function(t) {
			var n = t.sku && find(this.lines, function(n) {
				return t.sku === n.sku
			});
			n ? n.quantity += t.quantity : this.lines.push(t)
		}, Basket.prototype.count = function() {
			return this.lines.reduce(sumQuantity, 0)
		}, Basket.prototype.total = function() {
			return this.lines.reduce(sumPrice, 0)
		}, Basket.prototype.increase = function(t, n) {
			var e = t.sku && find(this.lines, function(n) {
				return t.sku === n.sku
			});
			if (!e) throw new Error("Trying to increase an unknown basket line");
			e.quantity += n, e.quantity <= 0 && (this.lines = this.lines.filter(function(t) {
				return t !== e
			}))
		}, Basket.prototype.summary = function() {
			return this.lines.map(function(t) {
				return t.quantity + "x " + t.name + " (" + t.sku + ")"
			}).join(", ")
		}, Basket.prototype.empty = function() {
			this.lines = []
		}, Basket.prototype.toJSON = function() {
			return this.lines
		};

	}, {
		"array-find": 3
	}],
	7: [function(require, module, exports) {
		"use strict";

		function formatAmount(o) {
			for (var t = o / 100, n = t.toFixed(amounts.fractions || 2).split("."), u = n[0], a = n[1], r = [amounts.fractions ? amounts.decimal + a : ""], s = u.length, i = 0; s > i; i++) i > 0 && i % 3 === 0 && r.unshift("."), r.unshift(u[s - i - 1]);
			return amounts.before + r.join("") + amounts.after
		}
		var configuration = require("../conf.json"),
			amounts = configuration.amounts;
		module.exports = formatAmount;

	}, {
		"../conf.json": 1
	}],
	8: [function(require, module, exports) {
		"use strict";

		function add() {
			window.ga || init(), window.ga === add ? add.q.push(arguments) : window.ga.apply(ga, arguments)
		}

		function init() {
			"undefined" != typeof window && window.document && addScript("//www.google-analytics.com/analytics.js"), window.ga = add
		}
		var addScript = require("add-script");
		module.exports = add, add.init = init, add.q = [], add.l = Date.now(), "undefined" != typeof window && (window.GoogleAnalyticsObject = "ga");

	}, {
		"add-script": 2
	}],
	9: [function(require, module, exports) {
		(function(global) {
			"use strict";

			function run(e, t) {
				function a(t, o) {
					c.basket.increase(t, o), renderBasket(r, c.basket, i, a, n), save(e, c), track("basket", o > 0 ? "increase" : "decrease")
				}

				function n() {
					return i ? applePayCheckout(shopName, currency, c.basket, o) : (paylike.popup({
						locale: locale,
						currency: currency,
						amount: c.basket.total(),
						title: shopName,
						description: c.basket.summary(),
						custom: c.basket.toJSON(),
						fields: checkoutFields
					}, o), void track("checkout", "open"))
				}

				function o(t) {
					return t ? (console.error("Checkout failed", t), void track("checkout", "close" === t ? "close" : "error")) : (c.basket.empty(), renderBasket(r, c.basket, i, a, n), save(e, c), void(window.location = "/tak.html"))
				}
				trackingId && (ga("create", trackingId, "auto"), ga("send", "pageview"));
				var i = !1;
				window.ApplePaySession && window.ApplePaySession.canMakePaymentsWithActiveCard("merchant.billigpoker").then(function(e) {
					i = e, renderBasket(r, c.basket, i, a, n)
				});
				var c = load(e),
					r = t.querySelector("div.basket"),
					s = t.querySelector("div.basket > a");
				s.addEventListener("click", function() {
					r.classList.contains("closed") ? r.classList.remove("closed") : r.classList.add("closed")
				}), r.addEventListener("click", function(e) {
					e.stopPropagation()
				}), t.addEventListener("click", function() {
					r.classList.add("closed")
				}), renderBasket(r, c.basket, i, a, n);
				var l = t.querySelectorAll("ul.products li");
				l && Array.prototype.forEach.call(l, function(t) {
					var o = t.querySelector("a.buy");
					o && o.addEventListener("click", function(o) {
						o.preventDefault(), o.stopPropagation();
						var s = products[+t.getAttribute("data-n")];
						c.basket.add({
							name: s.name,
							image: s.image,
							price: s.price,
							sku: s.sku,
							quantity: 1
						}), renderBasket(r, c.basket, i, a, n), save(e, c), r.classList.remove("closed"), r.scrollIntoViewIfNeeded ? r.scrollIntoViewIfNeeded({
							behavior: "smooth"
						}) : r.scrollIntoView && r.scrollIntoView({
							behavior: "smooth"
						}), track("basket", "add")
					})
				})
			}

			function track(e, t) {
				trackingId && ga("send", "event", e, t)
			}

			function save(e, t) {
				e && e.setItem("basket", JSON.stringify(t.basket))
			}

			function load(e) {
				if (e) {
					var t = e.getItem("basket");
					return {
						basket: t && Basket.fromJSON(JSON.parse(t)) || new Basket
					}
				}
			}

			function applePayCheckout(e, t, a, n) {
				var o = new ApplePaySession(1, {
					countryCode: "NL",
					currencyCode: t,
					supportedNetworks: ["visa", "masterCard"],
					merchantCapabilities: ["supports3DS"],
					lineItems: a.lines.map(function(e) {
						return {
							type: "final",
							label: e.quantity + "x " + e.name,
							amount: e.price * e.quantity / 100
						}
					}),
					total: {
						label: e,
						amount: a.total() / 100
					},
					requiredShippingContactFields: ["name", "email", "postalAddress"]
				});
				o.onvalidatemerchant = function(e) {
					fetch("https://apple-pay-challenge.paylike.io/validate", {
						method: "POST",
						headers: {
							Accept: "application/json, text/plain, */*",
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							validationURL: e.validationURL
						})
					}).then(function(e) {
						return e.json()
					}).then(function(e) {
						return o.completeMerchantValidation(e.merchantSession)
					})
				}, o.onpaymentauthorized = function(e) {
					fetch("https://ap-gateway.paylike.io/transactions", {
						method: "POST",
						headers: {
							Accept: "application/json, text/plain, */*",
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							key: key,
							custom: e.payment.shippingContact,
							apple: JSON.stringify(e.payment.token.paymentData)
						})
					}).then(function(e) {
						e.json()
					}).then(function() {
						o.completePayment(ApplePaySession.STATUS_SUCCESS), n()
					}, function(e) {
						o.completePayment(ApplePaySession.STATUS_FAILURE), n(e)
					})
				}, o.begin()
			}
			var Basket = require("./basket"),
				ga = require("./ga"),
				renderBasket = require("./basket-view"),
				configuration = require("../conf.json"),
				shopName = configuration.name,
				key = configuration["paylike-public-key"],
				locale = configuration.locale,
				currency = configuration.currency,
				checkoutFields = configuration["checkout-fields"],
				products = configuration.products,
				trackingId = configuration["google-analytics"],
				paylike = global.Paylike(key);
			run(window.localStorage, window.document.documentElement);
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		"../conf.json": 1,
		"./basket": 6,
		"./basket-view": 5,
		"./ga": 8
	}]
}, {}, [9]);