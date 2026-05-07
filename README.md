# 🎴 Pokéball Card Scanner

A fun and interactive web application that scans barcodes and reveals random Pokémon cards with smooth 3D flip animations, just like flipping a real trading card!

## ✨ Features

- **📱 Barcode Scanner Support** - Works with physical barcode scanners or manual input
- **🎴 3D Card Flip Animation** - Realistic playing card flip effect using CSS transforms
- **🎲 Random Pokémon Selection** - 12 different Pokémon cards to discover
- **📱 Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **⚡ Zero Dependencies** - Pure HTML, CSS, and JavaScript
- **🎯 Easy to Customize** - Add more Pokémon or modify styling easily
- **🚀 Fast Performance** - No external libraries or frameworks

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Usage

1. **Open the Application**
   - Download or clone this repository
   - Open `index.html` in your web browser

2. **Scan a Barcode**
   - Connect a barcode scanner to your device
   - Scan any barcode (the value doesn't matter)
   - Or manually enter any number and click "Scan"

3. **Watch the Magic**
   - The card will flip to reveal a random Pokémon
   - Click the card to manually flip it back and forth
   - Use "Flip Card" button for the same effect
   - Use "Reset" to start over

## 📁 Project Structure

```
pokeball/
├── index.html       # Main HTML interface
├── styles.css       # CSS styling and animations
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## 🎨 How the 3D Flip Works

The card flip animation uses CSS 3D transforms:

```css
.card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped .card-inner {
    transform: rotateY(180deg);
}
```

- **perspective**: Creates the 3D depth effect
- **preserve-3d**: Allows 3D transformations on child elements
- **rotateY(180deg)**: Rotates the card 180 degrees on the Y-axis
- **backface-visibility**: Hides the back of elements facing away

## 🔧 Customization

### Adding More Pokémon

Edit `script.js` and add to the `pokemonDatabase` array:

```javascript
{
    name: 'Dragonite',
    number: '149',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
}
```

### Changing Colors

Edit `styles.css` to modify gradients:

```css
.card-front {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-back {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Adjusting Animation Speed

Modify the transition duration in `styles.css`:

```css
.card-inner {
    transition: transform 0.6s;  /* Change 0.6s to your preferred duration */
}
```

## 🎮 Keyboard Shortcuts

- **Enter** - Scan the barcode (from input field)
- **Click Card** - Flip the card manually
- **Tab** - Move between elements

## 📊 Supported Pokémon

The app includes 12 iconic Pokémon:

1. Pikachu (#025)
2. Charizard (#006)
3. Blastoise (#009)
4. Venusaur (#003)
5. Dragonite (#149)
6. Gyarados (#130)
7. Alakazam (#065)
8. Machamp (#068)
9. Golem (#076)
10. Arcanine (#059)
11. Lapras (#131)
12. Mewtwo (#150)

## 🔗 API Integration

The app uses official Pokémon artwork from the PokéAPI:
- **Sprites URL**: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/[ID].png`

## 💻 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ⚠️ Limited (No CSS 3D) |

## 📝 Code Structure

### HTML (`index.html`)
- Container with header and instructions
- Barcode input field
- 3D card container with front and back
- Control buttons (Flip, Reset)

### CSS (`styles.css`)
- Responsive layout using Flexbox
- 3D card flip animation using CSS transforms
- Gradient backgrounds for visual appeal
- Mobile-first responsive design
- Pulse animation for the placeholder

### JavaScript (`script.js`)
- Event listeners for scan button and keyboard
- Random Pokémon selection algorithm
- Card flip toggle function
- Reset functionality
- Auto-focus for barcode scanner

## 🌟 Future Enhancements

- [ ] Add more Pokémon to the database
- [ ] Implement barcode validation
- [ ] Add sound effects for card flip
- [ ] Create a database to track scanned cards
- [ ] Add difficulty levels or card rarity
- [ ] Implement multiplayer mode
- [ ] Add PWA support for offline use
- [ ] Create a leaderboard system

## 🐛 Troubleshooting

### Barcode Scanner Not Working
- Ensure the barcode scanner is properly connected
- Check that the browser window is focused
- Try manually entering a number and clicking "Scan"

### Card Animation Not Smooth
- Clear your browser cache
- Try a different browser
- Check for hardware acceleration settings

### Images Not Loading
- Check your internet connection
- Ensure PokéAPI is accessible from your location
- Try adding the image URLs manually

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📧 Contact

For questions or suggestions, please open an issue in the GitHub repository.

---

**Enjoy scanning and collecting Pokémon cards! 🎴✨**
