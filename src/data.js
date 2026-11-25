export const WEDDING_DATE = new Date('2026-12-20T19:00:00+05:30')

export const events = [
  { name: 'Engagement', day: '18 December 2026', time: '7:00 PM', theme: 'pink', note: 'Pink theme', icon: 'ring' },
  { name: 'Haldi', day: '19 December 2026', time: '10:00 AM', theme: 'yellow', note: 'Yellow theme', icon: 'haldi' },
  { name: 'Sangeet', day: '19 December 2026', time: '7:30 PM', theme: 'lavender', note: 'An evening of music & dance', icon: 'music' },
  { name: 'Wedding Ceremony', day: '20 December 2026', time: '7:00 PM', theme: 'saffron', note: 'The sacred vows', icon: 'diya' },
  { name: 'Reception', day: '21 December 2026', time: '7:00 PM', theme: 'rose', note: 'Dinner & celebration', icon: 'glass' },
]

export const venue = {
  name: 'The Royal Orchid Palace',
  address: 'Jaipur, Rajasthan',
  maps: 'https://maps.google.com/?q=The+Royal+Orchid+Palace+Jaipur',
}

// All-day Google Calendar entry for 18-21 Dec (end date is exclusive).
export const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('Aarav & Siya Wedding') +
  '&dates=20261218/20261222' +
  '&location=' + encodeURIComponent('The Royal Orchid Palace, Jaipur, Rajasthan') +
  '&details=' + encodeURIComponent('Engagement on 18 Dec. Haldi & Sangeet on 19 Dec. Wedding Ceremony on 20 Dec. Reception on 21 Dec.')
