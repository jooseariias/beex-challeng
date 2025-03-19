

---
# Mobile Sports App Challenge
<img src="https://res.cloudinary.com/dmxriftxk/image/upload/v1742396841/100shots_so_v3cjzn.png" alt="" width="500" />
<br>

Este proyecto es una aplicación móvil desarrollada con Expo, centrada en mostrar las habilidades técnicas y la creatividad , El objetivo es implementar un sistema de registro de usuario, creación de perfil, búsqueda de complejos deportivos y partidos, y un sistema de recomendación de partidos (matchmaking) basado en el nivel del jugador.

## Descripción General

La aplicación permite a los usuarios:
1. Registrarse y crear su perfil.
2. Ver una barra de progreso que indica el nivel de completado del perfil.
3. Buscar complejos deportivos por nombre o ciudad.
4. Buscar partidos disponibles y crear nuevos partidos.
5. Acceder a un módulo de "matchmaking", donde se muestran posibles partidos recomendados según el perfil del jugador.
<img src="https://res.cloudinary.com/dmxriftxk/image/upload/v1742396841/100shots_so_v3cjzn.png" alt="" width="500" />

## Lo que encontrarás

1. **Pantalla de registro/login:**

   - Formulario de registro con datos básicos (correo electrónico, contraseña, nombre, ciudad).
   - Pantalla de login con datos básicos (Correo electrónico, contraseña).
   
2. **Pantalla de perfil:**
   - Mostrar y editar los datos del perfil (correo electrónico, nombre, ciudad , nivel de juego,contraseña).
   - Barra de progreso visual que indica el porcentaje de completado del perfil.

3. **Pantalla de búsqueda de complejos:**
   - Lista de complejos con nombre, ciudad y distancia.
   - Input para buscar complejos por ciudad o nombre.
   - Opción para marcar complejos como favoritos.

4. **Pantalla de búsqueda de partidos:**
   - Lista de partidos disponibles.
   - Mostrar ranking mínimo requerido y número de jugadores.
   - Botón simulado para unirse a partidos.

5. **Pantalla de matchmaking:**
   - Mostrar partidos recomendados según el nivel del jugador.
   - Filtrar los partidos en función del nivel del jugador (novato, intermedio, avanzado).

6. **Persistencia local:**
   - Guardar los datos del perfil y favoritos usando AsyncStorage o una solución similar.
   <img src="https://res.cloudinary.com/dmxriftxk/image/upload/v1742396840/418shots_so_hyamq9.png" alt="" width="500" />

## Dependencias

Este proyecto fue creado con Expo y depende de las siguientes tecnologías:

- Expo
- React Navigation
- React Native (para el desarrollo móvil)
- AsyncStorage para persistencia de datos locales
- React Vector Icons para íconos
- React Hook Form para manejo de formularios

## Instalación

### Clonación del repositorio

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/jooseariias/beex-challeng.git

2-Una ves clonado  abrir con  un editor de codigo ejmplo (vsc) 

3-Instalar dependencias con el comando

```bash
 npm install
```
4- Ejecutar la aplicacion con el comando

```bash
 npm run start
```

 Con eso la app ya debe funcionar , si no tienes emualdor en tu pc puedes usar  el movil con la app de expo