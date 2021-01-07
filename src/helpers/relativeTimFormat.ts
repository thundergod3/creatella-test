const timeDifference = (previous: Date): string | Date => {
	const current: Date = new Date();
	const msPerMinute = 60 * 1000;
	const msPerHour: number = msPerMinute * 60;
	const msPerDay: number = msPerHour * 24;

	let elapsed: number = current.getTime() - previous.getTime();

	if (elapsed < msPerMinute) {
		return Math.round(elapsed / 1000) + " seconds ago";
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + " minutes ago";
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + " hours ago";
	} else {
		if (Math.round(elapsed / msPerDay) <= 7) {
			return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
		}
		return previous + "";
	}
};

export default timeDifference;
