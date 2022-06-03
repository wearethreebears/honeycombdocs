---
sidebar: auto
---

# Guide

## Introduction

Honeycomb is a configurable, mobile first, fluid scss framework for creating websites and web apps that respond gracefully to any screen size. Unlike traditional frameworks, where font sizes and gutters snap to a fixed size based on breakpoints, Honeycomb resizes all of these elements in co-ordination with with the users viewport, for UI\'s that look great on any sized device.

### How it works

Instead of setting breakpoint specific fonts, gutters and grid sizes, Honeycomb sets floor and ceiling values which are used in conjunction with the users viewport to determine the size, No JavaScript, just plain CSS.

### Features

Honeycomb features a 12 column, mobile first, fluid grid, fluid fonts, fluid gutters, and useful helper functions, all controlled by your own personalised```honeycomb.config.scss``` file.

## Getting started

### Installation

To use Honeycomb in your project, install Honeycomb as a local dependency using npm and copy the ```honeycomb.config.scss``` to your projects root directory. 

```bash
#install the dependency
npm install @wearethreebears/honeycomb

#copy honeycomb.config.js to your porjects root directory
cp node_modules/@wearethreebears/honeycomb/honeycomb.config.scss ./
```

Open your chosen ```.scss``` file and import Honeycomb.

```scss
@import '@wearethreebears/honeycomb';
```


## Configuration

You can customise your grid, fonts and gutters through the ```honeycomb.config.scss``` file, creating fluid styles that respond gracefully to any screen size.

### Root size

The root size determines the root font size for Honeycomb installation.

```scss
root-size: 16px, //Required
```

### Build font classes

By default, Honeycomb will provide a ```font``` mixin which accepts a single parameter, this should correspond with a key in your configuration's ```fonts``` object. It will also builds classes from the keys in the ```fonts``` object, classes will be prefixed with ```.font__```, for example ```title--large``` would create a class called ```.font__title--large```. Alternatively, set ```build-font-classes``` to ```false``` to avoid font classes being automatically generated and soley use mixins within your own classes if you would prefer.

```scss
build-font-classes: true, //Default to true
```

### Grid

The grid property accepts an object with the following properties: ```breakpoints```, ```container``` and ```gutter```. These properties are used to generate a fluid, twelve column, nestable grid for your project.

```scss
grid: ( //Required

    breakpoints: ( //Required
    ),

    container: (//Required
    ),

    gutter: (//Required
    ),
)
```

#### Breakpoints

The ```grid``` > ```breakpoints``` property is an object that accepts a list of breakpoint objects. Honeycomb is mobile first so the mobile grid is default, to add more breakpoints, you will need to add new breakpoint objects. 

Breakpoint objects accept two properties: ```prefix``` and ```min-width```. The ```prefix``` value will be used to determine the prefix for the grid class names available within your breakpoint. The ```min-width``` property will be used to determine at which point the breakpoint grid class names will be available. 

Take the following example:

```scss
breakpoints: (
    desktop: (
        prefix: 'd', //Required
        min-width: 80rem //Required
    )
),
```

The example would create a new breakpoint for your grid called ```desktop```, the desktop grid could be utilised on any viewport larger than ```80rem```. You can also reference the breakpoint in your own ```.scss``` files using the ```breakpoint function``` and referencing the breakpoint name:

```scss
@media screen and (min-width: breakpoint('desktop')) {
    /**/
}
```

Using the ```desktop``` breakpoint example above, to override the default mobile first grid you will have access to prefixed column span classes. 

In the below example, on viewports larger than ```80rem``` you could access ```d:span-*``` classes. 
In practice that may look something like this:

```html
<div class="span d:span-6">Hello world</div>
```

The above example, taking advantage of the desktop breakpoint object, would default to display "Hello world" in a ```<div>``` that spans the entire container, at viewports of ```80rem``` and above, that same ```<div>``` would span just six of the twelve columns.

::: warning
Breakpoints should be listed in chronological order to ensure the stylesheet overrides grid classes in the correct order.
:::

#### Container

The container object accepts 2 values: ```max-width``` and ```min-width```, these properties are used to determine the minimum and maximum width of your container element, as well as ensuring floor and ceiling values are abided to by ```fonts``` and ```gutters```.

```scss
container: (
    max-width: 93.75rem, //Required
    min-width: 23.75rem, //Required
),
```

#### Gutter

The gutter object within the container object is used to set the column gutter width between column cells in your grid. ```gutter``` accepts two values: ```max-width``` and ```min-width```, ```gutter``` > ```max-width``` will determine the size of the gutters when the viewport is greater than, or equal to ```container``` > ```max-width```, while ```gutter``` > ```min-width``` will determine the size of the gutters when the container is smaller than or equal to ```container``` > ```min-width```

```scss
gutter: (
    max-width: 2rem, //Required
    min-width: 1.25rem, //Required
)
```

### Fonts

