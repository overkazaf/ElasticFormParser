const obj2str = Object.prototype.toString;

export default
class Util {
	static deepClone(obj) {
		if (obj === null || typeof obj !== 'object') return obj;
		
		let ret = new obj.constructor();

		if (Util.isArray(obj)) {
			ret = [];
			for (let i = 0, l = obj.length; i < l; i++) {
				ret[i] = Util.deepClone(obj[i]);
			}
		} else {

			if (obj instanceof Date) {
				return new Date(obj.valueOf());
			}

			if (obj instanceof RegExp) {
				var pattern = obj.valueOf();
				var flags = '';
				flags += pattern.global ? 'g' : '';
				flags += pattern.ignoreCase ? 'i' : '';
				flags += pattern.multiline ? 'm' : '';
				return new RegExp(pattern.source, flags);
			}

			if (obj instanceof Function) {
				// 函数的话直接指向相对的内存地址
				return obj;
			}

			for (let attr in obj) {
				if (Object.hasOwnProperty.call(obj, attr)) {
					ret[attr] = Util.deepClone(obj[attr]);
				}
			}
		}
		return ret;
	}

	static isType(obj, type) {
		return obj2str.call(obj) === '[object ' + type +']';
	}

	static isArray(obj) {
		if (typeof Array.isArray == 'function') {
			return Array.isArray(obj);
		} else {
			return Util.isType(obj, 'Array');
		}
	}

	static isExisty(obj) {
		return obj != null;
	}

	static buildStyleObjet(keys, kvObject) {
        let style = {};
        keys.map((key) => {
            let styleKey = key;
            let styleValue = kvObject[key];
            if (key === 'fontStyle') {
                let values = styleValue ? styleValue.split('$') : "";
                values.length && values.map((kvPairs) => {
                    let [k, v] = kvPairs.split(':');
                    style[k] = v;
                });
            } else {
                if (key === 'fontColor') {
                    styleKey = 'color';
                    styleValue = styleValue.hex;
                }

                if (key === 'backgroundColor') {
                    styleValue = styleValue.hex;
                }

                if (key === 'visibility') {
                    styleKey = 'display';
                    styleValue = styleValue ? '' : 'none';
                }

                style[styleKey] = styleValue;
            }

        });

        return style;
    }

    static parseDataModel(option) {
        let {
            id,
            name,
            basicProps: {
                componentTheme: {
                    backgroundColor,
                    fontColor,
                    layoutStyle,
                    size,
                    theme,
                },
                inputValue: {
                    carry,
                    defaultValue,
                    label,
                    link,
                    linkTarget,
                    placeholder,
                    value,
                },
                inputDecoration: {
                    addonBefore,
                    addonAfter,
                    prefix,
                    suffix,
                },
                formStatus: {
                    visibility,
                    locked,
                    mustInput,
                    autoSum,
                },
                fontStyles: {
                    fontFamily,
                    fontStyle,
                    fontSize,
                    lineHeight,
                    textAlign,
                },
            },
        } = option;

        console.log(`=================${name} inside Util.js==================`);

        [size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput, autoSum,
            defaultValue, value, link, linkTarget, placeholder, carry,
            addonBefore, addonAfter, prefix, suffix,
        ] = [size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput, autoSum,
            defaultValue, value, link, linkTarget, placeholder, carry,
            addonBefore, addonAfter, prefix, suffix,
        ].map(item => item.value);

        [fontStyle] = [fontStyle].map(item => item.values);

        let extraStyle = {};
        if (fontStyle) {
            let pairs = fontStyle.split('$');
            pairs.map((pair) => {
                let [k, v] = pair.split(':');
                extraStyle[k] = v;
            });
        }

        let model = {
            size,
            theme,
            label,
            fontFamily,
            fontSize,
            lineHeight,
            textAlign,
            visibility,
            locked,
            mustInput,
            autoSum,
            defaultValue,
            value,
            link,
            linkTarget,
            placeholder,
            carry,
            addonBefore,
            addonAfter,
            prefix,
            suffix,
            extraStyle,
        };

        return model;
    }

    static overrideObject(src = {}, option = {}, deep = false) {
        if (Object.keys(obj).length) {
            for (let key in obj) {
                if (!deep) {
                    src[key] = obj[key];
                } else {
                    src[key] = Util.overrideObject(src[key], obj[key]);
                }
            }
        }

        return src;
    }
}