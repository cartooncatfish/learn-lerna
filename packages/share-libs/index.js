export const FixedData = {
	f1: 'name',
	f2: 'age',
};

export const myRandomNoGenerator = (min, max) => {
	if (typeof max !== 'number' && typeof min !== 'number') {
		min = 0;
		max = 1;
	}
	return Math.random() * (max - min) + min;
};