The fonts object accepts a list of font objects, which controls the fluid fonts within your project. By default the fonts object is used to create font classes within your project, using the property names and prefixing them with ```.font__```, for example ```title--large``` would create a class called ```.font__title--large```. It also makes the object property available to a helpful mixin, for example ```@include font('title--large')```. If you'd prefer to use the available mixin within your own classes and not generate the prefixed classes, you can set ```build-font-classes``` to ```false```, see [build font classes](/guide/#build-font-classes).

Font objects accept six properties: ```font-family```, ```font-weight```, ```max-size```, ```min-size```, ```max-line-height```, ```min-line-height```. Both ```font-family``` and ```font-weight``` correspond with their CSS class counterparts, while ```max-size```, ```min-size```, ```max-line-height``` and ```min-line-height``` are special properties.

Both the font sizes and font line heights will be determined by a combination of user viewport size, minimum and maximum container widths and the minimum and maximum settings within the font object. ```max-size``` and ```max-line-height``` will determine the ceiling value of the font size and line height, in conjunction ```grid``` > ```container``` properties. ```min-size``` and ```min-line-height``` will determine the floor value of the font size and line height, in conjunction ```grid``` > ```container``` properties.

```scss
title--large: (
    font-family: 'Poppins', //Required
    font-weight: 800, //Required
    max-size: 7.25rem, //Required
    min-size: 2.2rem, //Required
    max-line-height: 1.4em, //Required
    min-line-height: 1.1em //Required
)
```

Font families can be configured to use font stacks by wrapping the ```font-family``` value in parentheses like so:

```scss
title--large: (
    font-family: ('Poppins', 'Helvetica Rounded', Arial, sans-serif), //Required
    font-weight: 800, //Required
    max-size: 7.25rem, //Required
    min-size: 2.2rem, //Required
    max-line-height: 1.4em, //Required
    min-line-height: 1.1em //Required
)
```

### Gutters

Gutters are versatile spacing properties which can be used for setting padding and margin values within your project which scale gracefully on any screen size. The ```gutters``` object accepts of a list of gutter objects which have two values: ```max-size``` and ```min-size```. ```max-size``` will determine the ceiling value in conjunction with the ```grid``` > ```container``` properties. ```min-size``` will determine the floor value in conjunction with the ```grid``` > ```container``` properties.

```scss
large: (
    max-size: 6rem, //Required
    min-size: 2rem, //Required
)
```

Your gutter values can be accessed in your ```.scss``` stylesheets using the ```gutter()``` function. To set the margin-bottom on all elements with the class ```.mb--large``` to  ```large``` property in the ```gutters``` object, see the below example:

```scss
.mb--large {
    margin-bottom: gutter('large')
}
```

## The grid

