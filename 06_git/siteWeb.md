# comment se faire héberger un site sur Github

doc ref
https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/

prerequisit
https://pages.github.com/

1 site par compte

# site statique

## step by step

créer un repository avec le nom de conexion
monGithub.github.io (contrainte)

```bash
créer un repository avec le nom de conexion
git clone https://github.com/monGithub/monGithub.github.io

cd username.github.io
echo "Hello World" > index.html
git add --all
git commit -m "Initial commit"
git push -u origin main
```

le site se trouve à

```
https://username.github.io.
```

ref
