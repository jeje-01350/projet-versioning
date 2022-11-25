# Projet Versioning

## Collaborateurs
Jeremy Rossi, Bastien Oeuvrard, Mathis Rome, Loan Courchinoux-Billonnet

## Workflow
 Nous nous sommes basé sur le workflow [d'Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows) qui explique très bien son fonctionnement et pourquoi nous faisons cela. Nous avons réalisé un schéma qui représente son mode de fonctionnement :
![schema gitflow](/documentation/img/readme_workflow.png)
Nous disposons d'une branche principale Master qui est celle de production. Nous envoyons le travail sur cette dernière une fois que le travail est stable, nous en profitons pour tag nos releases. Plus profond dans l'arbre nous retrouvons la branche develop dans lequel nous mergeons l'ensemble des features afin de résoudre les conflits et stabiliser le travail.

## Bonnes pratiques
Afin de facilité le travail de groupe, nous avons mis en place des bonnes pratiques à respecter :
- Répertoire des tâches à réaliser : Github nous mets à disposition un système d'issue qui correspond a une tâche. Nous avons ainsi rassemblé l'ensemble du travail dans les issues pour pouvoir se diviser le travail et utilisé un tableau kanban (project sur Github) pour donner un état à la tâche.
- Nommage des branches : Pour chaque nouvelles tâches, nous créons une branche associée. Afin de se retrouver dans ces dernière, chaque nom de branche commencent pas le numéro de l'issue puis de quelques mots clef expliquant cette dernière.
- Utiliser les pull request : Une fois encore, Github nous mets à disposition un fabuleux outil que sont les pull request. Une documentation complète de la pull request se situe dans le dossier documentation.
- Toujours push sur ses branches : nous nous sommes interdit de push sur une autre branche que clles que nous avons créée pour la feature que nous développons. Cela permet d'éviter certains problèmes.
- Messages de commit : Nous avons respecté la nomenclature des commits donnée par la [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) afin de normaliser notre travail avec le reste du monde.

## Documentation
Nous avons créé des fichiers markdown dans le répertoire documentation pour renseigner et expliquer notre projet. L'ensemble de ses derniers se situent au même endroit avec leurs images.

## Récupérer et participer au projet
Vous pouvez récupérer le projet de plusieurs façon différentes :
- Fork le projet dans votre répertoire
- Clone le projet
- Télécharger le projet
Malheureusement, il est impossible d'apporter des modifications sur le projet, seul les collaborateurs actuels ont les droits d'apporter un travail.

### Fork le projet
Pour les personnes ne connaissant pas ce terme, le fork permet de dupliquer le projet dans votre compte personnel. Ainsi, vous obtenez l'ensemble des droits mais vous ne travaillez pas sur le repository git original. Il n'évolura donc qu'en fonction de vous.
Pour cela, rien de plus simple : il suffit de cliquer sur le bouton fork en haut à droite du répertoire
![github fork](/documentation/img/readme_fork.png)

### Clone le projet
Vous pouvez cloner le projet de 3 façon différente.

#### HTTPS
la méthode la plus courante, il suffit de renseigner le lien https dans un SVN utilisant une url web :
```bash
git clone https://github.com/jeje-01350/projet-versioning.git
```

#### SSH
Une méthode plus sécurisée, il est préférable d'utiliser une clef SSH pour l'ensemble de ses projet Git. Un tuto de Github est disponible juste [ici](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). La commande pour récupérer le projet est la suivante :
```bash
git clone git@github.com:jeje-01350/projet-versioning.git
```

#### Github CLI
Une méthode spécifique à Github, tout est expliqué dans la [documentation](https://cli.github.com/). 
```bash
gh repo clone jeje-01350/projet-versioning
```
