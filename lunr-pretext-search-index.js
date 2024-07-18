var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Up the Stairs",
  "body": " Up the Stairs     "
},
{
  "id": "sec-section2-name",
  "level": "1",
  "url": "sec-section2-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Multiple choice test",
  "body": " Multiple choice test  Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "sec-section2-name.html#multiple-choice-not-randomized",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": "Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
