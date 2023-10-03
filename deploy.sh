#!/bin/bash
trap ctrl_c INT
function ctrl_c() {
    npx tailwindcss -i input.css -o output.css --minify
}
npx tailwindcss -i input.css -o output.css --watch