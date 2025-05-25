# Webmon Specification

## Overview

Webmon is a website, which monitors HTML-pages you wanted to, and reports you when new elements you specify appear on them.

## Features

- Monitor scripts
- Roles
- ~~Incognito mode~~

## Pages

### Home page

Contains general information about the Webmon.
This page is default for non-authenticated users when they try to access base url.

### Dashboard page

Contains all monitor reports. There are two blocks: `To Check` and `Checked`. Each contains a list of report cards.
This page can be reached via navigation bar in "Header" only when user authenticated.
This page is default for authenticated users when they try to access base url.

### Scripts page

Contains a list of monitor scripts if your role is `user`. In case your role is `admin` it consists of two blocks: `My Scripts` and `All (other) scripts` each containing list of monitor scripts.
This page can be reached via navigation bar in "Header" only when user authenticated.

### Auth page

Contains "Sign In" and "Sign Up" forms.
This page can be reached by pressing "Sign In" button in "Header" only when user non-authenticated. Another way to access this page is by pressing "Log out" in the "Profile" popup that opens on click on "Profile" icon in "Header" -- this will log out user from system and redirect.
There are only one form vissible on the page and by default it is "Sign In" from. To switch between forms click at the links under the forms.

## Roles

There are two roles:

- user
- admin
- ~~incognito~~

### User

User is the default role, each new account granted with. Users have following capabilities:

- _create_ and _manage_ (_edit, activate/deactivate, delete_) monitor scripts on "Scripts" page;
- _view, mark as cheked and delete_ scripts' reports on "Dashboard" page;

### Admin

Admin has all the capabilities that user has as well as some extra one: on the "Scripts" page admins can view and manage not only their monitor scripts, but also scripts of _all other users (~~and admins~~)_ -- they can _block/unblock_ and _delete_ that scripts, but not _edit_.

## Components

### Monitor Script

This is a thing that describes what website (HTML-page\*) to monitor, and which part of it to track for changes. Script consists of:

- Name (length is in range 3..=20)
- Description (optional, max length is 50 characters)
- Avatar with active status indicator
- URL (valid HTML page)
- CSS-selector
- "Edit" button
- "Delete" button
- "Activate"/"Deactivate" toggle-button

##### Creation

When creating script two things are mandatory: _URL_ (of the HTML-page) and _CSS-selector_ (of elements you want to track). CSS-selector must select a list of elements containing `href` attribute which value is a relative (for this URL) link to the video. Name also required while creating script. It's length must be at least 3 characters but not greater than 20. Optionaly you could provide a description and an image for avatar (if no image provided, then avatar would be first letter of script name).
To create a script press "New Script" button -- after this modal window appear with "Create Script Form". The form contains following input fields: Name, Description, URL, Selector, Avatar and "Activate after creation" checkbox. By default checkbox is enabled.

##### Management

User can _edit_, _activate/deactivate_ and _delete_ monitor scripts.
Admin additionally can _block/unblock_ others scripts, as well as _view_ and _delete_ them. When script is blocked it's automaticly deactivated and cannot be activate back until someone unblocks it.

### Report Card

It is a card representing _monitor script_ report. It consists of:

- preview image (or stub image in case preview is not available)
- preview title
- script identifier
- report time
- "New" status indicator
- "Mark As Checked" button
- "Delete" button
  Clicking on the card redirects you to the page (which relative path was tracked by _CSS-selector_) of the website you specify with _URL_ when creating script.

### Header

Contains logo and navigation bar.
If user is unauthorized navigation bar will contain only "Home" and "Sign In" button.
If user authorized navigation bar will contain "Home", "Dashboard", "Scripts" and "Profile" icon.
Pressing on the link will redirect user to the corresponding page. Pressing "Sign In" button will redirect user to "Sign In" page. Pressing on "Profile" icon will open a popup containing user info (email, role) and "Sign Out" button.
"Profile" icon is different for user and admin.

### Footer

Contains logo, <span>&copy;</span> Copyright and links to github and linkedin

### Sign In Form

Contains 2 fields (_email_ and _password_), "Sign In" submit button and a text with link to "Sign Up" form.
Email can consist of latin letters (any case; A-Z, a-z), digits (0-9), underscore (\_), divis (-), at (@) and period (.).
Email length is in range \[10, 50].
Password can consist of latin letters (any case; A-Z, a-z), digits (0-9) and following special characters: "!", "@", "#", "$", "%", "^", "&", "\_", "-" and ".".
Password length is in range \[5, 50].

### Sign Up Form

All the same as for "Sign In" form, but the link in the text under form leads to "Sign In" form, and there is an extra field: _confirm password_ which has same constraints as _password_, and its content should match with _password_'s content for successful submission.
