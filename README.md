# Paginate

Paginate is a JavaScript library for paginating text using HTML canvas. It allows users to change the font, font size, line height, and more.

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

3. Install the required development dependencies:

   ```bash
   pnpm install
   ```

4. To run on dev server:

   ```bash
   pnpm run dev
   ```

   This will generate mjs, js nd d.ts files in the `dist` directory from src/paginate.ts.

5. ****IMPORTANT:**** Do well to import all exported functions in the src/index.ts files so that it is compiled to mjs file on build

6. Open your web browser and access your PaginatorJS page at `http://localhost:8080` or a different URL provided by your HTTP server.

## Usage

To use PaginatorJS in your own HTML project, include the generated JavaScript file in your HTML, and follow the usage instructions mentioned in the previous README example.

## Options

- `font`: The font to use.
- `fontSize`: The font size.
- `fontColor`: The font color.
- `lineHeight`: The line height.
- Add more options and their descriptions here.

## Contributing

If you would like to contribute to PaginatorJS, please follow our [contributing guidelines](Contributing.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.
