@echo off
REM Vérification si Git est installé et accessible dans le chemin d'accès
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo Erreur : Git n'est pas installé ou n'est pas accessible dans le chemin d'accès.
    exit /b 1
)

REM Vérification des arguments
if "%~1"=="" (
    echo Erreur : Vous devez spécifier un message pour le commit en utilisant le paramètre %param%
    exit /b 1
)

REM Exécution des commandes Git
git add .
git commit -m "%~1"
git push origin master

REM Vérification du statut de la dernière commande Git
if %errorlevel% neq 0 (
    echo Erreur : Une erreur s'est produite lors de l'exécution des commandes Git.
    exit /b 1
)

echo Les commandes Git ont été exécutées avec succès.
exit /b 0
