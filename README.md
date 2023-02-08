# Front-end 
Pour faire le front-end, j'ai utilisé le back-end de Roch Moreau. 
## Pour débuter

Pour lancer l'application : 

```bash

npm run dev

```
On arrive sur la page d'accueil où il faut se login.
Une fois sur la page de login, soit on a déjà un compte et on se login, soit on s'inscrit avec un username et un mot de passe. Dans tous les cas, on sera redirigé vers la page de login.
## User Story Map et différents fonctionnalités
Mon application est composée d'une login page (contenant un lien vers la page register), une register page et une page "Location" où toutes les locations sont listées 5 par 5 et on peut aller d'une page à une autre. 


### US1: 
   As a random visitor, I want to be able to register an account or log-in, so I can
   access all features 
 ### US2:
   As a random visitor, I want to be redirected to the login/register page when I click on
   “location" tab, so that I know I must log-in to see its content
### US3 : 
As a logged-in user, I want to see locations and be able to click on one location to
open a modal containing details, so that the website is useful
 ### US4 : 
As an logged-in-user, I want to see a “Add Location” button in the location page, so
that I can create a new location
### US6 : 
As an logged-in-user, I want to see a button to delete locations in the array of
locations so that I can delete existing locations

 
Le bouton `RETRIEVE` ne fonctionne pas. 
Aussi, les rôles fonctionnaient pour le bouton add mais empêchaient le bouton delete d'assurer sa fonctionnalité pour l'administrateur, le code est présent mais j'ai préféré garder la fonctionnalité du bouton delete que de permettre aux différents rôles d'assurer leurs fonctionnalités. 




