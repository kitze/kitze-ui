### og images

- when doing og images in api routes, all the tailwind classes are not fully supported.
- each "img" has to have a width and height set as a prop
- each div has to be a flex


### satori

CSS
Satori uses the same Flexbox layout engine as React Native, and it’s not a complete CSS implementation. However, it supports a subset of the spec that covers most common CSS features:

Property	Property Expanded	Supported Values	Example
display	none and flex, default to flex	
position	relative and absolute, default to relative	
color	Supported	
margin
marginTop	Supported	
marginRight	Supported	
marginBottom	Supported	
marginLeft	Supported	
Position
top	Supported	
right	Supported	
bottom	Supported	
left	Supported	
Size
width	Supported	
height	Supported	
Min & max size
minWidth	Supported except for min-content, max-content and fit-content	
minHeight	Supported except for min-content, max-content and fit-content	
maxWidth	Supported except for min-content, max-content and fit-content	
maxHeight	Supported except for min-content, max-content and fit-content	
border
Width (borderWidth, borderTopWidth, ...)	Supported	
Style (borderStyle, borderTopStyle, ...)	solid and dashed, default to solid	
Color (borderColor, borderTopColor, ...)	Supported	
Shorthand (border, borderTop, ...)	Supported, i.e. 1px solid gray
borderRadius
borderTopLeftRadius	Supported	
borderTopRightRadius	Supported	
borderBottomLeftRadius	Supported	
borderBottomRightRadius	Supported	
Shorthand	Supported, i.e. 5px, 50% / 5px	
Flex
flexDirection	column, row, row-reverse, column-reverse, default to row	
flexWrap	wrap, nowrap, wrap-reverse, default to wrap	
flexGrow	Supported	
flexShrink	Supported	
flexBasis	Supported except for auto	
alignItems	stretch, center, flex-start, flex-end, baseline, normal, default to stretch	
alignContent	Supported	
alignSelf	Supported	
justifyContent	Supported	
gap	Supported	
Font
fontFamily	Supported	
fontSize	Supported	
fontWeight	Supported	
fontStyle	Supported	
Text
tabSize	Supported	
textAlign	start, end, left, right, center, justify, default to start	
textTransform	none, lowercase, uppercase, capitalize, defaults to none	
textOverflow	clip, ellipsis, defaults to clip	
textDecoration	Support line types underline and line-through, and styles dotted, dashed, solid	Example
textShadow	Supported	
lineHeight	Supported	
letterSpacing	Supported	
whiteSpace	normal, pre, pre-wrap, pre-line, nowrap, defaults to normal	
wordBreak	normal, break-all, break-word, keep-all, defaults to normal	
textWrap	wrap, balance, defaults to wrap	
Background
backgroundColor	Supported, single value	
backgroundImage	linear-gradient, radial-gradient, url, single value	
backgroundPosition	Support single value	
backgroundSize	Support two-value size i.e. `10px 20%`	
backgroundClip	border-box, text	
backgroundRepeat	repeat, repeat-x, repeat-y, no-repeat, defaults to repeat	
transform
Translate (translate, translateX, translateY)	Supported	
Rotate	Supported	
Scale (scale, scaleX, scaleY)	Supported	
Skew (skew, skewX, skewY)	Supported	
transformOrigin	Support one-value and two-value syntax (both relative and absolute values)	
objectFit	contain, cover, none, default to none	
opacity	Supported	
boxShadow	Supported	
overflow	visible and hidden, default to visible	
filter	Supported	
clipPath	Supported	Example
lineClamp	Supported	Example
Mask
maskImage	linear-gradient(...), radial-gradient(...), url(...)	Example
maskPosition	Supported	Example
maskSize	Support two-value size i.e. `10px 20%`	Example
maskRepeat	repeat, repeat-x, repeat-y, no-repeat, defaults to repeat	Example
WebkitTextStroke	WebkitTextStrokeWidth	Supported	
WebkitTextStrokeColor	Supported	