# one-sec-for-the-elderly 长者一瞬

## Description

Using [Nest](https://github.com/nestjs/nest) framework.

## Configuration

You can create a `.env.local` file and specify database details.

See `.env` file for more details.

**_WARNING:_** table schemas might be modified when `DB_SYNC` is set to be `true`. You might lose data. So it should be set to `false` when used in production.

**_HINT:_** you can create the database yourself, set up proper priveleges and keep `DB_SYNC` to be true. Then start the server in `dev` mode, the ORM will create necessary tables for you. **_DO NOT FORGET_** to set `DB_SYNC` back to `false` after the tables are created.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test API

After the server is launched, you can access Swagger at [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger) to play with APIs yourself.

## Support

No support.

## Stay in touch

- Author - [Ruiqi Lei](mail@rn7s2.cn)
