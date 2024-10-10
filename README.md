# 1partCarbon Website

This is the main 1partCarbon Ltd website repo.
Originally this repo was a `curl` copy of the WordPress(WP) site. This was done
to save some cost by moving the site from an AWS based server, to free GitHub
Pages.

As WordPress produced HTML/CSS/JS code is not meant for source editing, this
site has been reporduced using plain HTML with Tailwindcss styling.

## Changes from original

The Carousel showing quotes and partners was removed. The carousel alternative
used was not immediatly designed to display multiply items across it's window.
As displaying one partner logo at a time did not express the large number of
partners we have worked with, it was desided to just display the logos using
a css grid.

## Development

### Live Server

For development, a simple live-server can be use:

```
pnpm install live-server
pnpm live-server ~/Documents/Programming/1partCarbon/1partcarbon.github.io/public/
```

### Tailwindcss

To compile the tailwindcss source into an output css file use:

```
npx tailwindcss -i ./src/input.css -o ./public/styles.css --watch
```

### HTML

The index page to edit can be found at: `/public/index.html`
