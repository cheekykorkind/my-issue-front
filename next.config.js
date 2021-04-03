require("dotenv").config({ path: `./env_files/.env.${process.env.STAGE}` });

const isTestEnv = process.env.STAGE === 'test'

module.exports = {
    env: {
        BASE_DOMAIN: process.env[isTestEnv ? 'T_BASE_DOMAIN' : 'BASE_DOMAIN'],
        API_DOMAIN: process.env[isTestEnv ? 'T_API_DOMAIN' : 'API_DOMAIN'],
        APP_LOCALE: process.env[isTestEnv ? 'T_APP_LOCALE' : 'APP_LOCALE'],
    },
}