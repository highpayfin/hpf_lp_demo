var Input = /** @class */ (function () {
	function Input() {
	}
	Input.prototype.select = function (el, options) {
		options.forEach(function (option) {
		  option.addEventListener('click', function (event) {
				var value = option.dataset.option;
				var text = option.textContent;
				el.value = text;
				el.dispatchEvent(new Event('input'));
			});
		});
		el.addEventListener('input', function () {
			console.log(el.value);
		});
	};
	Input.prototype.phone = function (el) {
		el.addEventListener('input', function (event) {
			var cleaned = el.value.replace(/[^\d+\-() ]/g, '');
			if (cleaned !== el.value) {
				el.value = cleaned;
			}
		});
	};
	Input.prototype.number = function (el, button) {
		var minString = el.getAttribute('min');
		var min = minString ? +minString : 1;
		var maxString = el.getAttribute('max');
		var max = maxString ? +maxString : 9999999;
		var stepString = el.getAttribute('step');
		var step = stepString ? +stepString : 1;
		var valueString = el.getAttribute('value');
		var value = valueString ? +valueString : 1;
		button.subtract.addEventListener('click', function () {
			var calc = value - step;
			value = calc <= min ? min : calc;
			el.value = String(value);
			el.dispatchEvent(new Event('input'));
		});
		button.add.addEventListener('click', function () {
			var calc = value + step;
			value = calc >= max ? max : calc;
			el.value = String(value);
			el.dispatchEvent(new Event('input'));
		});
		// el.addEventListener('blur', () => {
		el.addEventListener('input', function () {
			var elValue = +el.value;
			if (elValue < min) {
				elValue = min;
			}
			if (elValue > max) {
				elValue = max;
			}
			value = elValue;
			el.value = String(value);
		});
	};
	Input.prototype.mask = function (el) {
		el.addEventListener('input', function (event) {
			mask(event, el, el.getAttribute('mask'));
		});
	};
	Input.prototype.listenner = function (inputs) {
		var _this = this;
		inputs.forEach(function (input) {
			var parent = input.parentElement;
			var options = Array.from(parent.querySelectorAll('[data-option]'));
			if (options.length) {
				_this.select(input, options);
				return;
			}
			var type = input.getAttribute('type');
			if (type == 'tel') {
				_this.phone(input);
			}
			var counterButtonSubtract = parent.querySelector('[button-subtract]');
			var counterButtonAdd = parent.querySelector('[button-add]');
			if (type == 'number' && counterButtonSubtract && counterButtonAdd) {
				_this.number(input, { subtract: counterButtonSubtract, add: counterButtonAdd });
			}
			var mask = input.getAttribute('mask');
			if (mask) {
				_this.mask(input);
			}
		});
	};
	return Input;
}());
function mask(event, el, matrix) {
	if (matrix === void 0) { matrix = '+7 (___) ___ __ __'; }
	if (!event.isTrusted)
		return;
	var i = 0;
	var def = matrix.replace(/\D/g, '');
	var val = el.value.replace(/\D/g, '');
	if (def.length >= val.length)
		val = def;
	el.value = matrix.replace(/./g, function (a) {
		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
	});
	if (event.type == 'blur') {
		if (el.value.length == 2)
			el.value = '';
	}
	else
		setCursorPosition(el.value.length, el);
	el.dispatchEvent(new Event('input'));
}
function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) {
		elem.setSelectionRange(pos, pos);
	}
	else if (elem.createTextRange) {
		var range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}