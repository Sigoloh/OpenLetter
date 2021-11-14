export const DateManagement = {
  addDays: (days, date) => {
    return (date.getTime() + days * 86400000)
  },
  dayToMiliseconds: (days) => {
    return days * 24 * 60 * 60 * 1000
  }
}
