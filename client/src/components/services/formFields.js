export default [
  { label: 'Type', name: 'type', type: 'select', placeholder: '', options: ['carries', 'goals'] },
  { label: 'Title', name: 'title', type: 'text', placeholder: 'ex: Win a Game of Fortnite' },
  { label: 'Description', name: 'description', placeholder: { "carries": "ex: I will get you a win in Fornite", "goals": "ex: I have never won a game of Fortnite and need some help" }, type: 'textarea' },
  { label: 'Game', name: 'game', placeholder: '', type: 'text' },
  { label: 'Platform', name: 'platform', placeholder: '', type: 'select' },
  { label: 'Price', name: 'price', placeholder: '', type: 'number' }
];