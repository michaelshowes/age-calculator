// function to calculate age in years, months, and days
export default function calculateAge(day: number, month: number, year: number) {
	const today = new Date();
	const birthDate = new Date(year, month, day);
	const diff = today.getTime() - birthDate.getTime();

	const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	const months = Math.floor(
		(diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
	);
	const days = Math.floor(
		(diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
	);

	return { years, months, days };
}
