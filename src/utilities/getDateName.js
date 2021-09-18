export const getDateName = (updated) => {
	const updatedDate = new Date(updated)
	return updatedDate.toLocaleString('default', {
		dateStyle: 'short',
		timeStyle: 'medium',
		hour12: true,
	})
}
