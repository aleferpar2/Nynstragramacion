.env:
- Cambiar APP_BASE_URL
- Meterle la base de dato de NEON
- next.config: meterle las imagenes sin el https y sin el / despues del .com
- En teoria esta creada la base de datos pero sino y da problemas con el uuid meter este script: await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; 
    dentro de un script dentro del neondb para crear una tabla y que cree los uuid de extension y luego ejecutarlo.



# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs.eu-central-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech
PGHOST_UNPOOLED=ep-empty-cake-a2t3p8fs.eu-central-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_ez5QStL4pEJZ

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs.eu-central-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech
POSTGRES_PASSWORD=npg_ez5QStL4pEJZ
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_ez5QStL4pEJZ@ep-empty-cake-a2t3p8fs-pooler.eu-central-1.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=15&sslmode=require

AUTH0_SECRET='28d66123ddcf48eea37869fed87b64d306e2d5ee549b8ed50434d6c57d21262d'
APP_BASE_URL='http://localhost:3000'
AUTH0_DOMAIN='https://dev-vb3tcrl5f21m8zd6.us.auth0.com'
AUTH0_CLIENT_ID='Fjp3IgRwCmULF9xgH2ijdvGgrUS70Llr'
AUTH0_CLIENT_SECRET='r4ISo6fkwLSWKqyaQatgJWK0ZgVPK72G5g4OwH9Sk9x8-1ipyP5k_Ng9wFaEfIbF'
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_pw4NIKJT7r7HrMxE_j0UcLvp1cn1WRs6vSlkPJLT91H6uxo"