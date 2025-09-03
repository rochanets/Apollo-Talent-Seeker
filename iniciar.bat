@echo off

REM Check Node.js installation

where node >nul 2>&1

IF %ERRORLEVEL% NEQ 0 (

  echo Node.js nao encontrado. Instalando via winget...

  winget install OpenJS.NodeJS -e --id OpenJS.NodeJS -h

  set "PATH=%ProgramFiles%\nodejs;%PATH%"

)



REM Verify npm availability

npm --version >nul 2>&1

IF %ERRORLEVEL% NEQ 0 (

  echo npm nao encontrado ou falhou. Abortando.

  exit /b 1

)



REM Install project dependencies

echo Instalando dependencias...

npm install



REM Start Jobs service on port 3000

echo Iniciando servico Jobs na porta 3000...

npm run start -w services/jobs

