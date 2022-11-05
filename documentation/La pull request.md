# La pull request

## Qu'est-ce que c'est ?

La pull request, ou PR en abréviation, est une méthode de communication et de vérification d'un travail avant de le fusionner avec le reste d'un projet utilisant git et Github. Pour cela, il faut disposer de deux éléments essentiels : une branche principale sur laquelle se trouve l'ensemble du travail existant, et une seconde branche créée et utilisée exclusivement pour une tâche à réaliser.
Nous pouvons retrouver un mécanisme similaire sur Gitlab avec les "merge request" ou MR.

## À quoi ça sert ?

Comme cité ci-dessus, une pull request permet de faire une requête afin d'apporter un nouveau travail sur celui existant. Cela accorde une certaine gestion du projet avec un système de rôle disponible sur Github. Une fois la requête validée, la branche de l'issue sera merge sur la branche ciblée.

## Pourquoi s'en servir ?

La pull request a de nombreux avantages, voilà pourquoi il est conseillé de s'en servir dans un projet de développement ; particulièrement, si le projet possède plusieurs contributeurs.

### 1. Gestion du travail réalisé

Github met à disposition un système de rôle avec permissions afin de gérer le projet, qu'il soit public ou privé. Cela a pour avantage de réguler le travail réalisé : pouvoir accepter ou refuser une pull request. Ceci est très pratique dans les projets open sources : tout le monde peut contribuer au projet pour le faire évoluer en soumettant leur travail via une PR ; puis la personne disposant des permissions décide d'accepter le travail ou non.
Pour résumer, la PR permet de laisser tout le monde travailler sur le projet tout en s'assurant que rien n'est nocif pour ce dernier.

### 2. Forum de discutions

Lors de la soumission d'une pull request, le "reviewer" (la personne en charge de regarder et de valider une PR) voit l'ensemble des différences apportées au projet. Ainsi, il peut mettre des commentaires sur le code qui sera visible par tout le monde. Cela ouvre la conversation et le débat sur les éventuelles choses à changer et/ou à améliorer.
Chaque conversation peut être close afin de facilement voir ce qu'il a fait avant de valider la requête.

### 3. Résoudre les conflits

Une fois la pull request créée, elle affiche l'ensemble des changements et des différences entre les branches concernées. Elle met ainsi en lumière les problèmes de comptabilités et facilite la résolution des conflits.

### 4. Tenir au courant

Lors d'un travail en équipe, les informations ne circulent pas tout le temps. Réaliser une pull request permet de notifier les collaborateurs qu'un nouveau travail vient d'être réalisés. Ainsi, l'ensemble de l'équipe se tient au courant sans forcément en tenir compte (c'est-à-dire qu'ils ne sont pas obligés de faire le "reviewer"). Chaque équipe s'organise comme il le souhaite.

### 5. Historique de travail

La pull request affiche l'ensemble du travail réalisée sur la branche concernée. Elle met ainsi en lumière l'historique des commits réalisés avec ses informations : identifiant unique, date, créateur, message, branches.

## Exemples

### Discution d'une PR

[Pull request #757 sur Linux](https://github.com/torvalds/linux/pull/757)
![[Pasted image 20221105122624.png]]

### Historique de Commit

[Pull request #757 sur Linux](https://github.com/torvalds/linux/pull/757)
![[Pasted image 20221105122955.png]]
Un autre exemple d'historique avec plus de travail sur l'issue (la tâche) [#766](https://github.com/torvalds/linux/pull/766) du même projet.

### État de merge de la PR

Il y a des conflits à résoudre avant de pouvoir merge :
![[Pasted image 20221105123449.png]]
[source](https://github.com/torvalds/linux/pull/766)

### Comparaison des différences apportées

En rouge ce qu'il y a été enlevé et en vert apporté

![[Pasted image 20221105123805.png]]
[source](https://github.com/torvalds/linux/pull/766/commits/b295171cff3f014dba711c9d57c3104ccb09a7ee)

## Conclusion

Nous avons observé les différentes fonctionnalités que propose une pull request. Elle permet d'informer l'équipe de collaboration d'un nouveau travail réalisé et de donner un feedback sur ce dernier ; tout en l'acceptant ou non.

## Sources

- Connaissances acquises lors de l'alternance
- [Inspiration rapide](https://www.atlassian.com/fr/git/tutorials/making-a-pull-request)
- [Documentation de github](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
