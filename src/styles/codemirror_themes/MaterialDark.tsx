import { EditorView } from '@codemirror/view'
import { Extension } from '@codemirror/state'
import { HighlightStyle } from '@codemirror/highlight'
import { tags as t } from '@lezer/highlight'

const dark0 = '#282828',
  dark1 = '#3c3836',
  dark3 = '#665c54',
  gray_245 = '#928374',
  light1 = '#ebdbb2',
  light2 = '#d5c4a1',
  light3 = '#bdae93',
  light4 = '#a89984',
  bright_red = '#fb4934',
  bright_green = '#b8bb26',
  bright_yellow = '#fabd2f',
  bright_blue = '#83a598',
  bright_purple = '#d3869b',
  bright_aqua = '#8ec07c',
  bright_orange = '#fe8019'

const bg0 = dark0,
  bg1 = dark1,
  bg3 = dark3,
  gray = gray_245,
  fg1 = light1,
  fg2 = light2,
  fg3 = light3,
  fg4 = light4,
  red = bright_red,
  green = bright_green,
  yellow = bright_yellow,
  blue = bright_blue,
  purple = bright_purple,
  aqua = bright_aqua,
  orange = bright_orange

const invalid = red,
  darkBackground = bg0,
  highlightBackground = darkBackground,
  background = bg0,
  tooltipBackground = bg1,
  selection = darkBackground,
  cursor = orange

/// The editor theme styles for Gruvbox Dark.
export const gruvboxDarkTheme = EditorView.theme(
  {
    '&': {
      color: fg1,
      backgroundColor: background,
      padding: "1.5rem",
      paddingTop: "0",
      borderRadius: "0.5rem",
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: darkBackground, color: fg1 },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      backgroundColor: bg0,
      color: yellow,
      outline: `1px solid ${bg3}`
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: bg3
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': { backgroundColor: bg3 },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      outline: `1px solid ${bg3}`,
      fontStyle: 'bold'
    },

    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: bg3
    },

    '.cm-gutters': {
      backgroundColor: bg1,
      color: fg3,
      border: 'none'
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: fg2
      }
    },

    '&.cm-focused': {
    outline: "none",
    },
    '.cm-content': {
      fontFamily: "Source Code Pro, Fira Mono, monospace",
      fontSize: "0.95rem",
      caretColor: cursor
    },
    '.cm-scroller': {
      fontFamily: "Source Code Pro, Fira Mono, monospace",
    }
  },
  { dark: true }
)

/// The highlighting style for code in the Gruvbox Dark theme.
export const gruvboxDarkHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: red },
  {
    tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: aqua
  },
  { tag: [t.variableName], color: blue },
  { tag: [t.function(t.variableName)], color: green, fontStyle: 'bold' },
  { tag: [t.labelName], color: fg1 },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: purple
  },
  { tag: [t.definition(t.name), t.separator], color: fg1 },
  { tag: [t.brace], color: fg1 },
  {
    tag: [t.annotation],
    color: invalid
  },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: purple
  },
  {
    tag: [t.typeName, t.className],
    color: yellow
  },
  {
    tag: [t.operator, t.operatorKeyword],
    color: red
  },
  {
    tag: [t.tagName],
    color: aqua,
    fontStyle: 'bold'
  },
  {
    tag: [t.squareBracket],
    color: orange
  },
  {
    tag: [t.angleBracket],
    color: blue
  },
  {
    tag: [t.attributeName],
    color: aqua
  },
  {
    tag: [t.regexp],
    color: aqua
  },
  {
    tag: [t.quote],
    color: gray
  },
  { tag: [t.string], color: fg1 },
  {
    tag: t.link,
    color: fg4,
    textDecoration: 'underline',
    textUnderlinePosition: 'under'
  },
  {
    tag: [t.url, t.escape, t.special(t.string)],
    color: purple
  },
  { tag: [t.meta], color: yellow },
  { tag: [t.comment], color: gray, fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold', color: orange },
  { tag: t.emphasis, fontStyle: 'italic', color: green },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.heading, fontWeight: 'bold', color: green },
  { tag: [t.heading1, t.heading2], fontWeight: 'bold', color: green },
  {
    tag: [t.heading3, t.heading4],
    fontWeight: 'bold',
    color: yellow
  },
  {
    tag: [t.heading5, t.heading6],
    color: yellow
  },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: purple },
  {
    tag: [t.processingInstruction, t.inserted],
    color: bright_blue
  },
  {
    tag: [t.contentSeparator],
    color: red
  },
  { tag: t.invalid, color: orange, borderBottom: `1px dotted ${invalid}` }
])

/// Extension to enable the Gruvbox Dark theme (both the editor theme and
/// the highlight style).
export const gruvboxDark: Extension = [
  gruvboxDarkTheme,
  gruvboxDarkHighlightStyle
]