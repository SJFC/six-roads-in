# six-roads-in
A reworking of an earlier attempt at a spatial poem
# Six Roads In

An interactive digital poem rebuilt from an older CodePen experiment, now imagined as an old star-map of a remembered journey to work.

The piece is intentionally simple: one `index.html` file containing the poem, visual map, styling, and interaction. It can be published directly with GitHub Pages.

## Credits

Poem, concept, original CodePen experiment, and artistic direction by Sarah Jane Crowson.

This iteration was developed in collaboration with OpenAI Codex, used as a creative coding assistant.

## Places

- Dormington
- Mordiford
- Tarrington
- Hereford
- Lugwardine
- Radnorshire / Hergest Ridge

## Publish On GitHub Pages

1. Create a new GitHub repository.
2. Add this folder's files to it.
3. In the repository settings, turn on GitHub Pages.
4. Choose the main branch and root folder.

The site entry point is `index.html`.

## Coordinate Notes

Stars are positioned from latitude/longitude values in the HTML, then projected into the visual field by the page script. This keeps the places in a real geographic relationship while leaving room for the poem to behave as a constellation rather than a literal map tile.

Coordinate references used in this iteration:

- Dormington: https://www.getthedata.com/dormington/where-is-dormington
- Mordiford: https://new.millsarchive.org/mills/index/4774
- Tarrington: https://www.getthedata.com/tarrington/where-is-tarrington
- Hereford: https://time-ok.com/coordinates/hereford
- Lugwardine: https://www.getthedata.com/lugwardine/where-is-lugwardine
- Hergest Ridge: https://mapcarta.com/37562038

## Notes

The current version avoids external image links from the old CodePen, so it should work over HTTPS without mixed-content warnings.

Text edits made inside the page are saved only in the current browser using local storage. They are useful for drafting, but the source poem lives in `index.html`.

This iteration adds the custom star-map background, cooler moonlit palette, softer star-like place markers, an illuminated amethyst interaction, and a smaller five-place constellation.
