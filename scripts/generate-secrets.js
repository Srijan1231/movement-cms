#!/usr/bin/env node

/**
 * Generate production secrets for Strapi Cloud deployment
 * Run with: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

console.log('🔐 Strapi Cloud Production Secrets\n');

console.log('Copy these values to your Strapi Cloud environment variables:\n');

// Generate APP_KEYS (4 keys required)
const appKeys = [];
for (let i = 0; i < 4; i++) {
  appKeys.push(crypto.randomBytes(16).toString('base64'));
}
console.log('APP_KEYS=' + appKeys.join(','));

// Generate JWT_SECRET
const jwtSecret = crypto.randomBytes(64).toString('base64');
console.log('JWT_SECRET=' + jwtSecret);

// Generate API_TOKEN_SALT
const apiTokenSalt = crypto.randomBytes(16).toString('base64');
console.log('API_TOKEN_SALT=' + apiTokenSalt);

// Generate ADMIN_JWT_SECRET
const adminJwtSecret = crypto.randomBytes(64).toString('base64');
console.log('ADMIN_JWT_SECRET=' + adminJwtSecret);

// Generate TRANSFER_TOKEN_SALT
const transferTokenSalt = crypto.randomBytes(16).toString('base64');
console.log('TRANSFER_TOKEN_SALT=' + transferTokenSalt);

console.log('\n📋 Instructions:');
console.log('1. Go to your Strapi Cloud project dashboard');
console.log('2. Navigate to Settings → Environment Variables');
console.log('3. Add each variable above with its corresponding value');
console.log('4. Save and redeploy your project');

console.log('\n⚠️  Important:');
console.log('- Keep these secrets secure and never commit them to Git');
console.log('- Each deployment should use unique secrets');
console.log('- Database credentials are automatically provided by Strapi Cloud');
