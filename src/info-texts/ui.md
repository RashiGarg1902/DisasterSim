1. ## HoverInfo.jsx

   This component is used to show some information about something when user hovers over it.
   _Any parent component using HoverInfo should have "group" and "relative" classes to avoid unexpected behavior_
   This component can take **classes, name, count and message** as props
   'classes' is used to give any extra tailwind classes or overwrite previous ones. This is optional.
   'name' is used to show a name to user. For example, passing "Water" as name would make Water show up on hover. Text is not capitalized inside this component. Passed text will show up as it is.
   'count' is used when you want to allow user to keep track of something. For example, passing '1' as could along with 'Shelter' as name would result in the user seeing 'Shelter 1' on hover. 'count' is an optional property.
   'message' is used to pass along any additional message you may want to show. It will show below the name(or name + count). This property is optional.

2. ## MapIconWrapper.jsx
   This component is used to wrap any map icon used
   It takes **gridCol, gridRow and children** as props
   'gridCol' is used to specify gridColumnStart of the icon
   'gridRow' is used to specify gridRowStart of the icon
   'children' are written inside the MapIconWrapper tag, anything you require
   Any map icon with MapIconWrapper as parent component can use HoverInfo.jsx as it has both relative and group classes.
