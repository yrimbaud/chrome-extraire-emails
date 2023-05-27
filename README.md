# Extension Chrome pour extraire les emails d'une page

Cette extension Chrome permettant d'extraire rapidement les adresses email de la page HTML actuelle.

Elle est particulièrement utile pour extraire des emails qui ont été obfusqués (en CSS ou JavaScript).

## Installation et Utilisation

- Téléchargez les fichiers de ce dépôt
- Ouvrez Chrome et accédez à chrome://extensions/
- Activez le mode développeur en haut à droite.
- Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le dossier que vous avez créé.
- Naviguez sur la page dont vous souhaitez extraire les adresses email
- Cliquez sur l'icone représentant l'extension "Extract Emails"

## Problèmes connus

L'extension utilise le Manifest version 2 qui est déprécié.

## Limites

L'extension ne peut extraire que les adresses email qui sont présentes dans le code HTML de la page. Elle ne peut pas extraire les adresses email qui sont dynamiquement chargées ou celles qui sont cachées derrière des éléments interactifs.

## Auteur

L'extension Chrome a été créée par Yann Rimbaud ([@yrimbaud](https://github.com/yrimbaud/)).
