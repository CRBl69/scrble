# sCRBle

Front-end code for the sCRBle game (it's just scrabble).

## Why ?

I wanted to play this with some people over the internet but I didn't find any great websites to play it

## How to set up ?

1. Install the angular cli (if not already installed)
2. Create a .env file
3. Add a BACKEND\_URL variable which shall be the url to your backend server (ex.: `BACKEND_URL="scrble-server.my-website.com"`)
4. Add a BACKEND\_PORT variable which shall be the port your backend server is running on (ex.: `BACKEND_PORT=6942`)
5. Run `npm run build`
6. Serve the content of dist/scrabble with the server of your choice (apache, nginx, etc...)
