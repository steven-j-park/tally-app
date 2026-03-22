## Application Description
Tally is a document inventory management system for the purposes of preparing US Federal Tax Returns.
** Primary Functions
  ** Review Client List
  ** Review Dashboards/Charts to see, at-a-glance, the processing status of the year's clients and trends in revenue and client growth
  ** Allow individual preparers to 'check-out' a client to indicate that they are currently working on that client's return
  ** Add or remove client documents, separated by document type (i.e. W2, 1099-INT, 1099-R, etc.)
  ** Add quarterly tax vpayments for some clients
** Limitations and Scope
  ** This application is currently limited to be a document inventory and client workflow system only. It does not provide a document store for those documents and cannot store sensitive PII, PHI, or otherwise sensitive data

## Technology Stack
**Tauri**<br>
UI - Vue (Composition API) w/ Typescript & TailwindCSS<br>
UI Component Library - PrimeVue<br>
Backend - Rust<br>

## Conventions
**All UI related files are located in the src directory**<br>
New Vue components should be saved in src/components/pages unless otherwise specified<br>
Vue components should be Pascalcase<br>
Auto-import for PrimeVue components is enabled, so explicit import of PrimeVue components is unnecessary<br>
Models and contract classes should be saved in src/models<br>
Follow default recommended linting rules for typescript and vue files as well as no semi-colons<br>
Format all code following default Prettier rules and tab sizes of 2 spaces<br>

**All backend related files are located in the src-tauri directory**<br>

## Platform Targets
**Planned - MacOS**<br>
**Possible - Windows**<br>
**Not Planned - Linux | Mobile**