# react-katar

Create random avatars from user IDs, no need to store it on the server

[![NPM](https://img.shields.io/npm/v/react-katar.svg)](https://www.npmjs.com/package/react-katar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![img](https://raw.githubusercontent.com/lnquy065/react-katar/main/demo/katar.png)

## Install

```bash
npm install --save react-katar
```
## Usage

```jsx
import React, { Component } from 'react'

import { Avatar } from 'react-katar'

class Example extends Component {
  render() {
    return <Avatar id="Hello" />
  }
}
```

## Customize

### Shapes

- Square (default)
- Circle

![img](https://raw.githubusercontent.com/lnquy065/react-katar/main/demo/normal.png)

```jsx
// square
<Avatar  id="Hello"/>

// circle
<Avatar  id="Hello" shape="circle"/>
```

### Border

- None (default)
- Border color (the same with avatar's color as default)
- Border width (default: 3px)

![img](https://raw.githubusercontent.com/lnquy065/react-katar/main/demo/border.png)

```jsx
// default
<Avatar  id="Hello" shape="circle" border/>

// custom border width
<Avatar  id="Hello" shape="circle" border borderWidth="5px"/>

// custom border color
<Avatar  id="Hello" shape="circle" border borderColor="black"/>
```

### Size

- width (default: 90px)
- height (the same with width but can't manual setting)

![img](https://raw.githubusercontent.com/lnquy065/react-katar/main/demo/size.png)

```jsx
// default
 <Avatar  id="Hello" shape="circle" border/>

// custom size
<Avatar  id="Hello" shape="circle" border width="100"/>
<Avatar  id="Hello" shape="circle" border width="120"/>
```

### Salt

You can add `salt` to avatar to create another avatar from the same Id

![img](https://raw.githubusercontent.com/lnquy065/react-katar/main/demo/salt.png)

```jsx
<Avatar id="Hello" shape="circle" border salt="hello"/>

<Avatar id="Hello" shape="circle" border salt="my-name"/>

<Avatar id="Hello" shape="circle" border  salt="is-quy"/>
```

## Properties

| property name | type | default | description |
|---------------|------|---------|-------------|
| **id** | *string* | *required* | Use for create avatar |
| **salt** | *string* | none | Appended after the **id** |
| **width** | *number* | 90 | Avatar's width, base on px unit |
| **shape** | `square`,`circle` | square | Avatar's shape |
| **backgroundColor** | *string* | #FFFFFF | Avatar's background color |
| **border** | *bool* | false | Enable border |
| **borderWidth** | *string* | 3px | Border's width |
| **borderColor** | *string* | none | Border's color, leave empty if you want to set avatar color to this property  |
| **canvasStyle** | *object* | none | Style object for canvas |

## License

MIT © [lnquy065](https://github.com/lnquy065)
