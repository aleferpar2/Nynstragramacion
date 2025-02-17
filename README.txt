.env:
- Cambiar APP_BASE_URL
- Meterle la base de dato de NEON
- next.config: meterle las imagenes sin el https y sin el / despues del .com
- En teoria esta creada la base de datos pero sino y da problemas con el uuid meter este script: await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; 
    dentro de un script dentro del neondb para crear una tabla y que cree los uuid de extension y luego ejecutarlo.
    