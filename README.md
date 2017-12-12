# CSC583-Final
Create a `sign-in` application that runs on a mobile device, e.g., an iPad or an Android tablet that communicates with a back-end database.  This application is used as a kiosk device to collect information on visitors to a corporation.

## Action Plan

- [x] Nonfunctional analysis
- [ ] Architecture design
- [ ] Implementation
- [ ] Testing
- [ ] Deployment

## Nonfunctional Requirements

### Visitor View

The application shall provide a form that visitors can use to sign in. The form shall include the following fields:

- Name
- Email 
- Telephone
- Company
- Official visit (checkbox)
- Escort required (checkbox)
- Escort name (if Escort is checked)

Upon the visitor selecting `submit`, the form shall be sent to a server and the visitor information shall be stored in a database. The application shall then be redirected to the `sign in` screen.

### Admin View

The application shall offer a password-protected admin view.  This view shall list all the data from the database as a table.

## Architecture design



