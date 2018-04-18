export default [
  { label: 'Type', name: 'type', type: 'select', placeholder: '', options: ['carries', 'goals'] },
  { label: 'Title', name: 'title', type: 'text', placeholder: 'Example: Win a Game of Fortnite' },
  { label: 'Description', name: 'description', placeholder: { "carries": "Example: I will get you a win in Fortnite", "goals": "Example: I have never won a game of Fortnite and need some help" }, type: 'textarea' },
  { label: 'Game', name: 'game', placeholder: '', type: 'text' },
  { label: 'Platform', name: 'platform', placeholder: '', type: 'select' },
  { label: 'Price', name: 'price', placeholder: '', type: 'number' }
];