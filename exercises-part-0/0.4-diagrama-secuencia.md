```sequenceDiagram


    participant Browser
    participant Server

    User > Browser: Writes text in input field
    User > Browser: Clicks "Save"

    Browser > Server: POST to https://studies.cs.helsinki.fi/exampleapp/new_note
    Activate server
    Server > Server: Add note to notes array
    Server > Browser: HTTP 302 Found - Redirect a/notes
    Deactivate server

    Browser > server: GET of https://studies.cs.helsinki.fi/exampleapp/notes
    Activate server 
    Server > Browser: HTTP 200 OK / HTML document 
    Deactivate server 

    Browser > server: GET of https://studies.cs.helsinki.fi/exampleapp/main.css
    Activate server 
    Server > Browser: HTTP 200 OK / CSS file
    Deactivate server 
    
    Browser > server: GET of https://studies.cs.helsinki.fi/exampleapp/main.js
    Activate server 
    Server > Browser: HTTP 200 OK / JavaScript file
    Deactivate server 

    Browser > server: GET of https://studies.cs.helsinki.fi/exampleapp/data.json
    Activate server 
    Server > Browser: HTTP 200 OK / JSON file: [
  {
    "content": "la vd q si",
    "date": "2026-03-12T15:50:08.200Z"
  },...]
    Deactivate server 
    Browser > browser: executes the callback function that renders the note 