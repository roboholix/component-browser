# TODO

## Components

### Icons
- [ ] History
- [ ] Navigation (Vertical Elipsis)
- [ ] Thumbs Up
- [ ] Thumbs Down
- [ ] Map
- [ ] Play Button
- [ ] Settings Button
- [ ] Prev Arrow
- [ ] Next Arrow
- [ ] Quote Marks

### Parent/Child Components
- [ ] App
  - [ ] Header
  - [ ] RobotProfile
  - [ ] BigQuote (desktop only)
  - [ ] Map (desktop only)
  - [ ] Footer (mobile only)

- [ ] Header
  - [ ] HistoryButton
  - [ ] Title
  - [ ] NavButton
  
- [ ] RobotProfile
  - [ ] MapButton
  - [ ] ImageHolder
    - [ ] RobotImage
    - [ ] MapImage
  - [ ] MiniImage (Optional)
    - [ ] MapImage
    - [ ] MapImageBorder
  - [ ] ImageOverlay
    - [ ] PlayButton
    - [ ] RobotName
    - [ ] ImageSettingsButton
  - [ ] SettingsOverlay
    - [ ] RadioButtons
      - [ ] RadioButton    
  - [ ] RobotMessage
    - [ ] QuoteText
    - [ ] Text

- [ ] QuoteText

- [ ] Footer
  - [ ] StartRatingButton
  - [ ] QuoteRatingControls
    - [ ] PrevButton
    - [ ] ThumbsUpButton
    - [ ] ThumbsDownButton
    - [ ] NextButton

- [ ] RadioButtons
  - [ ] RadioButton

- [ ] BigQuote
  - [ ] QuoteIcon
  - [ ] QuoteText
  - [ ] ThumbsUpButton
  - [ ] ThumbsDownButton

- [ ] HistoryBrowser
  - [ ] ThumbsUpButton
  - [ ] ThumbsDownButton
  - [ ] QuoteIcon
  - [ ] QuoteText
  - [ ] DateText
  
- [ ] Sidebar
  - [ ] Navigation
    - [ ] Button

- [ ] NotificationBar (Optional)
  - [ ] MessageText
  - [ ] CloseButton

## App State (may use Redux depending on time constraints)
- [ ] Quote Ratings (ideally ordered by date/time)
- [ ] Robot Image Background
- [ ] IP
- [ ] Robot name
- [ ] Latitude/Longitude

## Redux
- [ ] Store
- [ ] Actions
- [ ] Constants
- [ ] Reducers
- [ ] Initial State
- [ ] Slices (if going with RTK)

## React Router
- [ ] Index - /index.html
  - [ ] Rate Quotes - /rate (same as index)
  - [ ] Build Site of Robot - /map
  - [ ] Quote History - /history
  - [ ] Settings - /settings
  - [ ] Navigation - /navigation