Honeycomb comes with a configurable twelve column, fluid, flex grid. For information on configuring the grid see [grid configuration](/guide/#grid). The grid has four categories of class: ```.container```, ```.row```, ```.nested-row``` and ```.span-*```. 

### Container
The ```.container``` class is used to determine the grids outer container and has a default ```flex-direction``` value of ```row```, which wraps. 

### Row
The ```.row``` class stretches 100% of it's parent and has a ```flex-direction``` of ```row```, which wraps and is used for wrapping groups of ```.span-*``` classes. 

### Nested row
The ```.nested-row``` class is used for creating groups of ```.span-*``` classes within a ```.span-*``` class where you'd like to preserve the parent container gutters. By default, nesting ```.span-*``` classes within ```.span-*``` classes would result in a double gutter, however, wrapping ```span-*``` classes in a ```nested-row``` class will fix this.

### Spans
The ```.span-*``` classes are used for spanning grid columns and are available in both numbers and percentages.

#### Numbered spans

| Class name    | Description |
| ------------- |:-------------:| 
| ```.span```    | Spans 12 columns | 
| ```.span-1```    | Spans 1 columns | 
| ```.span-2```    | Spans 2 columns | 
| ```.span-3```    | Spans 3 columns | 
| ```.span-4```    | Spans 4 columns | 
| ```.span-5```    | Spans 5 columns | 
| ```.span-6```    | Spans 6 columns | 
| ```.span-7```    | Spans 7 columns | 
| ```.span-8```    | Spans 8 columns | 
| ```.span-9```    | Spans 9 columns | 
| ```.span-10```    | Spans 10 columns | 
| ```.span-11```    | Spans 11 columns | 

#### Percentage spans

| Class name    | Description |
| ------------- |:-------------:| 
| ```.span-1-2```    | Spans 1/2 of the columns | 
| ```.span-1-3```    | Spans 1/3 of the columns | 
| ```.span-2-3```    | Spans 2/3 of the columns | 
| ```.span-1-4```    | Spans 1/4 of the columns | 
| ```.span-3-4```    | Spans 3/4 of the columns | 

The default ```span-*``` classes are mobile first and are available on any device. When adding breakpoints to your ```honeycomb.config.scss``` file, Honeycomb will generate new prefixed ```span-*``` classes. 

In the following example, the ```desktop``` breakpoint is configured to generate ```span-*``` classes prefixed with ```d```, that will be available to elements in viewports ```80rem``` and above:

```scss
breakpoints: (
    desktop: (
        prefix: 'd',
        min-width: 80rem
    )
)
```
The above example configuration would generate the following classes:

#### Numbered spans

| Class name    | Description |
| ------------- |:-------------:| 
| ```.d:span```    | Spans 12 columns on viewports above 80rem | 
| ```.d:span-1```    | Spans 1 columns on viewports above 80rem | 
| ```.d:span-2```    | Spans 2 columns on viewports above 80rem | 
| ```.d:span-3```    | Spans 3 columns on viewports above 80rem | 
| ```.d:span-4```    | Spans 4 columns on viewports above 80rem | 
| ```.d:span-5```    | Spans 5 columns on viewports above 80rem | 
| ```.d:span-6```    | Spans 6 columns on viewports above 80rem | 
| ```.d:span-7```    | Spans 7 columns on viewports above 80rem | 
| ```.d:span-8```    | Spans 8 columns on viewports above 80rem | 
| ```.d:span-9```    | Spans 9 columns on viewports above 80rem | 
| ```.d:span-10```    | Spans 10 columns on viewports above 80rem | 
| ```.d:span-11```    | Spans 11 columns on viewports above 80rem | 

#### Percentage spans

| Class name    | Description |
| ------------- |:-------------:| 
| ```.d:span-1-2```    | Spans 1/2 of the columns on viewports above 80rem | 
| ```.d:span-1-3```    | Spans 1/3 of the columns on viewports above 80rem | 
| ```.d:span-2-3```    | Spans 2/3 of the columns on viewports above 80rem | 
| ```.d:span-1-4```    | Spans 1/4 of the columns on viewports above 80rem | 
| ```.d:span-3-4```    | Spans 3/4 of the columns on viewports above 80rem | 

## Fonts

The fonts configuration generates font classes by default with the prefix ```font__```, so ```title--large``` would generate ```.font__title--large```. As well as generating classes, fonts are available within your own classes using the fonts mixin. If you'd prefer to use the available mixin within your own classes and not generate the prefixed classes, you can set ```build-font-classes``` to ```false```, see [build font classes](/guide/#build-font-classes). 

In the following configuration example, there is a font called ```title--large`:

```scss
title--large: (
    font-family: 'Poppins', //Required
    font-weight: 800, //Required
    max-size: 7.25rem, //Required
    min-size: 2.2rem, //Required
    max-line-height: 1.4em, //Required
    min-line-height: 1.1em //Required
)
```

Font families can be configured to use font stacks by wrapping the ```font-family``` value in parentheses like so:

```scss
title--large: (
    font-family: ('Poppins', 'Helvetica Rounded', Arial, sans-serif), //Required
    font-weight: 800, //Required
    max-size: 7.25rem, //Required
    min-size: 2.2rem, //Required
    max-line-height: 1.4em, //Required
    min-line-height: 1.1em //Required
)
```

### Generated classes

To use the generated class for ```title--large``` within your HTML write:

```html
<h1 class="font__title--large">Hello world</h1>
```

### Custom classes

Should you wish to use the mixin within your own class, write:

```scss
.title--primary {
    @include font('title--large')
}
```

## Gutters

The gutters configuration values can be accessed in your ```.scss``` files using the using the ```gutter()``` function, which takes a single parameter. This parameter should match a property key in your ```gutters``` object, in your ```honeycomb.config.scss``` file. 

In the following configuration example, there is a gutter called ```large`:

```scss
large: (
    max-size: 5rem,
    min-size: 3rem,
)
```

You can access the ```large``` gutter values in your ```.scss``` files like so, using the gutter mixin - It takes to values, property and gutter value:

```scss
    .mb--large {
        @include gutter('margin-bottom', 'large')
    }
```

## Mixins

### Fonts

The font mixin can be used to can be used to add Honeycomb controlled fonts to custom class names. Just pass the font object key you'd like to extend.

```scss
.title--primary {
    @include font('title--large')
}
```

### Gutters

Honeycomb gutters can be accessed by using the gutter mixin, it accepts 2 values, the propery you'd like it to effect and the Honeycomb gutters object key.

```scss
    .mb--large {
        @include gutter('margin-bottom', 'large')
    }
```

## Functions

### Breakpoint function

The breakpoint function allows you to access breakpoint variables within your stylesheets outside of Honeycomb. The function accepts one parameter which should correspond with a property key name in your ```grid``` > ```breakpoints``` object within your ```honeeycomb.config.scss``` file.

```scss
@media screen and (min-width: breakpoint('desktop')) {
    /**/
}
```

### Gutter function

The gutter function allows you to access fluid gutter variables for margin and padding values. The function accepts one parameter which should correspond with a property key name in your ```gutters``` object within your ```honeeycomb.config.scss``` file.

```scss
.mb--large {
    margin-bottom: gutter('large')
}
```

::: danger Warning
The gutter function has been deprecated in favour of the gutter mixin and will be removed in future versions of Honeycomb
:::