# SVG Country Flags for React (Package Name)

## Description

This NPM package provides a collection of SVG country flags, optimized for React applications and written in TypeScript. It offers a simple and efficient way to include scalable, high-quality flag icons in your web projects.

## Features

- High-quality SVG flags for a wide range of countries.
- Easy integration with React projects.
- TypeScript support for type safety and autocompletion.
- Lightweight with minimal dependencies.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install [your-package-name] --save
```

## Usage

Import the flag component in your React application:

```jsx
import { CountryFlag } from '[your-package-name]';

const MyComponent = () => (
  <div>
    <CountryFlag countryCode="US" width="100" height="50" />
  </div>
);

export default MyComponent;
```

## Props

| Prop        | Type   | Description                      | Required |
| ----------- | ------ | -------------------------------- | -------- |
| countryCode | string | ISO Alpha-2 country code         | Yes      |
| width       | string | Width of the flag (in pixels)    | No       |
| height      | string | Height of the flag (in pixels)   | No       |
| className   | string | Additional CSS class for styling | No       |

## Contributing

We welcome contributions to this package. If you have a suggestion or fix:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` file for more information.

## Author

- Your Name - [@YourGitHub](https://github.com/YourGitHub)

## Acknowledgments

- List any other contributors or sources of inspiration.

---

Feel free to modify this template to suit your specific package details and personal style. Remember to replace placeholders (like `[your-package-name]`) with actual values relevant to your package.
