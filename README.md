Certainly, here's the `README.md` content with improved formatting to make it easily copyable as markdown:

# PaginatorJS

PaginatorJS is a JavaScript library for paginating text using HTML canvas. It allows users to change the font, font size, line height, and more.

## Getting Started

To run PaginatorJS locally, you'll need to install TypeScript and a global HTTP server. Follow these steps:

### Prerequisites

Before you get started, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Cedar-81/paginate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Paginator
   ```

3. Install the required development dependencies (TypeScript):

   ```bash
   npm install
   ```

4. Compile TypeScript to JavaScript:

   ```bash
   tsc
   ```

   This will generate JavaScript files in the `dist` directory.

5. Start a global HTTP server (e.g., [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML and JavaScript files:

   ```bash
   npm install -g http-server
   http-server -c-1
   ```

   The `-c-1` flag disables caching for development purposes.

6. Open your web browser and access your PaginatorJS page at `http://localhost:8080` or a different URL provided by your HTTP server.

## Usage

To use PaginatorJS in your own HTML project, include the generated JavaScript file in your HTML, and follow the usage instructions mentioned in the previous README example.

```html
<script src="./dist/paginator.js"></script>
```

## Options

- `font`: The font to use.
- `fontSize`: The font size.
- `lineHeight`: The line height.
- Add more options and their descriptions here.

## Contributing

If you would like to contribute to PaginatorJS, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
