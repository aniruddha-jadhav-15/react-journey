# 07 — Dynamic Attributes

## What are Dynamic Attributes?

Setting HTML element attributes dynamically
using JavaScript variables in JSX.

## Static vs Dynamic:

// Static — hardcoded value
<img src="profile.jpg" alt="profile" />

// Dynamic — using variable
const imgUrl = "profile.jpg";
const altText = "profile";
<img src={imgUrl} alt={altText} />

## Common Dynamic Attributes:

src → image source
href → link url
className → CSS class
disabled → button state
value → input value
style → inline styles

## Example:

const isDisabled = true;
const btnClass = "btn-primary";

<button
className={btnClass}
disabled={isDisabled}

> Click Me
> </button>

## Key Rule:

Use {} curly braces for dynamic values!
Use "" quotes for static values!
