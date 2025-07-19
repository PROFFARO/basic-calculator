# Basic Calculator

A sophisticated calculator web application built using HTML, CSS, and JavaScript. This project implements a feature-rich calculator with both basic and advanced operations, featuring a modern glassmorphic design and comprehensive memory functions.

## Features

### Basic Operations
- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
- Clear functionality (C)
- Backspace (⌫) for digit-by-digit editing
- Decimal point support
- Error handling for invalid operations

### Advanced Features
- Memory Functions:
  - Memory Clear (MC)
  - Memory Recall (MR)
  - Memory Add (M+)
  - Memory Subtract (M-)
- Scientific Operations:
  - Square Root (√)
  - Percentage Calculations (%)
- Comprehensive error handling:
  - Division by zero
  - Invalid square root operations
  - Memory operation validations

### Modern UI Features
- Glassmorphic design
- Responsive layout
- Interactive animations
- Visual feedback
- Dark mode support

## Technologies Used

- HTML5
- CSS3 with modern features:
  - CSS Grid
  - Custom Properties (Variables)
  - Flexbox
  - Animations
  - Glassmorphism effects
- JavaScript (ES6+) with OOP principles

## UI/UX Design Features

1. **Clarity**:
   - Clean and intuitive interface
   - Clear display of current and previous operations
   - Distinct visual hierarchy

2. **Feedback**:
   - Visual feedback on button hover
   - Error messages for invalid operations
   - Clear display updates

3. **Consistency**:
   - Consistent color scheme
   - Uniform button sizing and spacing
   - Standard calculator layout

4. **Accessibility**:
   - Keyboard support
   - High contrast colors
   - Clear typography

5. **Responsiveness**:
   - Adapts to different screen sizes
   - Touch-friendly button sizes
   - Maintains functionality across devices

## Usage

1. **Basic Operations**:
   - Click number buttons (0-9) to input values
   - Use operator buttons (+, -, ×, ÷) for basic operations
   - Press equals (=) to calculate
   - Use C to clear all inputs
   - Use ⌫ to delete the last digit

2. **Advanced Operations**:
   - Square Root (√): Click √ button or press 'r'
   - Percentage (%): Click % or press '%'
   - Use with or without previous operation

3. **Memory Functions**:
   - MC (Memory Clear): Erases stored value
   - MR (Memory Recall): Shows stored value
   - M+ (Memory Add): Adds display to memory
   - M- (Memory Subtract): Subtracts from memory

4. **Keyboard Support**:
   - Numbers: 0-9
   - Operators: +, -, *, /
   - Enter or = for calculation
   - Escape for clear
   - Backspace for digit deletion
   - 'r' for square root
   - '%' for percentage

## Error Handling

- Division by zero prevention
- Negative square root validation
- Multiple decimal point prevention
- Memory operation validation
- Graceful error messages
- Operation sequence validation

## Technical Implementation

1. **Code Architecture**:
   - Object-Oriented JavaScript with Calculator class
   - Event delegation for efficient handling
   - Modular code organization
   - Clean separation of concerns

2. **Modern CSS Features**:
   - CSS Custom Properties for theming
   - CSS Grid for layout
   - Glassmorphic design implementation
   - Responsive design principles
   - Animation and transition effects

3. **Performance Optimization**:
   - Efficient DOM manipulation
   - Event delegation
   - Optimized CSS selectors
   - Smooth animations
   - Minimal reflows

4. **Code Quality**:
   - Comprehensive error handling
   - Well-documented code
   - Consistent naming conventions
   - Maintainable structure

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PROFFARO/basic-calculator.git
   ```

2. Open `index.html` in a web browser.

## Testing

The calculator has been thoroughly tested for:
- Correct arithmetic operations
- Error handling
- Keyboard input
- Responsive design
- Cross-browser compatibility

## Future Enhancements

While the current implementation includes all basic and advanced features, potential future enhancements could include:
- Calculation history log
- Scientific functions (sin, cos, tan)
- Exponential operations
- Parentheses support
- Unit conversions
- Custom themes
- Save/load memory state

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.