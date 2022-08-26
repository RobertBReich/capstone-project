export default function toHoursAndMinutes(totalMinutes) {
	const minutes = totalMinutes % 60;
	const hours = Math.floor(totalMinutes / 60);

	return `${hours}h ${padTo2Digits(minutes)}m`;
}
function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}
