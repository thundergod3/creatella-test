const timeDifference = (previous: Date): string | Date => {
	const current: Date = new Date();
	const msPerMinute = 60 * 1000;
	const msPerHour: number = msPerMinute * 60;
	const msPerDay: number = msPerHour * 24;

	let msDifferentTime: number = current.getTime() - previous.getTime();

	if (msDifferentTime < msPerMinute) {
		return Math.round(msDifferentTime / 1000) + " seconds ago";
	} else if (msDifferentTime < msPerHour) {
		return Math.round(msDifferentTime / msPerMinute) + " minutes ago";
	} else if (msDifferentTime < msPerDay) {
		return Math.round(msDifferentTime / msPerHour) + " hours ago";
	} else {
		if (Math.round(msDifferentTime / msPerDay) <= 7) {
			return "approximately " + Math.round(msDifferentTime / msPerDay) + " days ago";
		}
		return previous + "";
	}
};

export default timeDifference;
