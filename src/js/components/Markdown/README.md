## MnetUIBaseMarkdown
Markdown formatting using MnetUIBase components.

MnetUIBase uses 'markdown-to-jsx' in Markdown component,
      you can see all the options in the documentation.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.MnetUIBase.io/?selectedKind=Type-Markdown&full=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/MnetUIBase/MnetUIBase-sandbox?initialpath=/markdown&module=%2Fsrc%2FMarkdown.js)
## Usage

```javascript
import { Markdown } from 'mnet-ui-base';
      <Markdown>{content}</Markdown>
```

## Properties

**components**

Custom components and props to override html elements such as 'img'
      or 'pre'. By default 'a', 'p', 'img', and table elements are overridden
      with MnetUIBase components.
      Available options:
      a: { component: Anchor },
      img: { component: Image },
      p: { component: Paragraph },
      table: { component: Table },
      td: { component: TableCell },
      tbody: { component: TableBody },
      tfoot: { component: TableFooter },
      th: { component: TableCell },
      thead: { component: TableHeader },
      tr: { component: TableRow }

```
object
```

**options**

Used to tune the jsx compiler to specific properties, available options on [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).

```
{

}
```
  
## Intrinsic element

```
div
```
