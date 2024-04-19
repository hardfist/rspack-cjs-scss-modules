module.exports = function html(title) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <!-- <link rel="icon" type="image/svg+xml" href="/react.svg" /> -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${title}</title>
            <script>
            // Allow to use react dev-tools inside the examples
            try { window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__; } catch {}
            </script>
            <style> body { margin: 0; } </style>
        </head>
        <body>
            <div id="root"></div>
        </body>
    </html>
  `;
}
