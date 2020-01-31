### `yarn`
### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

* All the events and members are pulled from Events and Members API
  - Events: https://next.json-generator.com/api/json/get/Vk7OTypQ8
  - Members: https://next.json-generator.com/api/json/get/NyNrlJTX8
* You can sort Members based on Age and Name
  - To sort the members clicking the sort buttons will do.
* Events can be assigned to members.
  - To assign events to member select the member and add the events from the events column.  
* Assigned Events to Members can be located. 
  - To check which events are assigned, select the member and click "Locate on Calender"
* Members can be deleted
  - Click the delete button.
* Toggling event is available for cancelling events from being assigned to members  
  - Click the toggle button to hide/show events

## Technologies

* React JS
* Redux
* Redux Thunk
* CSS