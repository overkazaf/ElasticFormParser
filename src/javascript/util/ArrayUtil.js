export default
class ArrayUtil {
	static makeGroup(array, groupSize) {
		let target = [];
		let tmp = [];
		
		array.map((item, index) => {
			if ((index+1) % groupSize === 0) {
				tmp.push(item);
				target.push(tmp.slice(0));
				tmp = [];
			} else {
				tmp.push(item);
			}
		});

		if (tmp.length) target.push(tmp);

		return target;
	}
}