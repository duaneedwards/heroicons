<p align="center">
  <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/.github/logo.svg" alt="Heroicons">
</p>

<p align="center">
  An unofficial library of Blazor Components for tailwindlabs' heroicons set.
<p>

<p align="center">
  <a href="https://heroicons.com"><strong>Browse at Heroicons.com &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://www.nuget.org/packages/HeroIcons.Blazor"><img src="https://img.shields.io/nuget/v/HeroIcons.Blazor?logo=nuget" alt="Latest Release"></a>
    <a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/heroicons.svg" alt="License"></a>
</p>

> ℹ️ This package's version is aligned with the [heroicons NPM package](https://www.npmjs.com/package/heroicons) so you always know which version you're using.

## Blazor

First, install `HeroIcons.Blazor` from nuget:

```terminal
dotnet add package HeroIcons.Blazor
```

Now each icon can be imported individually as a Blazor component:

```html
@using HeroIcons.Blazor.Solid

<div>
  <BeakerIcon class="h-5 w-5 text-blue-500"/>
  <p>...</p>
</div>
}
```

The 24x24 outline icons can be imported from `HeroIcons.Blazor.Outline`, and the 20x20 solid icons can be imported from `HeroIcons.Blazor.Solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on GitHub &rarr;](https://github.com/duaneedwards/heroicons/tree/master/blazor/Outline)

## License

This library is MIT licensed.
